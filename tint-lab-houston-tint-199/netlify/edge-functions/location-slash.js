// /memorial -> /memorial/ (same for /jersey-village and /galleria), keeping the
// query string (gclid, utm_*). Netlify redirect rules ignore trailing slashes,
// so this can't be a plain redirect rule without looping.
export default (request) => {
  const url = new URL(request.url);
  if (url.pathname.endsWith('/')) return;
  url.pathname += '/';
  return Response.redirect(url.toString(), 301);
};

export const config = { path: ['/jersey-village', '/memorial', '/galleria'] };
