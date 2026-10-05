import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return Response.json({
    ok: true,
    message: 'Lagos Life Sim API is live',
    routes: ['/', '/map', '/travel', '/dashboard', '/chat', '/profile'],
  });
}
