import { NextResponse } from 'next/server';

export async function POST(req) {
    const userId = req.headers.get('x-user-id');

    if (userId) {
        console.log(`Authenticated user ID: ${userId}`);
        return NextResponse.json({ message: 'Success!', userId }, { status: 200 });
    } else {
        return NextResponse.json({ message: 'Error: User not authenticated' }, { status: 400 });
    }
}
