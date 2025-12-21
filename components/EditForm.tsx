"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  StudentRegistrationDTO,
  StudentRegistrationDTOType,
} from "@/lib/schemas/studentCreate";


import {
  StudentUpdateDTO,
  StudentUpdateDTOType
}
  from "@/lib/schemas/studentUpdate";


import {
  GetStudentById,
  UpdateStudent,
} from "@/apis/student-api";




import PersonalDetails from "@/components/student-update/PersonalDetails";
import AcademicEnrollmentDetails from "@/components/student-update/AcademicEnrollmentDetails";
import CitizenshipDetails from "@/components/student-update/CitizenshipDetails";
import EmergencyDetails from "@/components/student-update/EmergencyDetails";
import ScholarshipDetails from "@/components/student-update/ScholarshipDetails";
import DocumentsDetails from "@/components/student-update/DocumentsDetails";
import EthnicityDetails from "@/components/student-update/EthnicityDetails";
import BankDetails from "@/components/student-update/BankDetails";
import GuardianDetails from "@/components/student-update/GuardianDetails";
import AddressDetails from "@/components/student-update/AddressDetails";
import SecondaryInfoDetails from "@/components/student-update/SecondaryInfoDetails";
import AcademicHistoryDetails from "@/components/student-update/AcademicHistoryDetails";

import InterestsSection from "./student-registration/InterestsSection";

import AwardsSection from "./student-registration/AwardsSection";

import ExtraInformationSection from "./student-registration/ExtraInformationSection";

export default function EditStudentPage() {
  const params = useParams();
  const router = useRouter();
  const studentId = params.studentid as string;

  const methods = useForm<StudentUpdateDTOType>({
    resolver: zodResolver(StudentUpdateDTO),
    defaultValues: {
    },
  });

  const { reset, handleSubmit } = methods;


  
  const { errors } = methods.formState;

  // Log errors for debugging
  console.log("RHF errors:", errors);

  useEffect(() => {
    async function loadStudent() {
      const data = await GetStudentById(studentId);

      console.log("Fetched student:", data);

  
      reset(data);
    }

    loadStudent();
  }, [studentId, reset]);


  const onSubmit = async (formData: StudentUpdateDTOType) => {
    console.log("Updated data:", formData);
    

    const result = await UpdateStudent(studentId, formData);


      alert("Student updated successfully!");
      router.push("/");
      
      if(!result.ok){
         alert("Update failed!");
      }
      
  };

  return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Student</h1>
  

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>


                     <PersonalDetails/>

                     <div className="my-6 border-t border-gray-300"></div>

                      <AcademicEnrollmentDetails  />

                     <div className="my-6 border-t border-gray-300"></div> 

                     <CitizenshipDetails  />

                     <div className="my-6 border-t border-gray-300"></div>

                     <EmergencyDetails  />

                     <div className="my-6 border-t border-gray-300"></div>

                     <DocumentsDetails  />    
         
                     <div className="my-6 border-t border-gray-300"></div>

                     <ScholarshipDetails  />
                     
                     <div className="my-6 border-t border-gray-300"></div>

                     <EthnicityDetails  />

                     <div className="my-6 border-t border-gray-300"></div>

                     <BankDetails/>

                     <div className="my-6 border-t border-gray-300"></div>

                     <AddressDetails  />

                     <div className="my-6 border-t border-gray-300"></div>
         
                     <SecondaryInfoDetails />

                     <div className="my-6 border-t border-gray-300"></div>

                     <GuardianDetails />
         
                      <div className="my-6 border-t border-gray-300"></div>

                     <AcademicHistoryDetails /> 

                      <div className="my-6 border-t border-gray-300"></div>

                     <InterestsSection/>
                         
                          <div className="my-6 border-t border-gray-300"></div>

                      <AwardsSection/> 

                       <div className="my-6 border-t border-gray-300"></div>
                       
                   <ExtraInformationSection/>
         
         
             

          <button type="submit" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded">
            Update Student
          </button>
        </form>
      </FormProvider>
    </div>

    </div>
    
  );
}
