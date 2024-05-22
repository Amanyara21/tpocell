const Students = ({ students }) => {
  return (
    <>
    {students && students.length>0 ?(<div className="flex  flex-wrap gap-4 px-4 py-8 justify-center" id="students">
      {students.map((student) => (
        <div key={student._id} className="max-w-sm w-full bg-white border border-gray-400 rounded-lg">
          <div className="   p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gold font-bold text-3xl mb-2">{student.name}</div>
              <p className="text-black text-xl">Branch: {student.department}</p>
              <p className="text-black text-xl">Roll Number: {student.rollno}</p>
              <p className="text-black text-xl">Year: {student.passingyear}</p>

              <div className="mt-4">
                <h3 className="text-black text-xl font-semibold">Internship Details:</h3>
                {student.internshipDetails && student.internshipDetails.length > 0 ? (
                  <p className="text-black text-lg">
                    Company: {student.internshipDetails[0].interncompany},
                    Duration: {student.internshipDetails[0].duration} months
                  </p>
                ) : (
                  <p className="text-black text-lg">No internship data available</p>
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-black text-xl font-semibold">Placement History:</h3>
                {student.placementHistory && student.placementHistory.length > 0 ? (
                  <div>
                    <p className="text-black text-lg">Company: {student.placementHistory[0].company}</p>
                    <p className="text-black text-lg">Package: {student.placementHistory[0].packageOffered} LPA</p>
                    <p className="text-black text-lg">Date of Joining: {new Date(student.placementHistory[0].dateOfJoining).toLocaleDateString()}</p>
                  </div>
                ) : (
                  <p className="text-black text-lg">No placement data available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>): <div className="text-center py-8 text-4xl">No data available</div>}
    </>
  );
};

export default Students;

