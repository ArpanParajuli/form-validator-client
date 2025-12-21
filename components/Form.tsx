// ParentForm.tsx


"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import PersonalDetails from "./student-registration/PersonalDetails";
import AcademicEnrollmentDetails from "./student-registration/AcademicEnrollmentDetails";
import CitizenshipDetails from "./student-registration/CitizenshipDetails";
import EmergencyDetails from "./student-registration/EmergencyDetails";
import DocumentsDetails from "./student-registration/DocumentsDetails";     
import ScholarshipDetails from "./student-registration/ScholarshipDetails";
import EthnicityDetails from "./student-registration/EthnicityDetails";
import BankDetails from "./student-registration/BankDetails";
import GuardianDetails from "./student-registration/GuardianDetails";
import AddressDetails from "./student-registration/AddressDetails";
import SecondaryInfoDetails from "./student-registration/SecondaryInfoDetails";
import AcademicHistoryDetails from "./student-registration/AcademicHistoryDetails";




import AwardsSection from "./student-registration/AwardsSection";

import ExtraInformationSection from "./student-registration/ExtraInformationSection";

import InterestsSection from "./student-registration/InterestsSection";





import { StudentRegistrationDTO , StudentRegistrationDTOType} from "@/lib/schemas/studentCreate";

import { CreateStudent } from "@/apis/student-api";


const emptyDefaults: StudentRegistrationDTOType = {
  StudentDTO: {
    ImagePath: null as unknown as File, 
    FirstName: "",
    MiddleName: "",
    LastName: "",
    DateOfBirth: "",
    PlaceOfBirth: "",
    Nationality: "",
    Email: "",
    PrimaryMobile: "",
    Gender: "" as unknown as number, // placeholder
  },
  AddressDTO: [{
    IsPermanent: 0,
    Province: "",
    District: "",
    Municipality: "",
    WardNumber: "",
    ToleStreet: "",
    HouseNumber: "",
  }],


  // GuardianDTO: {
  //   FullName: "",
  //   Occupation: "",
  //   Designation: "",
  //   Organization: "",
  //   MobileNumber: "",
  //   Email: "",
  //   Relation: "",
  // },

    GuardianDTO: [],
  AcademicEnrollmentDTO: {
    Faculty: "",
    Program: "",
    Level: 0,
    Semester: 0,
    Section: "",
    RollNumber: "",
    RegistrationNumber: "",
    EnrollDate: "",
    AcademicStatus: 0,
  },
  CitizenshipDTO: {
    CitizenshipNumber: "",
    CitizenshipIssueDate:"",
    CitizenshipIssueDistrict: "",
  },
  EmergencyDTO: {
    EmergencyContactName: "",
    EmergencyContactRelation: "",
    EmergencyContactNumber: "",
  },
  SecondaryInfoDTO: {
    MiddleName: "",
    AlternateEmail: "",
    SecondaryMobile: "",
    BloodGroup: undefined,
    MaritalStatus: undefined,
    Religion: "",
  },
  DocumentsDTO: {
    CharacterCertificate: null as unknown as File,
    Signature: null as unknown as File,
    Citizenship: null as unknown as File,
  },
  EthnicityDTO: {
    EthnicityName: "",
    EthnicityGroup: "",
  },
  BankDTO: {
    BankAccountHolderName: "",
    BankName: "",
    BankAccountNumber: "",
    BankBranch: "",
  },
  ScholarshipDTO: {
    ScholarshipType: undefined,
    ScholarshipProviderName: "",
    ScholarshipAmount: 0,
  },

   AcademicHistories: [ 
      {
        Level: 1,
        BoardUniversity: "",
        InstitutionName: "",
        PassedYear: "",
        DivisionOrGPA: "",
      }
    ],

    InterestDTO : [],
    AwardDTO : [],

    OtherInformationDTO : {
  IsHosteller: 0,
  TransportationMethod: 0
}

};



const Form = () => {
  const [submittedData, setSubmittedData] = useState<StudentRegistrationDTOType | null>(null);
  
  const methods = useForm<StudentRegistrationDTOType>({
    resolver: zodResolver(StudentRegistrationDTO),
    defaultValues: emptyDefaults

  });


  const { errors } = methods.formState;


  console.log("RHF errors:", errors);

  const onSubmit = async (data: StudentRegistrationDTOType) => {
   try {
    console.log("FORM DATA:", data);  // <--- check browser console
    const result = await CreateStudent(data);
    if (result.ok) {
      alert("Student created successfully!");
    }
    setSubmittedData(data);
  } catch (err) {
    console.error("Error creating student:", err);
  }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Student Registration Form</h1>
        
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <PersonalDetails/>
            <div className="my-6 border-t border-gray-300"></div>
             <AcademicEnrollmentDetails />
            <div className="my-6 border-t border-gray-300"></div> 
            <CitizenshipDetails />
            <div className="my-6 border-t border-gray-300"></div>
            <EmergencyDetails />
            <div className="my-6 border-t border-gray-300"></div>
            <DocumentsDetails />    

            <div className="my-6 border-t border-gray-300"></div>
            <ScholarshipDetails />
            
            <div className="my-6 border-t border-gray-300"></div>
            <EthnicityDetails />
            <div className="my-6 border-t border-gray-300"></div>
            <BankDetails />
            <div className="my-6 border-t border-gray-300"></div>
            <AddressDetails />
            <div className="my-6 border-t border-gray-300"></div>

            <SecondaryInfoDetails />
            <div className="my-6 border-t border-gray-300"></div>
            <GuardianDetails/>

             <div className="my-6 border-t border-gray-300"></div>
            <AcademicHistoryDetails/> 
          <div className="my-6 border-t border-gray-300"></div>

            <InterestsSection/>
            <div className="my-6 border-t border-gray-300"></div>
            <ExtraInformationSection/>
            <div className="my-6 border-t border-gray-300"></div>
            <AwardsSection/>
            <div className="my-6 border-t border-gray-300"></div>


    
             

            
            <div className="mt-8 flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => methods.reset()}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </FormProvider>
        

      </div>
    </div>
  );
};

export default Form;