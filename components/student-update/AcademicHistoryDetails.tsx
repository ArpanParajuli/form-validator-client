// student-registration/AcademicHistoryDetails.tsx
"use client";
import { useFormContext, useFieldArray } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";

import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";




export default function AcademicHistoryDetails() {

   
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<StudentRegistrationDTOType>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "AcademicHistories",
  });

  // Default values for a new academic history entry
  const defaultAcademicHistory = {
    Level: 1,
    BoardUniversity: "",
    InstitutionName: "",
    PassedYear: "",
    DivisionOrGPA: "",
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Academic History</h2>
        <button
          type="button"
          onClick={() => append(defaultAcademicHistory)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Academic History
        </button>
      </div>
      
      {fields.map((field, index) => (
        <div key={field.id} className="border border-gray-200 rounded-md p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-700">Academic History {index + 1}</h3>
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Remove
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Level Field */}
            <div>
              <label htmlFor={`AcademicHistories.${index}.Level`} className="block text-sm font-medium text-gray-700 mb-1">
                Level <span className="text-red-500">*</span>
              </label>
              <select
                id={`AcademicHistories.${index}.Level`}
                {...register(`AcademicHistories.${index}.Level`, { valueAsNumber: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="1">SLC/SEE</option>
                <option value="2">+2</option>
                <option value="3">Bachelor</option>
                <option value="4">Master</option>
                <option value="5">PhD</option>
              </select>
              {errors.AcademicHistories?.[index]?.Level && (
                <p className="mt-1 text-sm text-red-600">{errors.AcademicHistories[index]?.Level?.message}</p>
              )}
            </div>
            
            {/* Board/University Field */}
            <div>
              <label htmlFor={`AcademicHistories.${index}.BoardUniversity`} className="block text-sm font-medium text-gray-700 mb-1">
                Board/University <span className="text-red-500">*</span>
              </label>
              <input
                id={`AcademicHistories.${index}.BoardUniversity`}
                {...register(`AcademicHistories.${index}.BoardUniversity`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.AcademicHistories?.[index]?.BoardUniversity && (
                <p className="mt-1 text-sm text-red-600">{errors.AcademicHistories[index]?.BoardUniversity?.message}</p>
              )}
            </div>
            
            {/* Institution Name Field */}
            <div>
              <label htmlFor={`AcademicHistories.${index}.InstitutionName`} className="block text-sm font-medium text-gray-700 mb-1">
                Institution Name <span className="text-red-500">*</span>
              </label>
              <input
                id={`AcademicHistories.${index}.InstitutionName`}
                {...register(`AcademicHistories.${index}.InstitutionName`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.AcademicHistories?.[index]?.InstitutionName && (
                <p className="mt-1 text-sm text-red-600">{errors.AcademicHistories[index]?.InstitutionName?.message}</p>
              )}
            </div>
            
            {/* Passed Year Field */}
            <div>
              <label htmlFor={`AcademicHistories.${index}.PassedYear`} className="block text-sm font-medium text-gray-700 mb-1">
                Passed Year <span className="text-red-500">*</span>
              </label>
              <input
                id={`AcademicHistories.${index}.PassedYear`}
                type="date"
                {...register(`AcademicHistories.${index}.PassedYear`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.AcademicHistories?.[index]?.PassedYear && (
                <p className="mt-1 text-sm text-red-600">{errors.AcademicHistories[index]?.PassedYear?.message}</p>
              )}
            </div>
            
            {/* Division/GPA Field */}
            <div>
              <label htmlFor={`AcademicHistories.${index}.DivisionOrGPA`} className="block text-sm font-medium text-gray-700 mb-1">
                Division/GPA
              </label>
              <input
                id={`AcademicHistories.${index}.DivisionOrGPA`}
                {...register(`AcademicHistories.${index}.DivisionOrGPA`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.AcademicHistories?.[index]?.DivisionOrGPA && (
                <p className="mt-1 text-sm text-red-600">{errors.AcademicHistories[index]?.DivisionOrGPA?.message}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}