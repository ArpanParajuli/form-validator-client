// BankDetails.tsx
import { useFormContext } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";


import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";



export default function BankDetails() {


  const {
    register,
    formState: { errors },
  } = useFormContext<StudentUpdateDTOType>();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Bank Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Holder Name Field */}
        <div>
          <label htmlFor="bankAccountHolderName" className="block text-sm font-medium text-gray-700 mb-1">
            Account Holder Name
          </label>
          <input
            id="bankAccountHolderName"
            {...register("BankDTO.BankAccountHolderName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.BankDTO?.BankAccountHolderName && (
            <p className="mt-1 text-sm text-red-600">{errors.BankDTO.BankAccountHolderName.message}</p>
          )}
        </div>
        
        {/* Bank Name Field */}
        <div>
          <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">
            Bank Name
          </label>
          <select
            id="bankName"
            {...register("BankDTO.BankName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Bank</option>
            <option value="Nabil Bank">Nabil Bank</option>
            <option value="NIC Asia Bank">NIC Asia Bank</option>
            <option value="Global IME Bank">Global IME Bank</option>
            <option value="Siddhartha Bank">Siddhartha Bank</option>
            <option value="Nepal Investment Bank">Nepal Investment Bank</option>
            <option value="Everest Bank">Everest Bank</option>
            <option value="Machhapuchhre Bank">Machhapuchhre Bank</option>
            <option value="Kumari Bank">Kumari Bank</option>
            <option value="Agricultural Development Bank">Agricultural Development Bank</option>
            <option value="Rastriya Banijya Bank">Rastriya Banijya Bank</option>
            <option value="Nepal Bank">Nepal Bank</option>
            <option value="Other">Other</option>
          </select>
          {errors.BankDTO?.BankName && (
            <p className="mt-1 text-sm text-red-600">{errors.BankDTO.BankName.message}</p>
          )}
        </div>
        
        {/* Account Number Field */}
        <div>
          <label htmlFor="bankAccountNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Account Number
          </label>
          <input
            id="bankAccountNumber"
            {...register("BankDTO.BankAccountNumber")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.BankDTO?.BankAccountNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.BankDTO.BankAccountNumber.message}</p>
          )}
        </div>
        
        {/* Bank Branch Field */}
        <div>
          <label htmlFor="bankBranch" className="block text-sm font-medium text-gray-700 mb-1">
            Bank Branch
          </label>
          <input
            id="bankBranch"
            {...register("BankDTO.BankBranch")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.BankDTO?.BankBranch && (
            <p className="mt-1 text-sm text-red-600">{errors.BankDTO.BankBranch.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}