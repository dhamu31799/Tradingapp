// src/app/api/route.js

export async function GET(request) {
    return new Response(JSON.stringify({ message: 'Hello, world!' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  export async function POST(request) {
    const data = await request.json();
    return new Response(JSON.stringify({ message: 'Data received', data }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  