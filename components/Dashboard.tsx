

"use client";

import { useState , useEffect } from "react";

import { GetAllStudents  , DeleteStudent} from "@/apis/student-api";

import { StudentDTOType } from "@/lib/schemas/studentCreate"

import { useRouter } from "next/navigation";

export const ServerURL = `https://localhost:7290`;

export  function Dashboard() {  


  const router = useRouter();

    const [students, setStudents] = useState<StudentDTOType[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchStudents() {

            try {
            const studentsData = await GetAllStudents();
            console.log(studentsData);
            setLoading(false);
            setStudents(studentsData);
            } 

            catch (err:any) {
                setError(err.message || "An error occurred while fetching student data.");
            }
            finally {
                setLoading(false);
            }   
        }   
        fetchStudents();

    }, []);



   
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading student data...</div>
      </div>
    );
  }

 if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold text-red-600">Error: {error}</div>
      </div>
    );
  }

  const handleEdit = (studentId: any) => {

    alert(`Functionality to edit student ${studentId} would go here.`);
    router.push(`/edit/${studentId}`);
  };

  const handleDelete = async (studentId: any) => {

    if (window.confirm(`Are you sure you want to delete student ${studentId}?`)) {
      alert(`API call to delete student ${studentId} would go here.`);

      await DeleteStudent(studentId.toString());

       setStudents(currentStudents =>
          currentStudents.filter(student => student.Id !== studentId)
        );
    }
  };



 return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Student Dashboard
      </h1>

      {students.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {students.map((student) => (

            
            
            <div
              key={student.Id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
            >
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 truncate">
                  {student.FirstName} {student.LastName}
                </h2>
                <p className="text-sm text-gray-500">ID: {student.Id}</p>
              </div>

              <img
                  src={`${ServerURL}${student.ImagePath}` || `https://ui-avatars.com/api/?name=${student.FirstName}+${student.LastName}&background=d33849&color=fff&size=128`}
                  alt={`${student.FirstName} ${student.LastName}`}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-200"
                />

              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Email:</span> {student.Email}
                </p>
                <p>
                  <span className="font-semibold">Mobile:</span> {student.PrimaryMobile}
                </p>
                <p>
                  <span className="font-semibold">Gender:</span>
                   {student.Gender == 1 && <span> Male</span>}
                   {student.Gender == 2 && <span> Female</span>}
                   {student.Gender == 3 && <span> Other</span>}
                </p>
                <p>
                  <span className="font-semibold">Date of Birth:</span>{" "}
                  {new Date(student.DateOfBirth).toLocaleDateString()}
                </p>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  onClick={() => handleEdit(student.Id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(student.Id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg">
          No students found.
        </div>
      )}
    </div>
  );
}