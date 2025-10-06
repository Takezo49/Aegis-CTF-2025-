// Handle browser extension tracking requests to prevent 404 errors in console
export async function GET() {
  return new Response('OK', { status: 200 });
}

export async function POST() {
  return new Response('OK', { status: 200 });
}