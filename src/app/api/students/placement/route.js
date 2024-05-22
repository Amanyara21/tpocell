import { connect } from '@/dbConfig/dbConfig';
import Student from '@/models/studentModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request) {
    try {
        const { id } = request.query;
        const { interncompany, duration } = await request.json();
        const student = await Student.findById(id);
        if (!student) {
            return NextResponse.json({ error: 'Student not found' }, { status: 404 });
        }
        student.internshipDetails.push({ interncompany, duration });
        await student.save();
        return NextResponse.json(student, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to enter internship record', details: error.message }, { status: 500 });
    }
}
