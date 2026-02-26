import type { APIRoute } from 'astro';
import releases from '../config/releases.json';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(releases), {
    headers: { 'Content-Type': 'application/json' },
  });
};
