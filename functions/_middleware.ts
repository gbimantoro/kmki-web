export async function onRequest(context: { request: Request; next: () => Promise<Response> }) {
  const url = new URL(context.request.url);
  const LMS_TARGET = 'https://lms.kemkes.go.id/courses/cc233408-d5f2-428f-9871-21413b2ecea1';

  // Shortcut for LMS Plataran Sehat Kemenkes
  const cleanPath = url.pathname.replace(/\/+$/, '');
  if (
    cleanPath === '/lms' || 
    cleanPath === '/ccpg2026/lms' || 
    cleanPath === '/ccpg2026kaj/lms' || 
    cleanPath === '/ccpg20226kaj/lms'
  ) {
    return Response.redirect(LMS_TARGET, 302);
  }

  // Handle Call for Poster & Abstract shortcuts
  if (
    cleanPath === '/poster' ||
    cleanPath === '/call-for-paper' ||
    cleanPath === '/paper' ||
    cleanPath === '/call-for-abstract' ||
    cleanPath === '/abstract' ||
    cleanPath === '/ccpg2026/call-for-poster' ||
    cleanPath === '/ccpg2026/poster' ||
    cleanPath === '/ccpg2026/call-for-paper' ||
    cleanPath === '/ccpg2026/call-for-abstract' ||
    cleanPath === '/ccpg2026kaj/call-for-poster' ||
    cleanPath === '/ccpg2026kaj/poster' ||
    cleanPath === '/ccpg2026kaj/call-for-paper' ||
    cleanPath === '/ccpg2026kaj/call-for-abstract'
  ) {
    return Response.redirect(`${url.origin}/call-for-poster/`, 302);
  }

  // Redirect /ccpg2026kaj or /ccpg20226kaj path directly to /ccpg2026/
  if (cleanPath === '/ccpg2026kaj' || cleanPath === '/ccpg20226kaj') {
    return Response.redirect(`${url.origin}/ccpg2026/`, 302);
  }

  // If request is to ccpg2026, ccpg2026kaj, or ccpg20226kaj subdomain and at root, redirect to /ccpg2026/
  const isCCPGSubdomain =
    url.hostname.startsWith('ccpg2026') ||
    url.hostname.startsWith('ccpg20226');

  if (isCCPGSubdomain && (url.pathname === '/' || url.pathname === '')) {
    return Response.redirect(`${url.origin}/ccpg2026/`, 302);
  }

  // If request is to kaj subdomain and at root, redirect to /kaj/
  const isKAJSubdomain = url.hostname.startsWith('kaj');
  if (isKAJSubdomain && (url.pathname === '/' || url.pathname === '')) {
    return Response.redirect(`${url.origin}/kaj/`, 302);
  }
  return context.next();
}

