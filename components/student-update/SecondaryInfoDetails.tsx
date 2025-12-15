// SecondaryInfoDetails.tsx
import { useFormContext } from "react-hook-form";

import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";
import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";



export default function SecondaryInfoDetails() {

  const {
    register,
    formState: { errors },
  } = useFormContext<StudentUpdateDTOType>();


  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Additional Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Middle Name Field */}
        <div>
          <label htmlFor="middleName" className="block text-sm font-medium text-gray-700 mb-1">
            Middle Name
          </label>
          <input
            id="middleName"
            {...register("SecondaryInfoDTO.MiddleName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.SecondaryInfoDTO?.MiddleName && (
            <p className="mt-1 text-sm text-red-600">{errors.SecondaryInfoDTO.MiddleName.message}</p>
          )}
        </div>
        
        {/* Alternate Email Field */}
        <div>
          <label htmlFor="alternateEmail" className="block text-sm font-medium text-gray-700 mb-1">
            Alternate Email
          </label>
          <input
            id="alternateEmail"
            type="email"
            {...register("SecondaryInfoDTO.AlternateEmail")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.SecondaryInfoDTO?.AlternateEmail && (
            <p className="mt-1 text-sm text-red-600">{errors.SecondaryInfoDTO.AlternateEmail.message}</p>
          )}
        </div>
        
        {/* Secondary Mobile Field */}
        <div>
          <label htmlFor="secondaryMobile" className="block text-sm font-medium text-gray-700 mb-1">
            Secondary Mobile
          </label>
          <input
            id="secondaryMobile"
            {...register("SecondaryInfoDTO.SecondaryMobile")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.SecondaryInfoDTO?.SecondaryMobile && (
            <p className="mt-1 text-sm text-red-600">{errors.SecondaryInfoDTO.SecondaryMobile.message}</p>
          )}
        </div>
        
        {/* Blood Group Field */}
        <div>
          <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700 mb-1">
            Blood Group
          </label>
          <select
            id="bloodGroup"
            {...register("SecondaryInfoDTO.BloodGroup", { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Blood Group</option>
            <option value="1">A+</option>
            <option value="2">A-</option>
            <option value="3">B+</option>
            <option value="4">B-</option>
            <option value="5">AB+</option>
            <option value="6">AB-</option>
            <option value="7">O+</option>
            <option value="8">O-</option>
          </select>
          {errors.SecondaryInfoDTO?.BloodGroup && (
            <p className="mt-1 text-sm text-red-600">{errors.SecondaryInfoDTO.BloodGroup.message}</p>
          )}
        </div>
        
        {/* Marital Status Field */}
        <div>
          <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700 mb-1">
            Marital Status
          </label>
          <select
            id="maritalStatus"
            {...register("SecondaryInfoDTO.MaritalStatus", { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Status</option>
            <option value="1">Single</option>
            <option value="2">Married</option>
            <option value="3">Divorced</option>
            <option value="4">Widowed</option>
          </select>
          {errors.SecondaryInfoDTO?.MaritalStatus && (
            <p className="mt-1 text-sm text-red-600">{errors.SecondaryInfoDTO.MaritalStatus.message}</p>
          )}
        </div>
        
        {/* Religion Field */}
        <div>
          <label htmlFor="religion" className="block text-sm font-medium text-gray-700 mb-1">
            Religion
          </label>
          <input
            id="religion"
            {...register("SecondaryInfoDTO.Religion")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.SecondaryInfoDTO?.Religion && (
            <p className="mt-1 text-sm text-red-600">{errors.SecondaryInfoDTO.Religion.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}