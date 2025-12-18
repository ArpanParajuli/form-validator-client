"use client";

import { useFormContext } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";

import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";

export default function ExtraInformationSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<StudentUpdateDTOType>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Hosteller or Day Scholar */}
      <div>
        <label htmlFor="OtherInformationDTO.IsHosteller" className="block text-sm font-medium text-gray-700 mb-1">
          Are you a hosteller or day scholar? <span className="text-red-500">*</span>
        </label>
        <select
          id="OtherInformationDTO.IsHosteller"
          {...register("OtherInformationDTO.IsHosteller", {
            valueAsNumber: true,
          })}
          defaultValue=""
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select Status
          </option>
          <option value="1">Hosteller</option>
          <option value="2">Day Scholar</option>
        </select>
        {errors.OtherInformationDTO?.IsHosteller && (
          <p className="mt-1 text-sm text-red-600">{errors.OtherInformationDTO.IsHosteller.message}</p>
        )}
      </div>

      {/* Transportation Method */}
      <div>
        <label htmlFor="OtherInformationDTO.TransportationMethod" className="block text-sm font-medium text-gray-700 mb-1">
          Transportation Method <span className="text-red-500">*</span>
        </label>
        <select
          id="OtherInformationDTO.TransportationMethod"
          {...register("OtherInformationDTO.TransportationMethod", {
            valueAsNumber: true,
          })}
          defaultValue=""
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select Method
          </option>
          <option value="1">Walk</option>
          <option value="2">Bicycle</option>
          <option value="3">Bus</option>
          <option value="4">Private Vehicle</option>
        </select>
        {errors.OtherInformationDTO?.TransportationMethod && (
          <p className="mt-1 text-sm text-red-600">{errors.OtherInformationDTO.TransportationMethod.message}</p>
        )}
      </div>
    </div>
  );
}