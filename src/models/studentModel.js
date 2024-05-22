import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
  },
  passingyear: {
    type: String,
    required: true,
  },
  internshipDetails: [
    {
      interncompany: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      stipend: {
        type: Number,
      },
    },
  ],
  placementHistory: [
    {
      company: {
        type: String,
        required: true,
      },
      packageOffered: {
        type: Number,
        required: true,
      },
      dateOfJoining: {
        type: Date,
        required: true,
      },
    },
  ],
});

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);
export default Student;
