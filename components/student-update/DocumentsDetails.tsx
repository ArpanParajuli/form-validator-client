// DocumentsDetails.tsx
import { useFormContext, Controller, useWatch } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";


import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";
import { useEffect, useEffectEvent, useInsertionEffect, useState } from "react";


import { ServerURL } from "@/components/Dashboard";
import { fi } from "zod/locales";

export default function DocumentsDetails() {

  const [CharacterCertificate , setCharacterCertificate] = useState<string | null>(null);
  const [Citizenship , setCitizenship]  = useState<string | null>(null);
  const [Signature , setSignature] = useState<string | null>(null);

  const {
    control,
    formState: { errors },
  } = useFormContext<StudentUpdateDTOType>();

  useEffect(()=> {
      
  })


   const CharacterCertificatePath = `${ServerURL}${useWatch({
      control,
      name: "DocumentsDTO.CharacterCertificate",
    })}`;

    const CitizenshipPath = `${ServerURL}${useWatch({
      control,
      name: "DocumentsDTO.Citizenship",
    })}`;

    const SignaturePath = `${ServerURL}${useWatch({
      control,
      name: "DocumentsDTO.Signature",
    })}`;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Documents (optional only add to update ) </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Character Certificate Field */}
        <div>
          <label htmlFor="characterCertificate" className="block text-sm font-medium text-gray-700 mb-1">
            Character Certificate (optional only add to update ) <span className="text-red-500">*</span>
          </label>

          {CharacterCertificatePath && (
            <div className="mt-2 relative">
              <img
                src={CharacterCertificatePath}
                alt="Profile Preview"
                className="h-32 w-32 object-cover rounded-md border shadow-sm"
              />
            </div>
          )}

          <Controller
            name="DocumentsDTO.CharacterCertificate"
            control={control}
            render={({ field }) => (
              <input
                id="CharacterCertificate"
                type="file"
                accept="image/*"
                onChange={(e) => 
                  {
                    const file = e.target.files?.[0];
                    if(file)
                    {
                      const preview = URL.createObjectURL(file)
                      setCharacterCertificate(preview);
    
                    }
                   else {
                   setCharacterCertificate(null);
                  }

                  }}
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
            Signature (optional only add to update )  <span className="text-red-500">*</span>
          </label>


           {SignaturePath && (
            <div className="mt-2 relative">
              <img
                src={CharacterCertificatePath}
                alt="Profile Preview"
                className="h-32 w-32 object-cover rounded-md border shadow-sm"
              />
            </div>
          )}

          <Controller
            name="DocumentsDTO.Signature"
            control={control}
            render={({ field }) => (
              <input
                id="Signature"
                type="file"
                accept="image/*"
                onChange={(e) => 
                  {
                    const file = e.target.files?.[0];
                    if(file)
                    {
                      const preview = URL.createObjectURL(file)
                      setSignature(preview);
    
                    }
                   else {
                   setSignature(null);
                  }

                  }}
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
            Citizenship Document (optional only add to update )  <span className="text-red-500">*</span>
          </label>

           {CitizenshipPath && (
            <div className="mt-2 relative">
              <img
                src={CharacterCertificatePath}
                alt="Profile Preview"
                className="h-32 w-32 object-cover rounded-md border shadow-sm"
              />
            </div>
          )}

          <Controller
            name="DocumentsDTO.Citizenship"
            control={control}
            render={({ field }) => (
              <input
                id="Citizenship"
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => 
                  {
                    const file = e.target.files?.[0];
                    if(file)
                    {
                      const preview = URL.createObjectURL(file)
                      setCitizenship(preview);
    
                    }
                   else {
                   setCitizenship(null);
                  }

                  }}
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