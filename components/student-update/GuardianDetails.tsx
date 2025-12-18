// GuardianDetails.tsx
import { useFormContext, useFieldArray } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";
import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";



export default function GuardianDetails() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<StudentUpdateDTOType>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "GuardianDTO"
  });

  const addGuardian = () => {
    append({
      FullName: "",
      Occupation: "",
      Designation: "",
      Organization: "",
      MobileNumber: "",
      Email: "",
      Relation: ""
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Guardian Details</h2>
        <button
          type="button"
          onClick={addGuardian}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Guardian
        </button>
      </div>
      
      {fields.map((field, index) => (
        <div key={field.id} className="border border-gray-200 rounded-lg p-4 relative">
          {fields.length > 1 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-800"
              title="Remove Guardian"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          )}
          
          <h3 className="text-lg font-medium text-gray-700 mb-4">Guardian {index + 1}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name Field */}
            <div>
              <label htmlFor={`fullName-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id={`fullName-${index}`}
                {...register(`GuardianDTO.${index}.FullName`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.GuardianDTO?.[index]?.FullName && (
                <p className="mt-1 text-sm text-red-600">{errors.GuardianDTO[index].FullName.message}</p>
              )}
            </div>
            
            {/* Occupation Field */}
            <div>
              <label htmlFor={`occupation-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Occupation
              </label>
              <input
                id={`occupation-${index}`}
                {...register(`GuardianDTO.${index}.Occupation`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.GuardianDTO?.[index]?.Occupation && (
                <p className="mt-1 text-sm text-red-600">{errors.GuardianDTO[index].Occupation.message}</p>
              )}
            </div>
            
            {/* Designation Field */}
            <div>
              <label htmlFor={`designation-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Designation
              </label>
              <input
                id={`designation-${index}`}
                {...register(`GuardianDTO.${index}.Designation`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.GuardianDTO?.[index]?.Designation && (
                <p className="mt-1 text-sm text-red-600">{errors.GuardianDTO[index].Designation.message}</p>
              )}
            </div>
            
            {/* Organization Field */}
            <div>
              <label htmlFor={`organization-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Organization
              </label>
              <input
                id={`organization-${index}`}
                {...register(`GuardianDTO.${index}.Organization`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.GuardianDTO?.[index]?.Organization && (
                <p className="mt-1 text-sm text-red-600">{errors.GuardianDTO[index].Organization.message}</p>
              )}
            </div>
            
            {/* Mobile Number Field */}
            <div>
              <label htmlFor={`mobileNumber-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                id={`mobileNumber-${index}`}
                {...register(`GuardianDTO.${index}.MobileNumber`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.GuardianDTO?.[index]?.MobileNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.GuardianDTO[index].MobileNumber.message}</p>
              )}
            </div>
            
            {/* Email Field */}
            <div>
              <label htmlFor={`email-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id={`email-${index}`}
                type="email"
                {...register(`GuardianDTO.${index}.Email`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.GuardianDTO?.[index]?.Email && (
                <p className="mt-1 text-sm text-red-600">{errors.GuardianDTO[index].Email.message}</p>
              )}
            </div>
            
            {/* Relation Field */}
            <div>
              <label htmlFor={`relation-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Relation
              </label>
              <select
                id={`relation-${index}`}
                {...register(`GuardianDTO.${index}.Relation`)}
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
              {errors.GuardianDTO?.[index]?.Relation && (
                <p className="mt-1 text-sm text-red-600">{errors.GuardianDTO[index].Relation.message}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}