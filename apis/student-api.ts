// apis/student-api.ts
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";

export const ServerURL = `https://localhost:7290`;

// export const ServerURL = `http://localhost:5288`;


export const GetStudentById = async (studentId: string) => {
    return await fetch(`${ServerURL}/api/student/${studentId}`).then(res => res.json()); 
}

export const GetAllStudents = async () => {
    return await fetch(`${ServerURL}/api/student`).then(res => res.json()); 
}   

export const CreateStudent = async (data: any) => {
  const student = data.StudentDTO;

  const formData = new FormData();

  // formData.append("StudentDTO.Id", student.Id.toString());
  formData.append("StudentDTO.FirstName", student.FirstName);
  formData.append("StudentDTO.MiddleName", student.MiddleName || "");
  formData.append("StudentDTO.LastName", student.LastName);
  formData.append("StudentDTO.PlaceOfBirth", student.PlaceOfBirth || "");
  formData.append("StudentDTO.Nationality", student.Nationality);
  formData.append("StudentDTO.Email", student.Email);
  formData.append("StudentDTO.PrimaryMobile", student.PrimaryMobile);
  formData.append("StudentDTO.Gender", student.Gender.toString());
  formData.append("StudentDTO.DateOfBirth", student.DateOfBirth);
  // File
  if (student.ImagePath) {
    formData.append("StudentDTO.ImagePath", student.ImagePath);
  }



if (data.AddressDTO && data.AddressDTO.length > 0) {
  data.AddressDTO.forEach((address: any, index: number) => {

  formData.append(`AddressDTO[${index}].province`, address.Province);
  formData.append(`AddressDTO[${index}].district`, address.District);
  formData.append(`AddressDTO[${index}].municipality`, address.Municipality);
  formData.append(`AddressDTO[${index}].wardNumber`, address.WardNumber);
  formData.append(`AddressDTO[${index}].toleStreet`, address.ToleStreet);
  formData.append(`AddressDTO[${index}].houseNumber`, address.HouseNumber);

  formData.append(`AddressDTO[${index}].IsPermanent`, address.IsPermanent);
  });
}


    if (data.GuardianDTO && data.GuardianDTO.length > 0) {
  data.GuardianDTO.forEach((GuardianDTOs: any, index: number) => {
    formData.append(`GuardianDTO[${index}].fullName`, GuardianDTOs.FullName);
    formData.append(`GuardianDTO[${index}].occupation`, GuardianDTOs.Occupation);
    formData.append(`GuardianDTO[${index}].designation`, GuardianDTOs.Designation);
    formData.append(`GuardianDTO[${index}].organization`, GuardianDTOs.Organization);
    formData.append(`GuardianDTO[${index}].mobileNumber`, GuardianDTOs.MobileNumber);
    formData.append(`GuardianDTO[${index}].email`, GuardianDTOs.Email);
    formData.append(`GuardianDTO[${index}].relation`, GuardianDTOs.Relation.toString());
  });
}


    // formData.append("GuardianDTO.fullName", data.GuardianDTO.FullName);
    // formData.append("GuardianDTO.occupation", data.GuardianDTO.Occupation);
    // formData.append("GuardianDTO.designation", data.GuardianDTO.Designation);
    // formData.append("GuardianDTO.organization", data.GuardianDTO.Organization);
    // formData.append("GuardianDTO.mobileNumber", data.GuardianDTO.MobileNumber);
    // formData.append("GuardianDTO.email", data.GuardianDTO.Email);
    // formData.append("GuardianDTO.relation", data.GuardianDTO.Relation.toString());

    formData.append("EmergencyDTO.emergencyContactName", data.EmergencyDTO.EmergencyContactName);
    formData.append("EmergencyDTO.emergencyContactRelation", data.EmergencyDTO.EmergencyContactRelation);
    formData.append("EmergencyDTO.emergencyContactNumber", data.EmergencyDTO.EmergencyContactNumber);
    formData.append("AcademicEnrollmentDTO.faculty", data.AcademicEnrollmentDTO.Faculty);
    formData.append("AcademicEnrollmentDTO.program", data.AcademicEnrollmentDTO.Program);
    formData.append("AcademicEnrollmentDTO.level", data.AcademicEnrollmentDTO.Level);
    formData.append("AcademicEnrollmentDTO.semester", data.AcademicEnrollmentDTO.Semester);
    formData.append("AcademicEnrollmentDTO.section", data.AcademicEnrollmentDTO.Section);
    formData.append("AcademicEnrollmentDTO.rollNumber", data.AcademicEnrollmentDTO.RollNumber);
    formData.append("AcademicEnrollmentDTO.registrationNumber", data.AcademicEnrollmentDTO.RegistrationNumber);
    formData.append("AcademicEnrollmentDTO.enrollDate", data.AcademicEnrollmentDTO.EnrollDate);
    formData.append("AcademicEnrollmentDTO.academicStatus", data.AcademicEnrollmentDTO.AcademicStatus.toString());

    formData.append("CitizenshipDTO.citizenshipNumber", data.CitizenshipDTO.CitizenshipNumber);
    formData.append("CitizenshipDTO.citizenshipIssueDate", data.CitizenshipDTO.CitizenshipIssueDate);
    formData.append("CitizenshipDTO.citizenshipIssueDistrict", data.CitizenshipDTO.CitizenshipIssueDistrict);

    formData.append("DocumentsDTO.characterCertificate", data.DocumentsDTO.CharacterCertificate);
    formData.append("DocumentsDTO.signature", data.DocumentsDTO.Signature);
    formData.append("DocumentsDTO.citizenship", data.DocumentsDTO.Citizenship);

formData.append("SecondaryInfoDTO.previousSchool", data.SecondaryInfoDTO.PreviousSchool); 
formData.append("SecondaryInfoDTO.alternateEmail", data.SecondaryInfoDTO.AlternateEmail);
formData.append("SecondaryInfoDTO.secondaryMobile", data.SecondaryInfoDTO.SecondaryMobile);
formData.append("SecondaryInfoDTO.bloodGroup", data.SecondaryInfoDTO.BloodGroup.toString());
formData.append("SecondaryInfoDTO.maritalStatus", data.SecondaryInfoDTO.MaritalStatus.toString());
formData.append("SecondaryInfoDTO.religion", data.SecondaryInfoDTO.Religion || "");
formData.append("SecondaryInfoDTO.middleName", data.SecondaryInfoDTO.MiddleName || "");


formData.append("EthnicityDTO.ethnicityName", data.EthnicityDTO.EthnicityName || "");
formData.append("EthnicityDTO.ethnicityGroup", data.EthnicityDTO.EthnicityGroup || "");

if (data.AcademicHistories && data.AcademicHistories.length > 0) {
  data.AcademicHistories.forEach((academicHistory: any, index: number) => {
    formData.append(`AcademicHistories[${index}].Level`, academicHistory.Level.toString());
    formData.append(`AcademicHistories[${index}].BoardUniversity`, academicHistory.BoardUniversity);
    formData.append(`AcademicHistories[${index}].PassedYear`, academicHistory.PassedYear.toString());
    formData.append(`AcademicHistories[${index}].DivisionOrGPA`, academicHistory.DivisionOrGPA.toString());
    formData.append(`AcademicHistories[${index}].InstitutionName`, academicHistory.InstitutionName);
  });
}

// AwardDTO array
  if (data.AwardDTO && data.AwardDTO.length > 0) {
    data.AwardDTO.forEach((award: any, index: number) => {
      formData.append(`AwardDTO[${index}].Title`, award.Title);
      formData.append(`AwardDTO[${index}].IssuingOrganization`, award.IssuingOrganization);
      
      // Handle date conversion
      if (award.YearReceived) {
        const yearReceived = award.YearReceived instanceof Date 
          ? award.YearReceived.toISOString().split('T')[0] 
          : new Date(award.YearReceived).toISOString().split('T')[0];
        formData.append(`AwardDTO[${index}].YearReceived`, yearReceived);
      }
    });
  }

  // InterestDTO array
  if (data.InterestDTO && data.InterestDTO.length > 0) {
    data.InterestDTO.forEach((interest: any, index: number) => {
      formData.append(`InterestDTO[${index}].Name`, interest.Name);
      formData.append(`InterestDTO[${index}].OtherInterest`, interest.OtherInterest || "");
    });
  }

  // ExtraInformationDTO
  formData.append("OtherInformationDTO.IsHosteller", data.OtherInformationDTO.IsHosteller.toString());
  formData.append("OtherInformationDTO.TransportationMethod", data.OtherInformationDTO.TransportationMethod.toString());


formData.append("ScholarshipDTO.ScholarshipType", data.ScholarshipDTO.ScholarshipType || "");
formData.append("ScholarshipDTO.ScholarshipProviderName", data.ScholarshipDTO.ScholarshipProviderName || "");
formData.append("ScholarshipDTO.ScholarshipAmount", data.ScholarshipDTO.ScholarshipAmount?.toString() || "");



formData.append("BankDTO.BankAccountHolderName", data.BankDTO.BankAccountHolderName || "");
formData.append("BankDTO.BankName", data.BankDTO.BankName || "");
formData.append("BankDTO.BankAccountNumber", data.BankDTO.BankAccountNumber || "");
formData.append("BankDTO.BankBranch", data.BankDTO.BankBranch || "");



  return await fetch(`${ServerURL}/api/student/create`, {
    method: "POST",
    body: formData,   // always formData
  });
};



