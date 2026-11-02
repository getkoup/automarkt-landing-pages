// Run with Chrome listening on 127.0.0.1:9223; no external dependencies.
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
const tab = targets.find(target => target.type === 'page');
const socket = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
let sequence = 0;
const pending = new Map();
const errors = [], network = [];
socket.onmessage = ({ data }) => {
  const message = JSON.parse(data);
  if (message.id) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    message.error ? reject(new Error(JSON.stringify(message.error))) : resolve(message.result);
  }
  if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails.text);
  if (message.method === 'Network.requestWillBeSent') network.push(message.params.request.url);
};
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++sequence;
  pending.set(id, { resolve, reject });
  socket.send(JSON.stringify({ id, method, params }));
});
const evaluate = async expression => {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
  return result.result.value;
};
const waitFor = async expression => evaluate(`(async()=>{for(let i=0;i<80;i++){if(${expression})return true;await new Promise(r=>setTimeout(r,50))}throw Error('Page readiness timeout')})()`);
const assert = (value, message) => { if (!value) throw new Error(message); };
await send('Page.enable');
await send('Runtime.enable');
await send('Network.enable');
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
// Wait for actual content in both cross-origin frames, not only their parent boxes.
const embeddedContents = async () => {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const frames = targets.filter(t=>t.type==='iframe' && t.url.startsWith('https://api.leadconnectorhq.com/widget/form/yDdjh75p0NKglkWZqaoW'));
  const values=[];
  for(const frame of frames){
    const child=new WebSocket(frame.webSocketDebuggerUrl);
    await new Promise((resolve,reject)=>{child.onopen=resolve;child.onerror=reject});
    child.send(JSON.stringify({id:1,method:'Runtime.evaluate',params:{expression:`JSON.stringify({inputs:document.querySelectorAll('input[type=text],input[type=tel]').length,button:!!document.querySelector('button[type=submit]'),ready:document.readyState})`,returnByValue:true}}));
    const value=await new Promise(resolve=>{child.onmessage=e=>{const m=JSON.parse(e.data);if(m.id===1)resolve(m.result?.result?.value)}});
    child.close();if(value)values.push(JSON.parse(value));
  }
  return values;
};
const pageURL = process.env.TINT_LAB_QA_URL || 'http://127.0.0.1:7199/';
const widgetURL = 'https://api.leadconnectorhq.com/widget/form/yDdjh75p0NKglkWZqaoW';
const report = [];
for (const width of [1440, 390, 320]) {
  await send('Emulation.setDeviceMetricsOverride', { width, height: 1000, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: pageURL });
  await waitFor(`document.readyState!=='loading' && document.querySelectorAll('iframe.ghl-form-frame').length===2`);
  await evaluate('document.fonts.ready');
  await evaluate(`(async()=>{for(const img of document.images){img.loading='eager';try{await img.decode()}catch{}}for(const f of document.querySelectorAll('iframe.ghl-form-frame')){f.loading='eager';f.scrollIntoView();await new Promise(r=>setTimeout(r,250))}})()`);
  let embedded=[];
  for(let attempt=0;attempt<30;attempt++){
    embedded=await embeddedContents();
    if(embedded.length===2 && embedded.every(f=>f.inputs===3 && f.button && f.ready==='complete'))break;
    await evaluate(`new Promise(r=>setTimeout(r,500))`);
  }
  assert(embedded.length===2 && embedded.every(f=>f.inputs===3 && f.button),'Both real iframe forms must finish rendering');
  await evaluate(`new Promise(r=>setTimeout(r,1000))`);
  const result = await evaluate(`({
    width:innerWidth,height:document.documentElement.scrollHeight,
    overflow:document.documentElement.scrollWidth>innerWidth,
    brokenImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),
    brokenAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash),
    duplicateIds:[...document.querySelectorAll('[id]')].map(e=>e.id).filter((id,i,a)=>a.indexOf(id)!==i),
    h1Count:document.querySelectorAll('h1').length,
    frames:[...document.querySelectorAll('iframe.ghl-form-frame')].map(f=>({id:f.id,src:f.src,height:f.getBoundingClientRect().height,display:getComputedStyle(f).display,formId:f.dataset.formId,layout:f.dataset.layout})),
    nativeScriptCount:document.querySelectorAll('script[src="https://link.msgsndr.com/js/form_embed.js"]').length,
    placeholders:document.querySelectorAll('[data-demo-form],.placeholder-form').length,
    formFits:[...document.querySelectorAll('.form-card')].every(e=>e.getBoundingClientRect().left>=0 && e.getBoundingClientRect().right<=innerWidth+1),
    calls:[...document.querySelectorAll('a[href^="tel:"]')].map(a=>a.getAttribute('href'))
  })`);
  assert(!result.overflow && !result.brokenImages.length && !result.brokenAnchors.length && !result.duplicateIds.length,`Page layout/assets failed at ${width}`);
  assert(result.h1Count===1 && result.formFits && result.placeholders===0 && result.nativeScriptCount===1,'Embed structure failed');
  assert(result.frames.every(f=>f.src===widgetURL && f.formId==='yDdjh75p0NKglkWZqaoW' && f.display==='block' && f.height>=300 && f.layout.includes('INLINE')),'Frame visibility or identity failed');
  assert(result.calls.length===6 && result.calls.every(c=>c==='tel:+18322120354'),'Call links changed');
  report.push(result);
  await evaluate(`(async()=>{scrollTo(0,0);await new Promise(r=>setTimeout(r,600));await new Promise(requestAnimationFrame)})()`);
  const {data}=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:0,y:0,width,height:result.height,scale:1}});
  await writeFile(new URL(`./page-${width}.png`,import.meta.url),Buffer.from(data,'base64'));
}
const interactions=await evaluate(`(()=>{const track=document.getElementById('review-track');document.getElementById('review-next').click();const carouselMoved=track.scrollLeft>0;track.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowLeft',bubbles:true}));const keyboardMoved=track.scrollLeft===0;const faq=document.querySelector('details');faq.querySelector('summary').click();document.querySelector('[data-form-jump]').click();return {carouselMoved,keyboardMoved,faqOpened:faq.open,mobileFocus:document.activeElement.classList.contains('form-card')}})()`);
assert(Object.values(interactions).every(Boolean),'Page interaction failed');
// Read actual widget styling directly without submitting any data.
await send('Page.navigate',{url:widgetURL});
await evaluate(`new Promise((resolve,reject)=>{let i=0;const t=setInterval(()=>{if(document.querySelector('#_builder-form button[type=submit]')){clearInterval(t);resolve(true)}else if(i++>200){clearInterval(t);reject('Widget did not render')}},100)})`);
await evaluate(`new Promise(r=>setTimeout(r,1000))`);
const widget=await evaluate(`(()=>{const form=document.getElementById('_builder-form');const inputs=[...form.querySelectorAll('input[type=text],input[type=tel]')].map(i=>{const s=getComputedStyle(i);return {type:i.type,name:i.name,bg:s.backgroundColor,color:s.color,fontSize:s.fontSize,paddingLeft:s.paddingLeft}});const button=getComputedStyle(form.querySelector('button[type=submit]'));const outer=getComputedStyle(form);return {inputs,button:{bg:button.backgroundColor,color:button.color,text:form.querySelector('button[type=submit]').innerText},outer:{background:outer.backgroundColor,padding:outer.padding,border:outer.borderWidth},overflow:document.documentElement.scrollWidth>innerWidth}})()`);
assert(widget.inputs.length===3 && widget.inputs.every(i=>i.bg==='rgb(39, 36, 33)' && i.fontSize==='16px'),'Actual widget field styles failed');
assert(widget.button.bg==='rgb(243, 99, 41)' && widget.outer.background==='rgba(0, 0, 0, 0)' && widget.outer.padding==='0px','Actual widget wrapper/button styles failed');
const screenshot=await send('Page.captureScreenshot',{format:'png'});await writeFile(new URL('./actual-ghl-form.png',import.meta.url),Buffer.from(screenshot.data,'base64'));
const widgetResponses=network.filter(u=>u.startsWith(widgetURL));
assert(widgetResponses.length>=3,'Native widget requests missing');
const output={report,interactions,widget,widgetRequests:widgetResponses.length,runtimeErrors:errors,note:'Read-only rendering check; no form data entered or submitted, no CRM delivery or redirect test.'};
await writeFile(new URL('./results.json',import.meta.url),JSON.stringify(output,null,2)+'\n');
console.log(JSON.stringify(output,null,2));socket.close();
