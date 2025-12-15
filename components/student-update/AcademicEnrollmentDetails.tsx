// AcademicEnrollmentDetails.tsx
import { useFormContext, Controller } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";


import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";


export default function AcademicEnrollmentDetails() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<StudentRegistrationDTOType>();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Academic Enrollment Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Faculty Field */}
        <div>
          <label htmlFor="Faculty" className="block text-sm font-medium text-gray-700 mb-1">
            Faculty <span className="text-red-500">*</span>
          </label>
          <select
            id="Faculty"
            {...register("AcademicEnrollmentDTO.Faculty")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Faculty</option>
            <option value="Science">Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Management">Management</option>
            <option value="Humanities">Humanities</option>
            <option value="Education">Education</option>
          </select>
          {errors.AcademicEnrollmentDTO?.Faculty && (
            <p className="mt-1 text-sm text-red-600">{errors.AcademicEnrollmentDTO.Faculty.message}</p>
          )}
        </div>
        
        {/* Program Field */}
        <div>
          <label htmlFor="Program" className="block text-sm font-medium text-gray-700 mb-1">
            Program <span className="text-red-500">*</span>
          </label>
          <input
            id="Program"
            {...register("AcademicEnrollmentDTO.Program")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.AcademicEnrollmentDTO?.Program && (
            <p className="mt-1 text-sm text-red-600">{errors.AcademicEnrollmentDTO.Program.message}</p>
          )}
        </div>
        
        {/* Level Field */}
        <div>
          <label htmlFor="Level" className="block text-sm font-medium text-gray-700 mb-1">
            Level <span className="text-red-500">*</span>
          </label>
          <select
            id="Level"
            {...register("AcademicEnrollmentDTO.Level", { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Level</option>
            <option value="1">Bachelor</option>
            <option value="2">Master</option>
            <option value="3">Diploma</option>
            <option value="4">Certificate</option>
             <option value="5">PhD</option>
          </select>
          {errors.AcademicEnrollmentDTO?.Level && (
            <p className="mt-1 text-sm text-red-600">{errors.AcademicEnrollmentDTO.Level.message}</p>
          )}
        </div>
        
        {/* Semester Field */}
        <div>
          <label htmlFor="Semester" className="block text-sm font-medium text-gray-700 mb-1">
            Semester <span className="text-red-500">*</span>
          </label>
          <select
            id="Semester"
            {...register("AcademicEnrollmentDTO.Semester", { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Semester</option>
            <option value="1">First</option>
            <option value="2">Second</option>
            <option value="3">Third</option>
            <option value="4">Fourth</option>
            <option value="5">Fifth</option>
            <option value="6">Sixth</option>
            <option value="7">Seventh</option>
            <option value="8">Eighth</option>
          </select>
          {errors.AcademicEnrollmentDTO?.Semester && (
            <p className="mt-1 text-sm text-red-600">{errors.AcademicEnrollmentDTO.Semester.message}</p>
          )}
        </div>
        
        {/* Section Field */}
        <div>
          <label htmlFor="Section" className="block text-sm font-medium text-gray-700 mb-1">
            Section
          </label>
          <input
            id="Section"
            {...register("AcademicEnrollmentDTO.Section")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.AcademicEnrollmentDTO?.Section && (
            <p className="mt-1 text-sm text-red-600">{errors.AcademicEnrollmentDTO.Section.message}</p>
          )}
        </div>
        
        {/* Roll Number Field */}
        <div>
          <label htmlFor="RollNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Roll Number <span className="text-red-500">*</span>
          </label>
          <input
            id="RollNumber"
            {...register("AcademicEnrollmentDTO.RollNumber")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.AcademicEnrollmentDTO?.RollNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.AcademicEnrollmentDTO.RollNumber.message}</p>
          )}
        </div>
        
        {/* Registration Number Field */}
        <div>
          <label htmlFor="RegistrationNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Registration Number <span className="text-red-500">*</span>
          </label>
          <input
            id="RegistrationNumber"
            {...register("AcademicEnrollmentDTO.RegistrationNumber")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.AcademicEnrollmentDTO?.RegistrationNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.AcademicEnrollmentDTO.RegistrationNumber.message}</p>
          )}
        </div>
        
        {/* Enroll Date Field */}
        <div>
          <label htmlFor="EnrollDate" className="block text-sm font-medium text-gray-700 mb-1">
            Enrollment Date <span className="text-red-500">*</span>
          </label>
           <input
            id="AcademicEnrollmentDTO.EnrollDate"
            type="date"
            {...register("AcademicEnrollmentDTO.EnrollDate")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.AcademicEnrollmentDTO?.EnrollDate && (
            <p className="mt-1 text-sm text-red-600">{errors.AcademicEnrollmentDTO.EnrollDate.message}</p>
          )}
        </div>
        
        {/* Academic Status Field */}
        <div>
          <label htmlFor="AcademicStatus" className="block text-sm font-medium text-gray-700 mb-1">
            Academic Status <span className="text-red-500">*</span>
          </label>
          <select
            id="AcademicEnrollmentDTO.AcademicStatus"
            {...register("AcademicEnrollmentDTO.AcademicStatus", { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Status</option>
            <option value="1">Active</option>
            <option value="2">On Leave</option>
            <option value="3">Graduated</option>
            <option value="4">Suspended</option>
            <option value="5">Withdrawn</option>
          </select>
          {errors.AcademicEnrollmentDTO?.AcademicStatus && (
            <p className="mt-1 text-sm text-red-600">{errors.AcademicEnrollmentDTO.AcademicStatus.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}