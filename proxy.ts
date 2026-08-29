import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  // React's dev-mode tooling needs eval() for debugging; it is never used in production.
  const scriptSrc = `'self' 'nonce-${nonce}' 'strict-dynamic'${
    process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""
  }`;

  const csp = `
    default-src 'self';
    script-src ${scriptSrc};
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https://i.ytimg.com;
    font-src 'self';
    connect-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-src https://www.youtube-nocookie.com https://www.supportkori.com https://supportkori.com;
    frame-ancestors 'none';
  `
    // No upgrade-insecure-requests: it forces every same-origin asset
    // request onto https:// even when the site itself is served over
    // plain http (e.g. a bare IP:port with no TLS termination in front),
    // which breaks every CSS/JS/font load with ERR_SSL_PROTOCOL_ERROR.
    // Only add it back once this app is actually served over HTTPS.
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
