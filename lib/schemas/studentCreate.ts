// /lib/schemas/studentCreate.ts

import { z } from "zod";

const LevelEnum = z.number().int().refine((val) => [1, 2, 3, 4, 5].includes(val), {
  message: "Invalid Level",
});

export const fileSchema = z
  .instanceof(File, { message: "File is required" })
  .refine((file) => file.size > 0, {
    message: "File cannot be empty",
  })
  .refine((file) => file.size <= (5 * 1024 * 1024), {
    message: "File size must be less than 5MB",
  })
 

export const AddressDTOs = z.object({
  IsPermanent: z.int().refine((val) => val === 0 || val === 1, {
    message: "Invalid value for IsPermanent",
  }),
  Province: z.string().min(1, "Province is required"),
  District: z.string().min(1, "District is required"),
  Municipality: z.string().min(1, "Municipality is required"),
  WardNumber: z.string().min(1, "Ward Number is required"),
  ToleStreet: z.string().min(1, "Tole/Street is required"),
  HouseNumber: z.string().optional(),
});


export const AcademicEnrollmentDTO = z.object({
  Faculty: z.string().min(1, "Faculty is required"),
  Program: z.string().min(1, "Program is required"),
  Level: LevelEnum,
  Semester: z.number().int().refine((val) => [1,2,3,4,5,6,7,8].includes(val), {
    message: "Invalid Semester",
  }),
  Section: z.string().optional(),
  RollNumber: z.string().min(1, "Roll Number is required"),
  RegistrationNumber: z.string().min(1, "Registration Number is required"),
  EnrollDate: z.string().refine(val => !isNaN(Date.parse(val)), "Invalid date format"),
  AcademicStatus: z.number().int(),
});


export const CitizenshipDTO = z.object({
  CitizenshipNumber: z.string().min(1, "Citizenship Number is required"),
  CitizenshipIssueDate: z.string().refine(val => !isNaN(Date.parse(val)), "Invalid date format"),
  CitizenshipIssueDistrict: z.string().min(1, "Issue District is required"),
});


export const DocumentsDTO = z.object({
  CharacterCertificate: fileSchema,
  Signature: fileSchema,
  Citizenship: fileSchema,
});


export const EmergencyDTO = z.object({
  EmergencyContactName: z.string().min(1, "Emergency Contact Name is required"),
  EmergencyContactRelation: z.string().min(1, "Emergency Contact Relation is required"),
  EmergencyContactNumber: z.string().min(1, "Emergency Contact Number is required"),
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


export const SecondaryInfoDTO = z.object({
  MiddleName: z.string().optional(),
  AlternateEmail: z.string().email().optional(),
  SecondaryMobile: z.string().optional(),
  BloodGroup: z.number().int().optional().refine((val) => val === undefined || [1,2,3,4,5,6,7,8].includes(val), {
    message: "Invalid Blood Group",
  }),
  MaritalStatus: z.number().int().optional().refine((val) => val === undefined || [1,2,3,4].includes(val), {
    message: "Invalid Marital Status",
  }),
  Religion: z.string().optional(),
});


export const EthnicityDTO = z.object({
  EthnicityName: z.string().min(1, "Ethnicity name is required"),
  EthnicityGroup: z.string().min(1, "Ethnicity group is required"),
});


export const BankDTO = z.object({
  BankAccountHolderName: z.string().optional(),
  BankName: z.string().optional(),
  BankAccountNumber: z.string().optional(),
  BankBranch: z.string().optional(),
});


export const ScholarshipDTO = z.object({
  ScholarshipType: z.number().int().optional().refine((val) => val === undefined || [1, 2, 3].includes(val), {
    message: "Invalid Scholarship Type",
  }),
  ScholarshipProviderName: z.string().optional(),
  ScholarshipAmount: z.number().optional(),
});


export const StudentDTO = z.object({
  Id: z.number().int().positive().optional(),
  OwnerId: z.string().optional(),
  ImagePath: fileSchema.optional(),
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

export const AcademicHistoryDTO = z.object({
  Level: z.number().int(),
  BoardUniversity: z.string().min(1, "Board/University is required"),
  InstitutionName: z.string().min(1, "Institution Name is required"),
  PassedYear: z.string().refine(val => !isNaN(Date.parse(val)), "Invalid date format"),
  DivisionOrGPA: z.string().optional(),
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
  OtherInterest: z.string().optional(),
});



export const OtherInformationDTO = z.object({
 
  IsHosteller: z.number().int().refine((val) => [1, 2].includes(val), {
    message: "Please select either Hosteller or Day Scholar",
  }),
  TransportationMethod: z.number().int().refine((val) => [1, 2, 3, 4].includes(val), {
    message: "Please select a transportation method",
  }),
});


export const StudentRegistrationDTO = z.object({
  StudentDTO,
  AddressDTO: z.array(AddressDTOs).min(1, "At least one address is required"),
  GuardianDTO : z.array(GuardianDTO),
  AcademicEnrollmentDTO,
  CitizenshipDTO,
  EmergencyDTO,
  SecondaryInfoDTO,
  DocumentsDTO,
  EthnicityDTO,
  BankDTO,
  ScholarshipDTO,
  AcademicHistories: z.array(AcademicHistoryDTO),
  AwardDTO: z.array(AwardDTO).optional(),
  OtherInformationDTO,
  InterestDTO : z.array(InterestDTO).optional()
});


export type StudentRegistrationDTOType = z.infer<typeof StudentRegistrationDTO>;
export type StudentDTOType = z.infer<typeof StudentDTO>;
export type AddressDTOType = z.infer<typeof AddressDTOs>;
export type AcademicEnrollmentDTOType = z.infer<typeof AcademicEnrollmentDTO>;
export type CitizenshipDTOType = z.infer<typeof CitizenshipDTO>;
export type DocumentsDtoType = z.infer<typeof DocumentsDTO>;
export type EmergencyDTOType = z.infer<typeof EmergencyDTO>;
export type GuardianDTOType = z.infer<typeof GuardianDTO>;
export type SecondaryInfoDTOType = z.infer<typeof SecondaryInfoDTO>;
export type EthnicityDTOType = z.infer<typeof EthnicityDTO>;
export type BankDTOType = z.infer<typeof BankDTO>;
export type ScholarshipDTOType = z.infer<typeof ScholarshipDTO>;
export type AcademicHistoryDTOType = z.infer<typeof AcademicHistoryDTO>;
