// EthnicityDetails.tsx
import { useFormContext } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";


import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";


export default function EthnicityDetails() {



  const {
    register,
    formState: { errors },
  } = useFormContext<StudentRegistrationDTOType>();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Ethnicity Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ethnicity Name Field */}
        <div>
          <label htmlFor="EthnicityName" className="block text-sm font-medium text-gray-700 mb-1">
            Ethnicity Name <span className="text-red-500">*</span>
          </label>
          <select
            id="EthnicityName"
            {...register("EthnicityDTO.EthnicityName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Ethnicity</option>
            <option value="Brahmin">Brahmin</option>
            <option value="Chhetri">Chhetri</option>
            <option value="Newar">Newar</option>
            <option value="Magar">Magar</option>
            <option value="Tamang">Tamang</option>
            <option value="Sherpa">Sherpa</option>
            <option value="Rai">Rai</option>
            <option value="Limbu">Limbu</option>
            <option value="Gurung">Gurung</option>
            <option value="Tharu">Tharu</option>
            <option value="Dalit">Dalit</option>
            <option value="Other">Other</option>
          </select>
          {errors.EthnicityDTO?.EthnicityName && (
            <p className="mt-1 text-sm text-red-600">{errors.EthnicityDTO.EthnicityName.message}</p>
          )}
        </div>
        
        {/* Ethnicity Group Field */}
        <div>
          <label htmlFor="EthnicityGroup" className="block text-sm font-medium text-gray-700 mb-1">
            Ethnicity Group <span className="text-red-500">*</span>
          </label>
          <select
            id="EthnicityGroup"
            {...register("EthnicityDTO.EthnicityGroup")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Group</option>
            <option value="Khas-Arya">Khas-Arya</option>
            <option value="Aadiwasi/Janajati">Aadiwasi/Janajati</option>
            <option value="Dalit">Dalit</option>
            <option value="Madhesi">Madhesi</option>
            <option value="Tharu">Tharu</option>
            <option value="Muslim">Muslim</option>
            <option value="Other">Other</option>
          </select>
          {errors.EthnicityDTO?.EthnicityGroup && (
            <p className="mt-1 text-sm text-red-600">{errors.EthnicityDTO.EthnicityGroup.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}