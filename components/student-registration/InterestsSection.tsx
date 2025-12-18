"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";



export default function InterestsSection() {
  const {
    register,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<StudentRegistrationDTOType>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "InterestDTO"
  });

  const [otherSelected, setOtherSelected] = useState(false);
  const [otherInterestValue, setOtherInterestValue] = useState("");

  // Get current interests to check which ones are selected
  const currentInterests = watch("InterestDTO") || [];
  const selectedInterests = currentInterests.map((interest: any) => interest.Name);
  
  // Find the index of the "Other" interest if it exists
  const otherIndex = currentInterests.findIndex((interest: any) => interest.Name === "Other");

  // Check if "Other" is selected in the interests
  const handleInterestChange = (value: string, checked: boolean) => {
    if (value === "Other" && checked) {
      setOtherSelected(true);
      // Add "Other" to interests array
      if (!selectedInterests.includes("Other")) {
        append({ Name: "Other", OtherInterest: "" });
      }
    } else if (value === "Other" && !checked) {
      setOtherSelected(false);
      setOtherInterestValue("");
      // Remove "Other" from interests array
      if (otherIndex !== -1) {
        remove(otherIndex);
      }
    } else {
      // Handle regular interests
      if (checked && !selectedInterests.includes(value)) {
        append({ Name: value });
      } else if (!checked && selectedInterests.includes(value)) {
        const index = currentInterests.findIndex((interest: any) => interest.Name === value);
        if (index !== -1) {
          remove(index);
        }
      }
    }
  };

  // Update OtherInterest value when input changes
  const handleOtherInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOtherInterestValue(value);
    
    // Find the "Other" interest in the array and update its OtherInterest field
    if (otherIndex !== -1) {
      setValue(`InterestDTO.${otherIndex}.OtherInterest`, value);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Extracurricular Interests</h2>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Sports", "Music", "Debate", "Coding", "Volunteering", "Arts", "Other"].map((interest) => (
            <div key={interest} className="flex items-center">
              <input
                type="checkbox"
                id={`interest-${interest}`}
                value={interest}
                checked={selectedInterests.includes(interest)}
                onChange={(e) => handleInterestChange(e.target.value, e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor={`interest-${interest}`} className="ml-2 text-sm text-gray-700">
                {interest}
              </label>
            </div>
          ))}
        </div>
        
        {otherSelected && (
          <div className="mt-4">
            <label htmlFor="OtherInterest" className="block text-sm font-medium text-gray-700 mb-1">
              Please specify other interest
            </label>
            <input
              id="OtherInterest"
              value={otherInterestValue}
              onChange={handleOtherInterestChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.InterestDTO?.[otherIndex]?.OtherInterest && (
              <p className="mt-1 text-sm text-red-600">{errors.InterestDTO[otherIndex].OtherInterest.message}</p>
            )}
          </div>
        )}
        
        {errors.InterestDTO && (
          <p className="mt-1 text-sm text-red-600">{errors.InterestDTO.message}</p>
        )}
      </div>
    </div>
  );
}