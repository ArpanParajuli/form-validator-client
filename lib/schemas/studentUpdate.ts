

import { z } from "zod";
import * as StudentCreateSchemas from "@/lib/schemas/studentCreate";


const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB MAX
const FileSchema = z
  .union([
    z.instanceof(File),
    z.string(),
    z.null(),
    z.undefined()
  ])
  .refine((file) => {
    if (!file || typeof file === 'string') return true;
    return file.size <= MAX_FILE_SIZE;
  }, {
    message: `File must be less than ${MAX_FILE_SIZE / (1024 * 1024)}MB`,
  });

const DocumentsDTO = z.object({
  CharacterCertificate: FileSchema.optional(),
  Signature: FileSchema.optional(),
  Citizenship: FileSchema.optional(),
});


export const StudentUpdateDTO_Details = z.object({
  Id: z.number().int().positive().optional(),
  ImagePath: FileSchema.optional(),
  FirstName: z.string().min(1, "First Name is required").max(100),
  MiddleName: z.string().optional(),
  LastName: z.string().min(1, "Last Name is required").max(100),
  DateOfBirth: z.string().refine(val => !isNaN(Date.parse(val)), "Invalid date format"),
  PlaceOfBirth: z.string().optional(),
  Nationality: z.string().optional(),
  Email: z.string().email("Invalid email address"),
  PrimaryMobile: z.string().min(10, "Mobile number must be at least 10 characters").max(15),
  Gender: z.number().int().refine((val) => [1, 2, 3].includes(val), {
    message: "Invalid gender selection",
  }),
});


export const ExtracurricularDTO = z.object({
  Interests: z.array(z.string()).min(1, "Please select at least one interest"),
  OtherInterest: z.string().optional(),

  IsHosteller: z.number().int().refine((val) => [1, 2].includes(val), {
    message: "Please select either Hosteller or Day Scholar",
  }),
  TransportationMethod: z.number().int().refine((val) => [1, 2, 3, 4].includes(val), {
    message: "Please select a transportation method",
  }),
});


export const GuardianDTO = z.object({
  FullName: z.string().min(1, "Guardian Full Name is required"),
  Occupation: z.string().optional(),
  Designation: z.string().optional(),
  Organization: z.string().optional(),
  MobileNumber: z.string().min(1, "Guardian Mobile Number is required"),
  Email: z.string().email().optional(),
  Relation: z.string().optional(),
});

export const AwardDTO = z.object({
  Title: z.string().min(1, "Award title is required"),
  IssuingOrganization: z.string().min(1, "Issuing organization is required"),
  YearReceived: z.date().optional().refine((date) => {
    if (!date) return true; // Optional field
    const currentYear = new Date().getFullYear();
    const awardYear = date.getFullYear();
    return awardYear >= 1900 && awardYear <= currentYear;
  }, "Please enter a valid date"),
});



export const InterestDTO = z.object({

  Name: z.string().min(1, "Please select at least one interest"),
  OtherInterest: z.union([z.string() , z.null() , z.undefined()]).optional()
});



export const StudentUpdateDTO = z.object({
  StudentDTO: StudentUpdateDTO_Details,
  AddressDTO: z.array(StudentCreateSchemas.AddressDTOs),
  // GuardianDTO: StudentCreateSchemas.GuardianDTO,
  GuardianDTO: z.array(GuardianDTO),

  AcademicEnrollmentDTO: StudentCreateSchemas.AcademicEnrollmentDTO,
  CitizenshipDTO: StudentCreateSchemas.CitizenshipDTO,
  EmergencyDTO: StudentCreateSchemas.EmergencyDTO,
  SecondaryInfoDTO: StudentCreateSchemas.SecondaryInfoDTO,
  DocumentsDTO: DocumentsDTO,
  EthnicityDTO: StudentCreateSchemas.EthnicityDTO,
  BankDTO: StudentCreateSchemas.BankDTO,
  ScholarshipDTO: StudentCreateSchemas.ScholarshipDTO,
  AcademicHistories: z.array(StudentCreateSchemas.AcademicHistoryDTO),
    // AwardDTO: StudentCreateSchemas.AwardDTO,
    AwardDTO : z.array(AwardDTO).optional(),
     OtherInformationDTO : StudentCreateSchemas.OtherInformationDTO,
    InterestDTO : z.array(InterestDTO)
});


export type StudentUpdateDTOType = z.infer<typeof StudentUpdateDTO>;