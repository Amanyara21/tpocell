import { connect } from '@/dbConfig/dbConfig';
import Student from '@/models/studentModel';
import { NextResponse } from 'next/server';

export async function GET(request) {
  await connect();

  try {
    const packageOffered = request.nextUrl.searchParams.get('packageOffered');
    const company = request.nextUrl.searchParams.get('company');
    const department = request.nextUrl.searchParams.get('department');
    const passingyear = request.nextUrl.searchParams.get('passingyear');

    let query = {};

    if (packageOffered) {
      query['placementHistory.packageOffered'] = packageOffered;
    }
    if (company) {
      query['placementHistory.company'] = company;
    }
    if (department) {
      query['department'] = department;
    }
    if (passingyear) {
      query['passingyear'] = passingyear;
    }

    const students = await Student.find(query);
    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to retrieve placement records', details: error.message }, { status: 500 });
  }
}
