export async function onRequest(context: { request: Request; next: () => Promise<Response> }) {
  const url = new URL(context.request.url);
  const LMS_TARGET = 'https://lms.kemkes.go.id/courses/cc233408-d5f2-428f-9871-21413b2ecea1';

  // Shortcut for LMS Plataran Sehat Kemenkes
  const cleanPath = url.pathname.replace(/\/+$/, '');
  if (cleanPath === '/lms' || cleanPath === '/ccpg2026/lms') {
    return Response.redirect(LMS_TARGET, 302);
  }

  // Handle call for abstract shortcuts
  if (
    cleanPath === '/call-for-abstract' ||
    cleanPath === '/abstract' ||
    cleanPath === '/call-for-paper' ||
    cleanPath === '/paper'
  ) {
    return Response.redirect(`${url.origin}/ccpg2026/call-for-abstract`, 302);
  }

  // If request is to ccpg2026 subdomain and at root, redirect to /ccpg2026/
  if (url.hostname.startsWith('ccpg2026') && (url.pathname === '/' || url.pathname === '')) {
    return Response.redirect(`${url.origin}/ccpg2026/`, 302);
  }
  return context.next();
}
