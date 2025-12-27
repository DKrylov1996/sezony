export function getBaseUrl(request: {
  headers: Headers;
  nextUrl?: URL;
  url?: string;
}) {
  const forwardedProto = request.headers.get('x-forwarded-proto');
  const forwardedHost = request.headers.get('x-forwarded-host');
  const host = forwardedHost ?? request.headers.get('host');

  let protocol =
    forwardedProto ??
    (request.nextUrl?.protocol ?? new URL(request.url ?? 'http://localhost').protocol);
  protocol = protocol.replace(/:$/, '');

  if (!host) {
    return request.nextUrl?.origin ?? new URL(request.url ?? 'http://localhost').origin;
  }

  return `${protocol}://${host}`;
}
