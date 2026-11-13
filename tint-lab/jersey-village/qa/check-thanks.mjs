// Run with Chrome listening on 127.0.0.1:9223; no external dependencies.
import { readFile, writeFile } from 'node:fs/promises';
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

const formId='yDdjh75p0NKglkWZqaoW', locationId='pxdhJJfDvMjUfbPgeNBe';
const frameIds=['inline-'+formId,'inline-'+formId+'-lower'];
const fixtureURL='http://127.0.0.1:7199/qa-success-fixture.html';
const fixture=`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><script src="ghl-thanks.js"></script>${frameIds.map(id=>`<iframe class="ghl-form-frame" id="${id}" data-form-id="${formId}" src="https://api.leadconnectorhq.com/widget/form/${formId}?test=${id}"></iframe>`).join('')}`;
const child=`<!doctype html><title>Isolated GHL message fixture</title><script>window.addEventListener('message',e=>{if(e.origin==='http://127.0.0.1:7199')window.parent.postMessage(e.data,e.origin)});window.parent.postMessage(['fixture-ready'],'http://127.0.0.1:7199');</script>`;
const originalMessage=socket.onmessage;
const networkFailures=[];
socket.onmessage=event=>{
 originalMessage(event);
 const m=JSON.parse(event.data);
 if(m.method==='Fetch.requestPaused'){
  const {requestId,request}=m.params;
  const html=request.url===fixtureURL?fixture:request.url.startsWith('https://api.leadconnectorhq.com/widget/form/'+formId)?child:null;
  const op=html!==null?send('Fetch.fulfillRequest',{requestId,responseCode:200,responseHeaders:[{name:'Content-Type',value:'text/html'}],body:Buffer.from(html).toString('base64')}):request.url.startsWith('http://127.0.0.1:7199/')?send('Fetch.continueRequest',{requestId}):send('Fetch.failRequest',{requestId,errorReason:'BlockedByClient'});
  op.catch(e=>networkFailures.push(e.message));
 }
};
await send('Fetch.enable',{patterns:[{urlPattern:'*',requestStage:'Request'}]});
const loadFixture=async()=>{
 await send('Page.navigate',{url:fixtureURL});
 await evaluate(`new Promise((resolve,reject)=>{let n=0;const timer=setInterval(()=>{if(document.readyState==='complete'&&document.querySelectorAll('iframe').length===2){clearInterval(timer);resolve(true)}else if(n++>150){clearInterval(timer);reject('fixture timeout')}},20)})`);
};
const payload=id=>['set-sticky-contacts','embedded_iframe_'+id,id,locationId,'test-fingerprint'];
const post=async(id,data)=>evaluate(`document.getElementById(${JSON.stringify(id)}).contentWindow.postMessage(${JSON.stringify(data)},'https://api.leadconnectorhq.com')`);
await loadFixture();
const id=frameIds[0];
const negatives=[
 ['load',1],['resize',400],['error','submission failed'],
 ['set-sticky-contacts','_ud','{}',locationId,'test-fingerprint'],
 ['set-sticky-contacts','embedded_iframe_wrong',id,locationId,'test-fingerprint'],
 ['set-sticky-contacts','embedded_iframe_'+id,'wrong-frame',locationId,'test-fingerprint'],
 ['set-sticky-contacts','embedded_iframe_'+id,id,'wrong-location','test-fingerprint'],
 ['set-sticky-contacts','embedded_iframe_'+id,id,locationId,''],
 ['set-sticky-contacts','embedded_iframe_'+id,id,locationId,'   '],
 ['set-sticky-contacts','embedded_iframe_'+id,id,locationId,123],
 {action:'set-sticky-contacts'},'not-an-array'
];
for(const value of negatives)await post(id,value);
// Browser-created MessageEvents exercise rejection of the wrong source/origin.
await evaluate(`(()=>{const f=document.getElementById(${JSON.stringify(id)});const data=${JSON.stringify(payload(id))};window.dispatchEvent(new MessageEvent('message',{data,origin:'https://example.com',source:f.contentWindow}));window.dispatchEvent(new MessageEvent('message',{data,origin:'https://api.leadconnectorhq.com',source:window}));f.dataset.formId='wrong-form';f.contentWindow.postMessage(data,'https://api.leadconnectorhq.com')})()`);
await evaluate(`new Promise(r=>setTimeout(r,100))`);
assert(await evaluate('location.href')===fixtureURL,'A negative message navigated');
const positive=[];
for(const frameId of frameIds){
 await loadFixture();
 await post(frameId,payload(frameId));
 await evaluate(`new Promise(r=>setTimeout(r,150))`).catch(()=>{});
 await waitFor(`location.pathname==='/thank-you.html' && document.querySelector('.thanks-content')`);
 positive.push({frame:frameId,url:await evaluate('location.href')});
}
const layouts=[];
for(const width of [1440,390,320]){
 await send('Emulation.setDeviceMetricsOverride',{width,height:950,deviceScaleFactor:1,mobile:false});
 await send('Page.navigate',{url:'http://127.0.0.1:7199/thank-you.html'});
 await waitFor(`document.readyState==='complete' && document.querySelector('.thanks-content')`);await evaluate('document.fonts.ready');
 const result=await evaluate(`({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,h1:document.querySelectorAll('h1').length,robots:document.querySelector('meta[name=robots]').content,iframes:document.querySelectorAll('iframe').length,analyticsLoaders:document.querySelectorAll('script[src*="googletagmanager.com"]').length,gtagConfigured:window.dataLayer.some(x=>x[0]==='config'&&x[1]==='AW-18046216903'),bottomPadding:getComputedStyle(document.body).paddingBottom,logoLoaded:document.images[0].naturalWidth>0,calls:[...document.querySelectorAll('a[href^="tel:"]')].map(a=>a.getAttribute('href')),address:document.querySelector('address').innerText})`);
 assert(!result.overflow && result.h1===1 && result.robots.includes('noindex') && result.iframes===0 && result.analyticsLoaders===2 && result.gtagConfigured && result.logoLoaded && result.bottomPadding==='0px','Thank-you layout/privacy check failed');
 assert(result.calls.every(x=>x==='tel:+18322120354') && result.address.includes('14518 Hempstead Rd'),'Wrong thank-you contact');
 layouts.push(result);const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});await writeFile(new URL(`./thanks-${width}.png`,import.meta.url),Buffer.from(shot.data,'base64'));
}
assert(!networkFailures.length,'Network interception failed');
const result={negativeCases:negatives.length+3,positive,layouts,note:'Actual browser messages from isolated cross-origin iframe fixtures. GHL network requests intercepted; no contact data or leads submitted.'};
await writeFile(new URL('./thanks-results.json',import.meta.url),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));socket.close();
