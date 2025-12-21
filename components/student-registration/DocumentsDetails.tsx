// DocumentsDetails.tsx
import { useFormContext, Controller } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";
import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";
import { useState } from "react";

export default function DocumentsDetails() {
    const [CharacterCertificate, setCharacterCertificate] = useState<string | null>(null);
    const [Citizenship, setCitizenship] = useState<string | null>(null);
    const [Signature, setSignature] = useState<string | null>(null);
  
    const {
        control,
        formState: { errors },
    } = useFormContext<StudentRegistrationDTOType>();

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
                <div className="bg-blue-50 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Documents</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Character Certificate Field */}
                <div className="space-y-2">
                    <label htmlFor="characterCertificate" className="flex items-center text-sm font-medium text-gray-700">
                        Character Certificate <span className="text-red-500 ml-1">*</span>
                    </label>
                    
                    <div className="relative">
                        {CharacterCertificate && (
                            <div className="mb-3 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 p-2">
                                <img 
                                    src={CharacterCertificate} 
                                    alt="Character Certificate Preview" 
                                    className="w-full h-48 object-contain"
                                />
                                <button 
                                    type="button"
                                    onClick={() => setCharacterCertificate(null)}
                                    className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        )}
                        
                        <Controller
                            name="DocumentsDTO.CharacterCertificate"
                            control={control}
                            render={({ field }) => (
                                <div className="relative">
                                    <input
                                        id="CharacterCertificate"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if(file) {
                                                const preview = URL.createObjectURL(file);
                                                setCharacterCertificate(preview);
                                                field.onChange(file);
                                            }
                                        }}
                                        className="sr-only"
                                    />
                                    <label 
                                        htmlFor="CharacterCertificate"
                                        className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        {CharacterCertificate ? "Change File" : "Upload File"}
                                    </label>
                                </div>
                            )}
                        />
                    </div>
                    
                    {errors.DocumentsDTO?.CharacterCertificate && (
                        <div className="flex items-center mt-1 text-sm text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.DocumentsDTO.CharacterCertificate.message}
                        </div>
                    )}
                </div>
                
                {/* Signature Field */}
                <div className="space-y-2">
                    <label htmlFor="signature" className="flex items-center text-sm font-medium text-gray-700">
                        Signature <span className="text-red-500 ml-1">*</span>
                    </label>
                    
                    <div className="relative">
                        {Signature && (
                            <div className="mb-3 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 p-2">
                                <img 
                                    src={Signature} 
                                    alt="Signature Preview" 
                                    className="w-full h-48 object-contain"
                                />
                                <button 
                                    type="button"
                                    onClick={() => setSignature(null)}
                                    className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        )}
                        
                        <Controller
                            name="DocumentsDTO.Signature"
                            control={control}
                            render={({ field }) => (
                                <div className="relative">
                                    <input
                                        id="Signature"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if(file) {
                                                const preview = URL.createObjectURL(file);
                                                setSignature(preview);
                                                field.onChange(file);
                                            }
                                        }}
                                        className="sr-only"
                                    />
                                    <label 
                                        htmlFor="Signature"
                                        className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        {Signature ? "Change File" : "Upload File"}
                                    </label>
                                </div>
                            )}
                        />
                    </div>
                    
                    {errors.DocumentsDTO?.Signature && (
                        <div className="flex items-center mt-1 text-sm text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.DocumentsDTO.Signature.message}
                        </div>
                    )}
                </div>
                
                {/* Citizenship Field */}
                <div className="space-y-2">
                    <label htmlFor="citizenship" className="flex items-center text-sm font-medium text-gray-700">
                        Citizenship Document <span className="text-red-500 ml-1">*</span>
                    </label>
                    
                    <div className="relative">
                        {Citizenship && (
                            <div className="mb-3 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 p-2">
                                <img 
                                    src={Citizenship} 
                                    alt="Citizenship Document Preview" 
                                    className="w-full h-48 object-contain"
                                />
                                <button 
                                    type="button"
                                    onClick={() => setCitizenship(null)}
                                    className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        )}
                        
                        <Controller
                            name="DocumentsDTO.Citizenship"
                            control={control}
                            render={({ field }) => (
                                <div className="relative">
                                    <input
                                        id="Citizenship"
                                        type="file"
                                        accept="image/*,.pdf"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if(file) {
                                                const preview = URL.createObjectURL(file);
                                                setCitizenship(preview);
                                                field.onChange(file);
                                            }
                                        }}
                                        className="sr-only"
                                    />
                                    <label 
                                        htmlFor="Citizenship"
                                        className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        {Citizenship ? "Change File" : "Upload File"}
                                    </label>
                                </div>
                            )}
                        />
                    </div>
                    
                    {errors.DocumentsDTO?.Citizenship && (
                        <div className="flex items-center mt-1 text-sm text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.DocumentsDTO.Citizenship.message}
                        </div>
                    )}
                </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            Please upload clear, legible copies of your documents. Accepted formats include JPG, PNG, and PDF (for citizenship document).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}