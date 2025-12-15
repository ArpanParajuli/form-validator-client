// GuardianDetails.tsx
import { useFormContext } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";



import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";



export default function GuardianDetails() {

  const {
    register,
    formState: { errors },
  } = useFormContext<StudentRegistrationDTOType>();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Guardian Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name Field */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="FullName"
            {...register("GuardianDTO.FullName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.GuardianDTO?.FullName && (
            <p className="mt-1 text-sm text-red-600">{errors.GuardianDTO.FullName.message}</p>
          )}
        </div>
        
        {/* Occupation Field */}
        <div>
          <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
            Occupation
          </label>
          <input
            id="Occupation"
            {...register("GuardianDTO.Occupation")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.GuardianDTO?.Occupation && (
            <p className="mt-1 text-sm text-red-600">{errors.GuardianDTO.Occupation.message}</p>
          )}
        </div>
        
        {/* Designation Field */}
        <div>
          <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
            Designation
          </label>
          <input
            id="Designation"
            {...register("GuardianDTO.Designation")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.GuardianDTO?.Designation && (
            <p className="mt-1 text-sm text-red-600">{errors.GuardianDTO.Designation.message}</p>
          )}
        </div>
        
        {/* Organization Field */}
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
            Organization
          </label>
          <input
            id="organization"
            {...register("GuardianDTO.Organization")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.GuardianDTO?.Organization && (
            <p className="mt-1 text-sm text-red-600">{errors.GuardianDTO.Organization.message}</p>
          )}
        </div>
        
        {/* Mobile Number Field */}
        <div>
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            id="MobileNumber"
            {...register("GuardianDTO.MobileNumber")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.GuardianDTO?.MobileNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.GuardianDTO.MobileNumber.message}</p>
          )}
        </div>
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="Email"
            type="email"
            {...register("GuardianDTO.Email")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.GuardianDTO?.Email && (
            <p className="mt-1 text-sm text-red-600">{errors.GuardianDTO.Email.message}</p>
          )}
        </div>
        
        {/* Relation Field */}
        <div>
          <label htmlFor="relation" className="block text-sm font-medium text-gray-700 mb-1">
            Relation
          </label>
          <select
            id="Relation"
            {...register("GuardianDTO.Relation")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Relation</option>
            <option value="1">Father</option>
            <option value="2">Mother</option>
            <option value="3">Brother</option>
            <option value="4">Sister</option>
            <option value="5">Husband</option>
            <option value="6">Wife</option>
            <option value="7">Other</option>
          </select>
          {errors.GuardianDTO?.Relation && (
            <p className="mt-1 text-sm text-red-600">{errors.GuardianDTO.Relation.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}