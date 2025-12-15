

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
  FirstName: z.string().optional(), 
  MiddleName: z.string().optional(),
  LastName: z.string().optional(), 
  DateOfBirth: z.string().refine(val => !isNaN(Date.parse(val)), "Invalid date format").optional(),
  PlaceOfBirth: z.string().optional(),
  Nationality: z.string().optional(),
  Email: z.string().email().optional(),
  PrimaryMobile: z.string().min(10).max(15).optional(),
  Gender: z.number().int().refine((val) => [1, 2, 3].includes(val), {
    message: "Invalid gender",
  }).optional(),
});


export const StudentUpdateDTO = z.object({
  StudentDTO: StudentUpdateDTO_Details,
  AddressDTO: z.array(StudentCreateSchemas.AddressDTOs),
  GuardianDTO: StudentCreateSchemas.GuardianDTO,
  AcademicEnrollmentDTO: StudentCreateSchemas.AcademicEnrollmentDTO,
  CitizenshipDTO: StudentCreateSchemas.CitizenshipDTO,
  EmergencyDTO: StudentCreateSchemas.EmergencyDTO,
  SecondaryInfoDTO: StudentCreateSchemas.SecondaryInfoDTO,
  DocumentsDTO: DocumentsDTO,
  EthnicityDTO: StudentCreateSchemas.EthnicityDTO,
  BankDTO: StudentCreateSchemas.BankDTO,
  ScholarshipDTO: StudentCreateSchemas.ScholarshipDTO,
  AcademicHistories: z.array(StudentCreateSchemas.AcademicHistoryDTO),
});


export type StudentUpdateDTOType = z.infer<typeof StudentUpdateDTO>;