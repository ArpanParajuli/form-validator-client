// ScholarshipDetails.tsx
import { useFormContext } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";
import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";



export default function ScholarshipDetails() {

    const {
      register,
      formState: { errors },
    } = useFormContext<StudentRegistrationDTOType>();
  

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Scholarship Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Scholarship Type Field */}
        <div>
          <label htmlFor="scholarshipType" className="block text-sm font-medium text-gray-700 mb-1">
            Scholarship Type
          </label>
          <select
            id="scholarshipType"
            {...register("ScholarshipDTO.ScholarshipType", { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Type</option>
            <option value="1">Government</option>
            <option value="2">Institutional</option>
            <option value="3">Private</option>
          </select>
          {errors.ScholarshipDTO?.ScholarshipType && (
            <p className="mt-1 text-sm text-red-600">{errors.ScholarshipDTO.ScholarshipType.message}</p>
          )}
        </div>
        
        {/* Scholarship Provider Name Field */}
        <div>
          <label htmlFor="scholarshipProviderName" className="block text-sm font-medium text-gray-700 mb-1">
            Provider Name
          </label>
          <input
            id="scholarshipProviderName"
            {...register("ScholarshipDTO.ScholarshipProviderName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.ScholarshipDTO?.ScholarshipProviderName && (
            <p className="mt-1 text-sm text-red-600">{errors.ScholarshipDTO.ScholarshipProviderName.message}</p>
          )}
        </div>
        
        {/* Scholarship Amount Field */}
        <div>
          <label htmlFor="scholarshipAmount" className="block text-sm font-medium text-gray-700 mb-1">
            Scholarship Amount
          </label>
          <input
            id="scholarshipAmount"
            type="number"
            {...register("ScholarshipDTO.ScholarshipAmount", { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.ScholarshipDTO?.ScholarshipAmount && (
            <p className="mt-1 text-sm text-red-600">{errors.ScholarshipDTO.ScholarshipAmount.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}