const Students = ({students}) => {
  return (
    <div className="flex flex-wrap gap-4 px-4 py-8 justify-center" id="students">
      {students.map((student) => (
        <div key={student._id} className="max-w-sm w-full">
          <div className="border border-gray-400 bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gold font-bold text-3xl mb-2">{student.name}</div>
              <p className="text-black text-xl">Branch: {student.department}</p>
              <p className="text-black text-xl">Roll Number: {student.rollno}</p>
              <p className="text-black text-xl">Year: {student.passingyear}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

};

export default Students;
