import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { status: 'error', message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Simulate database/processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      status: 'success', 
      message: `Thank you ${name}, your booking request has been received.` 
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}