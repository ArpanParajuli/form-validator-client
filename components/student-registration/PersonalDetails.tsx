// student-registration/PersonalDetails.tsx
"use client";


import { useFormContext, Controller } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";



export default function PersonalDetails() {


  const {
    register,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<StudentRegistrationDTOType>();



  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Personal Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Upload Field */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="StudentDTO.ImagePath" className="block text-sm font-medium text-gray-700 mb-1">
            Profile Image
          </label>
          
          <Controller
            name="StudentDTO.ImagePath"
            control={control}
            render={({ field }) => (
              <input
                id="StudentDTO.ImagePath"
                type="file"
                accept="image/*"
                onChange={(e) => field.onChange(e.target.files?.[0])}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            )}
          />
          
          {errors.StudentDTO?.ImagePath && (
            <p className="mt-1 text-sm text-red-600">{errors.StudentDTO.ImagePath.message}</p>
          )}
        </div>
        
        {/* First Name Field */}
        <div>
          <label htmlFor="StudentDTO.FirstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name 
          </label>
          <input
            id="StudentDTO.FirstName"
            {...register("StudentDTO.FirstName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.StudentDTO?.FirstName && (
            <p className="mt-1 text-sm text-red-600">{errors.StudentDTO.FirstName.message}</p>
          )}
        </div>
        
        {/* Middle Name Field */}
        <div>
          <label htmlFor="StudentDTO.MiddleName" className="block text-sm font-medium text-gray-700 mb-1">
            Middle Name
          </label>
          <input
            id="StudentDTO.MiddleName"
            {...register("StudentDTO.MiddleName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.StudentDTO?.MiddleName && (
            <p className="mt-1 text-sm text-red-600">{errors.StudentDTO.MiddleName.message}</p>
          )}
        </div>
        
        {/* Last Name Field */}
        <div>
          <label htmlFor="StudentDTO.LastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name 
          </label>
          <input
            id="StudentDTO.LastName"
            {...register("StudentDTO.LastName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.StudentDTO?.LastName && (
            <p className="mt-1 text-sm text-red-600">{errors.StudentDTO.LastName.message}</p>
          )}
        </div>
        
        {/* Date of Birth Field */}
        <div>
          <label htmlFor="StudentDTO.DateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            id="StudentDTO.DateOfBirth"
            type="date"
            {...register("StudentDTO.DateOfBirth")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.StudentDTO?.DateOfBirth && (
            <p className="mt-1 text-sm text-red-600">{errors.StudentDTO.DateOfBirth.message}</p>
          )}
        </div>
        
        {/* Place of Birth Field */}
        <div>
          <label htmlFor="StudentDTO.PlaceOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
            Place of Birth 
          </label>
          <input
            id="StudentDTO.PlaceOfBirth"
            {...register("StudentDTO.PlaceOfBirth")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.StudentDTO?.PlaceOfBirth && (
            <p className="mt-1 text-sm text-red-600">{errors.StudentDTO.PlaceOfBirth.message}</p>
          )}
        </div>
        
        {/* Nationality Field */}
        <div>
          <label htmlFor="StudentDTO.Nationality" className="block text-sm font-medium text-gray-700 mb-1">
            Nationality 
          </label>
          <input
            id="StudentDTO.Nationality"
            {...register("StudentDTO.Nationality")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.StudentDTO?.Nationality && (
            <p className="mt-1 text-sm text-red-600">{errors.StudentDTO.Nationality.message}</p>
          )}
        </div>
        
        {/* Email Field */}
        <div>
          <label htmlFor="StudentDTO.Email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="StudentDTO.Email"
            type="email"
            {...register("StudentDTO.Email")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.StudentDTO?.Email && (
            <p className="mt-1 text-sm text-red-600">{errors.StudentDTO.Email.message}</p>
          )}
        </div>
        
        {/* Primary Mobile Field */}
        <div>
          <label htmlFor="StudentDTO.PrimaryMobile" className="block text-sm font-medium text-gray-700 mb-1">
            Primary Mobile <span className="text-red-500">*</span>
          </label>
          <input
            id="StudentDTO.PrimaryMobile"
            {...register("StudentDTO.PrimaryMobile")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.StudentDTO?.PrimaryMobile && (
            <p className="mt-1 text-sm text-red-600">{errors.StudentDTO.PrimaryMobile.message}</p>
          )}
        </div>
        
        {/* Gender Field */}
        <div>
          <label htmlFor="StudentDTO.Gender" className="block text-sm font-medium text-gray-700 mb-1">
            Gender <span className="text-red-500">*</span>
          </label>
          
          <select
            id="StudentDTO.Gender"
            {...register("StudentDTO.Gender", {
              valueAsNumber: true,
            })}
            defaultValue=""
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value={1}>Male</option>
            <option value={2}>Female</option>
            <option value={3}>Other</option>
          </select>
          
          {errors.StudentDTO?.Gender && (
            <p className="mt-1 text-sm text-red-600">{errors.StudentDTO.Gender.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}