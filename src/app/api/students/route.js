import { connect } from '@/dbConfig/dbConfig';
import Student from '@/models/studentModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request) {
  try {
    console.log("get");
    const student = await Student.find();
    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }
    return NextResponse.json(student, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to retrieve student' }, { status: 500 });
  }
}
