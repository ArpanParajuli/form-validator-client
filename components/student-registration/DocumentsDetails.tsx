// DocumentsDetails.tsx
import { useFormContext, Controller } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";

import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";

export default function DocumentsDetails() {

  const {
    control,
    formState: { errors },
  } = useFormContext<StudentRegistrationDTOType>();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Documents</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Character Certificate Field */}
        <div>
          <label htmlFor="characterCertificate" className="block text-sm font-medium text-gray-700 mb-1">
            Character Certificate <span className="text-red-500">*</span>
          </label>
          <Controller
            name="DocumentsDTO.CharacterCertificate"
            control={control}
            render={({ field }) => (
              <input
                id="CharacterCertificate"
                type="file"
                accept="image/*"
                onChange={(e) => field.onChange(e.target.files?.[0])}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            )}
          />

          {errors.DocumentsDTO?.CharacterCertificate && (
            <p className="mt-1 text-sm text-red-600">{errors.DocumentsDTO.CharacterCertificate.message}</p>
          )}
        </div>
        
        {/* Signature Field */}
        <div>
          <label htmlFor="signature" className="block text-sm font-medium text-gray-700 mb-1">
            Signature <span className="text-red-500">*</span>
          </label>
          <Controller
            name="DocumentsDTO.Signature"
            control={control}
            render={({ field }) => (
              <input
                id="Signature"
                type="file"
                accept="image/*"
                onChange={(e) => field.onChange(e.target.files?.[0])}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            )}
          />
          {errors.DocumentsDTO?.Signature && (
            <p className="mt-1 text-sm text-red-600">{errors.DocumentsDTO.Signature.message}</p>
          )}
        </div>
        
        {/* Citizenship Field */}
        <div>
          <label htmlFor="citizenship" className="block text-sm font-medium text-gray-700 mb-1">
            Citizenship Document <span className="text-red-500">*</span>
          </label>
          <Controller
            name="DocumentsDTO.Citizenship"
            control={control}
            render={({ field }) => (
              <input
                id="Citizenship"
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => field.onChange(e.target.files?.[0])}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            )}
          />
          {errors.DocumentsDTO?.Citizenship && (
            <p className="mt-1 text-sm text-red-600">{errors.DocumentsDTO.Citizenship.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}