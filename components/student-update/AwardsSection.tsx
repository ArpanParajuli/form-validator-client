"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";

import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";

export default function AwardsSection() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<StudentUpdateDTOType>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "AwardDTO"
  });

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-700">Previous Achievements/Awards</h3>
        <button
          type="button"
          onClick={() => append({ Title: "", IssuingOrganization: "", YearReceived: new Date() })}
          className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          + Add Another Award
        </button>
      </div>
      
      {fields.length === 0 ? (
        <div className="text-center py-4 border-2 border-dashed border-gray-300 rounded-md">
          <p className="text-gray-500">No awards added yet. Click the button above to add an award.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {fields.map((field, index) => (
            <div key={field.id} className="border border-gray-200 rounded-md p-4 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor={`award-title-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Title of Award <span className="text-red-500">*</span>
                  </label>
                  <input
                    id={`award-title-${index}`}
                    {...register(`AwardDTO.${index}.Title`)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.AwardDTO?.[index]?.Title && (
                    <p className="mt-1 text-sm text-red-600">{errors.AwardDTO[index].Title.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor={`award-org-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Issuing Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    id={`award-org-${index}`}
                    {...register(`AwardDTO.${index}.IssuingOrganization`)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.AwardDTO?.[index]?.IssuingOrganization && (
                    <p className="mt-1 text-sm text-red-600">{errors.AwardDTO[index].IssuingOrganization.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor={`award-date-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Date Received <span className="text-red-500">*</span>
                  </label>
                  <input
                    id={`award-date-${index}`}
                    type="date"
                    {...register(`AwardDTO.${index}.YearReceived`, {
                      valueAsDate: true,
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.AwardDTO?.[index]?.YearReceived && (
                    <p className="mt-1 text-sm text-red-600">{errors.AwardDTO[index].YearReceived.message}</p>
                  )}
                </div>
              </div>
              
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-red-600 text-sm hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}