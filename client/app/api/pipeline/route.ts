import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://conteflow-pipeline.onrender.com';
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json(
        { error: 'You must sign in before generating content.' },
        { status: 401 }
      );
    }

    const { data: userData, error: userError } = await supabase.auth.getUser(token);

    if (userError || !userData.user) {
      return NextResponse.json(
        { error: 'Your session expired. Please sign in again.' },
        { status: 401 }
      );
    }

    const response = await fetch(`${API_URL}/pipeline`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...body,
        userId: userData.user.id,
        userEmail: userData.user.email,
      }),
    });

    const contentType = response.headers.get('content-type') || '';
    const responseText = await response.text();

    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        {
          error: 'Backend returned a non-JSON response',
          details: responseText || response.statusText,
        },
        { status: response.ok ? 502 : response.status }
      );
    }

    const data = responseText ? JSON.parse(responseText) : {};
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Pipeline proxy failed',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
