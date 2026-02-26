export async function GET() {
  return new Response("OK\n", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
