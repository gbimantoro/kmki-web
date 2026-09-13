export async function onRequest(context: { request: Request; next: () => Promise<Response> }) {
  const url = new URL(context.request.url);
  // If request is to ccpg2026 subdomain and at root, redirect to /ccpg2026/
  if (url.hostname.startsWith('ccpg2026') && (url.pathname === '/' || url.pathname === '')) {
    return Response.redirect(`${url.origin}/ccpg2026/`, 302);
  }
  return context.next();
}