export const UpdateStudent = async (studentId: string, data: any) => {  

  const student = data.StudentDTO;

  const formData = new FormData();

  // formData.append("StudentDTO.Id", student.Id.toString());
  formData.append("StudentDTO.FirstName", student.FirstName);
  formData.append("StudentDTO.MiddleName", student.MiddleName || "");
  formData.append("StudentDTO.LastName", student.LastName);
  formData.append("StudentDTO.PlaceOfBirth", student.PlaceOfBirth || "");
  formData.append("StudentDTO.Nationality", student.Nationality);
  formData.append("StudentDTO.Email", student.Email);
  formData.append("StudentDTO.PrimaryMobile", student.PrimaryMobile);
  formData.append("StudentDTO.Gender", student.Gender.toString());
  formData.append("StudentDTO.DateOfBirth", student.DateOfBirth);
  // File
  if (student.ImagePath) {
    formData.append("StudentDTO.ImagePath", student.ImagePath);
  }



if (data.AddressDTO && data.AddressDTO.length > 0) {
  data.AddressDTO.forEach((address: any, index: number) => {

  formData.append(`AddressDTO[${index}].province`, address.Province);
  formData.append(`AddressDTO[${index}].district`, address.District);
  formData.append(`AddressDTO[${index}].municipality`, address.Municipality);
  formData.append(`AddressDTO[${index}].wardNumber`, address.WardNumber);
  formData.append(`AddressDTO[${index}].toleStreet`, address.ToleStreet);
  formData.append(`AddressDTO[${index}].houseNumber`, address.HouseNumber);

  formData.append(`AddressDTO[${index}].IsPermanent`, address.IsPermanent);
  });
}


    if (data.GuardianDTO && data.GuardianDTO.length > 0) {
  data.GuardianDTO.forEach((GuardianDTOs: any, index: number) => {
    formData.append(`GuardianDTO[${index}].fullName`, GuardianDTOs.FullName);
    formData.append(`GuardianDTO[${index}].occupation`, GuardianDTOs.Occupation);
    formData.append(`GuardianDTO[${index}].designation`, GuardianDTOs.Designation);
    formData.append(`GuardianDTO[${index}].organization`, GuardianDTOs.Organization);
    formData.append(`GuardianDTO[${index}].mobileNumber`, GuardianDTOs.MobileNumber);
    formData.append(`GuardianDTO[${index}].email`, GuardianDTOs.Email);
    formData.append(`GuardianDTO[${index}].relation`, GuardianDTOs.Relation.toString());
  });
}


    // formData.append("GuardianDTO.fullName", data.GuardianDTO.FullName);
    // formData.append("GuardianDTO.occupation", data.GuardianDTO.Occupation);
    // formData.append("GuardianDTO.designation", data.GuardianDTO.Designation);
    // formData.append("GuardianDTO.organization", data.GuardianDTO.Organization);
    // formData.append("GuardianDTO.mobileNumber", data.GuardianDTO.MobileNumber);
    // formData.append("GuardianDTO.email", data.GuardianDTO.Email);
    // formData.append("GuardianDTO.relation", data.GuardianDTO.Relation.toString());

    formData.append("EmergencyDTO.emergencyContactName", data.EmergencyDTO.EmergencyContactName);
    formData.append("EmergencyDTO.emergencyContactRelation", data.EmergencyDTO.EmergencyContactRelation);
    formData.append("EmergencyDTO.emergencyContactNumber", data.EmergencyDTO.EmergencyContactNumber);
    formData.append("AcademicEnrollmentDTO.faculty", data.AcademicEnrollmentDTO.Faculty);
    formData.append("AcademicEnrollmentDTO.program", data.AcademicEnrollmentDTO.Program);
    formData.append("AcademicEnrollmentDTO.level", data.AcademicEnrollmentDTO.Level);
    formData.append("AcademicEnrollmentDTO.semester", data.AcademicEnrollmentDTO.Semester);
    formData.append("AcademicEnrollmentDTO.section", data.AcademicEnrollmentDTO.Section);
    formData.append("AcademicEnrollmentDTO.rollNumber", data.AcademicEnrollmentDTO.RollNumber);
    formData.append("AcademicEnrollmentDTO.registrationNumber", data.AcademicEnrollmentDTO.RegistrationNumber);
    formData.append("AcademicEnrollmentDTO.enrollDate", data.AcademicEnrollmentDTO.EnrollDate);
    formData.append("AcademicEnrollmentDTO.academicStatus", data.AcademicEnrollmentDTO.AcademicStatus.toString());

    formData.append("CitizenshipDTO.citizenshipNumber", data.CitizenshipDTO.CitizenshipNumber);
    formData.append("CitizenshipDTO.citizenshipIssueDate", data.CitizenshipDTO.CitizenshipIssueDate);
    formData.append("CitizenshipDTO.citizenshipIssueDistrict", data.CitizenshipDTO.CitizenshipIssueDistrict);

    formData.append("DocumentsDTO.characterCertificate", data.DocumentsDTO.CharacterCertificate);
    formData.append("DocumentsDTO.signature", data.DocumentsDTO.Signature);
    formData.append("DocumentsDTO.citizenship", data.DocumentsDTO.Citizenship);

formData.append("SecondaryInfoDTO.previousSchool", data.SecondaryInfoDTO.PreviousSchool); 
formData.append("SecondaryInfoDTO.alternateEmail", data.SecondaryInfoDTO.AlternateEmail);
formData.append("SecondaryInfoDTO.secondaryMobile", data.SecondaryInfoDTO.SecondaryMobile);
formData.append("SecondaryInfoDTO.bloodGroup", data.SecondaryInfoDTO.BloodGroup.toString());
formData.append("SecondaryInfoDTO.maritalStatus", data.SecondaryInfoDTO.MaritalStatus.toString());
formData.append("SecondaryInfoDTO.religion", data.SecondaryInfoDTO.Religion || "");
formData.append("SecondaryInfoDTO.middleName", data.SecondaryInfoDTO.MiddleName || "");


formData.append("EthnicityDTO.ethnicityName", data.EthnicityDTO.EthnicityName || "");
formData.append("EthnicityDTO.ethnicityGroup", data.EthnicityDTO.EthnicityGroup || "");

if (data.AcademicHistories && data.AcademicHistories.length > 0) {
  data.AcademicHistories.forEach((academicHistory: any, index: number) => {
    formData.append(`AcademicHistories[${index}].Level`, academicHistory.Level.toString());
    formData.append(`AcademicHistories[${index}].BoardUniversity`, academicHistory.BoardUniversity);
    formData.append(`AcademicHistories[${index}].PassedYear`, academicHistory.PassedYear.toString());
    formData.append(`AcademicHistories[${index}].DivisionOrGPA`, academicHistory.DivisionOrGPA.toString());
    formData.append(`AcademicHistories[${index}].InstitutionName`, academicHistory.InstitutionName);
  });
}

// AwardDTO array
  if (data.AwardDTO && data.AwardDTO.length > 0) {
    data.AwardDTO.forEach((award: any, index: number) => {
      formData.append(`AwardDTO[${index}].Title`, award.Title);
      formData.append(`AwardDTO[${index}].IssuingOrganization`, award.IssuingOrganization);
      
      // Handle date conversion
      if (award.YearReceived) {
        const yearReceived = award.YearReceived instanceof Date 
          ? award.YearReceived.toISOString().split('T')[0] 
          : new Date(award.YearReceived).toISOString().split('T')[0];
        formData.append(`AwardDTO[${index}].YearReceived`, yearReceived);
      }
    });
  }

  // InterestDTO array
  if (data.InterestDTO && data.InterestDTO.length > 0) {
    data.InterestDTO.forEach((interest: any, index: number) => {
      formData.append(`InterestDTO[${index}].Name`, interest.Name);
      formData.append(`InterestDTO[${index}].OtherInterest`, interest.OtherInterest || "");
    });
  }

  // ExtraInformationDTO
  formData.append("OtherInformationDTO.IsHosteller", data.OtherInformationDTO.IsHosteller.toString());
  formData.append("OtherInformationDTO.TransportationMethod", data.OtherInformationDTO.TransportationMethod.toString());


formData.append("ScholarshipDTO.ScholarshipType", data.ScholarshipDTO.ScholarshipType || "");
formData.append("ScholarshipDTO.ScholarshipProviderName", data.ScholarshipDTO.ScholarshipProviderName || "");
formData.append("ScholarshipDTO.ScholarshipAmount", data.ScholarshipDTO.ScholarshipAmount?.toString() || "");



formData.append("BankDTO.BankAccountHolderName", data.BankDTO.BankAccountHolderName || "");
formData.append("BankDTO.BankName", data.BankDTO.BankName || "");
formData.append("BankDTO.BankAccountNumber", data.BankDTO.BankAccountNumber || "");
formData.append("BankDTO.BankBranch", data.BankDTO.BankBranch || "");



    return await fetch(`${ServerURL}/api/student/update/${studentId}`, {
       method: 'PUT', 
         body: formData         
    }); 
}

export const DeleteStudent = async (studentId: string) => {  
    return await fetch(`${ServerURL}/api/student/${studentId}`, {
       method: 'DELETE', 
    });         
}