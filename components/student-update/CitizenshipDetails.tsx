// CitizenshipDetails.tsx
import { useFormContext, Controller } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";


import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";


export default function CitizenshipDetails() {


  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<StudentUpdateDTOType>();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Citizenship Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Citizenship Number Field */}
        <div>
          <label htmlFor="citizenshipNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Citizenship Number <span className="text-red-500">*</span>
          </label>
          <input
            id="citizenshipNumber"
            {...register("CitizenshipDTO.CitizenshipNumber")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.CitizenshipDTO?.CitizenshipNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.CitizenshipDTO.CitizenshipNumber.message}</p>
          )}
        </div>
        
        {/* Citizenship Issue Date Field */}
        <div>
          <label htmlFor="citizenshipIssueDate" className="block text-sm font-medium text-gray-700 mb-1">
            Issue Date <span className="text-red-500">*</span>
          </label>
           <div>
          <label htmlFor="citizenship.citizenshipIssueDate" className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            id="citizenship.CitizenshipIssueDate"
            type="date"
            {...register("CitizenshipDTO.CitizenshipIssueDate")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.CitizenshipDTO?.CitizenshipIssueDate && (
            <p className="mt-1 text-sm text-red-600">{errors.CitizenshipDTO.CitizenshipIssueDate.message}</p>
          )}
        </div>
              
          {errors.CitizenshipDTO?.CitizenshipIssueDate && (
            <p className="mt-1 text-sm text-red-600">{errors.CitizenshipDTO.CitizenshipIssueDate.message}</p>
          )}
        </div>
        
        {/* Citizenship Issue District Field */}
        <div>
          <label htmlFor="citizenshipIssueDistrict" className="block text-sm font-medium text-gray-700 mb-1">
            Issue District <span className="text-red-500">*</span>
          </label>
          <select
            id="citizenshipIssueDistrict"
            {...register("CitizenshipDTO.CitizenshipIssueDistrict")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select District</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Bhaktapur">Bhaktapur</option>
            <option value="Lalitpur">Lalitpur</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Biratnagar">Biratnagar</option>
            <option value="Birgunj">Birgunj</option>
            <option value="Dharan">Dharan</option>
            <option value="Hetauda">Hetauda</option>
            <option value="Janakpur">Janakpur</option>
            <option value="Nepalgunj">Nepalgunj</option>
            <option value="Butwal">Butwal</option>
            <option value="Bharatpur">Bharatpur</option>
          </select>
          {errors.CitizenshipDTO?.CitizenshipIssueDistrict && (
            <p className="mt-1 text-sm text-red-600">{errors.CitizenshipDTO.CitizenshipIssueDistrict.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}