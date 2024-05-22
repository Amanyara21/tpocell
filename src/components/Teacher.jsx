'use client'
import { TeacherCard } from '@/utils/TeacherCard';
import teacherData from '../assets/data/teachers.json';

export const Teacher = () => {
    return (
        <section>
            <h2 className="heading-primary--main white-head6" id="co">Teacher Coordinators</h2>
            <div className="teacher-main">
                {teacherData.map((teacher, index) => (
                    <TeacherCard teacher={teacher} key={index}/>
                ))}
            </div>
        </section>
    )
}

