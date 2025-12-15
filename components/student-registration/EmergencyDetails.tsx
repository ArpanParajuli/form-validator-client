// EmergencyDetails.tsx
import { useFormContext } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";


import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";



export default function EmergencyDetails() {

 
  const {
    register,
    formState: { errors },
  } = useFormContext<StudentRegistrationDTOType>();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Emergency Contact Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Emergency Contact Name Field */}
        <div>
          <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700 mb-1">
            Contact Name <span className="text-red-500">*</span>
          </label>
          <input
            id="EmergencyContactName"
            {...register("EmergencyDTO.EmergencyContactName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.EmergencyDTO?.EmergencyContactName && (
            <p className="mt-1 text-sm text-red-600">{errors.EmergencyDTO.EmergencyContactName.message}</p>
          )}
        </div>
        
        {/* Emergency Contact Relation Field */}
        <div>
          <label htmlFor="emergencyContactRelation" className="block text-sm font-medium text-gray-700 mb-1">
            Relationship <span className="text-red-500">*</span>
          </label>
          <input
            id="emergencyContactRelation"
            {...register("EmergencyDTO.EmergencyContactRelation")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.EmergencyDTO?.EmergencyContactRelation && (
            <p className="mt-1 text-sm text-red-600">{errors.EmergencyDTO.EmergencyContactRelation.message}</p>
          )}
        </div>
        
        {/* Emergency Contact Number Field */}
        <div>
          <label htmlFor="emergencyContactNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            id="emergencyContactNumber"
            {...register("EmergencyDTO.EmergencyContactNumber")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.EmergencyDTO?.EmergencyContactNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.EmergencyDTO.EmergencyContactNumber.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}