// AddressDetails.tsx
import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import { StudentRegistrationDTOType } from "@/lib/schemas/studentCreate";


import { StudentUpdateDTOType } from "@/lib/schemas/studentUpdate";



export default function AddressDetails() {

 
   
  const {
    control,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<StudentRegistrationDTOType>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "AddressDTO",
  });

  const isPermanentOnly = fields.length === 1 && watch("AddressDTO.0.IsPermanent") === 1;

  // Handle checkbox change
  const handleCheckboxChange = (checked: boolean) => {
    if (checked) {
      // If checked, ensure we have only one address with IsPermanent = 1
      if (fields.length === 0) {
        append({
          IsPermanent: 1,
          Province: "",
          District: "",
          Municipality: "",
          WardNumber: "",
          ToleStreet: "",
          HouseNumber: "",
        });
      } else {
        // Update the first address to have IsPermanent = 1
        setValue("AddressDTO.0.IsPermanent", 1);
      }
      
      // Remove any additional addresses
      if (fields.length > 1) {
        remove(1);
      }
    } else {
      // If unchecked, ensure we have two addresses
      if (fields.length === 0) {
        // Add permanent address
        append({
          IsPermanent: 1,
          Province: "",
          District: "",
          Municipality: "",
          WardNumber: "",
          ToleStreet: "",
          HouseNumber: "",
        });
        // Add temporary address
        append({
          IsPermanent: 0,
          Province: "",
          District: "",
          Municipality: "",
          WardNumber: "",
          ToleStreet: "",
          HouseNumber: "",
        });
      } else if (fields.length === 1) {

        setValue("AddressDTO.0.IsPermanent", 1);
        append({
          IsPermanent: 0,
          Province: "",
          District: "",
          Municipality: "",
          WardNumber: "",
          ToleStreet: "",
          HouseNumber: "",
        });
      } else if (fields.length > 1) {
        // Ensure we have exactly 2 addresses with correct IsPermanent values
        setValue("AddressDTO.0.IsPermanent", 1);
        setValue("AddressDTO.1.IsPermanent", 0);
        // Remove any additional addresses
        for (let i = 2; i < fields.length; i++) {
          remove(i);
        }
      }
    }
  };

  // Initialize the form with one address if empty
  if (fields.length === 0) {
    append({
      IsPermanent: 1,
      Province: "",
      District: "",
      Municipality: "",
      WardNumber: "",
      ToleStreet: "",
      HouseNumber: "",
    });
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Address Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Checkbox for Temporary Address */}
        <div className="flex items-center col-span-2">
          <Controller
            name="AddressDTO.0.IsPermanent"
            control={control}
            defaultValue={1}
            render={({ field }) => (
              <input
                type="checkbox"
                checked={isPermanentOnly}
                onChange={(e) => {
                  handleCheckboxChange(e.target.checked);
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            )}
          />
          <label htmlFor="IsPermanent" className="text-sm text-gray-700 ml-2">
            Temporary Address is same as Permanent Address
          </label>
        </div>
        
        {/* Permanent Address Fields */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            {isPermanentOnly ? "Address" : "Permanent Address"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Province Field */}
            <div>
              <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
                Province <span className="text-red-500">*</span>
              </label>
              <select
                id="Province"
                {...register(`AddressDTO.0.Province`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Province</option>
                <option value="Province 1">Province 1</option>
                <option value="Madhesh Province">Madhesh Province</option>
                <option value="Bagmati Province">Bagmati Province</option>
                <option value="Gandaki Province">Gandaki Province</option>
                <option value="Lumbini Province">Lumbini Province</option>
                <option value="Karnali Province">Karnali Province</option>
                <option value="Sudurpaschim Province">Sudurpaschim Province</option>
              </select>
              {errors.AddressDTO?.[0]?.Province && (
                <p className="mt-1 text-sm text-red-600">{errors.AddressDTO[0].Province.message}</p>
              )}
            </div>
            
            {/* District Field */}
            <div>
              <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                District <span className="text-red-500">*</span>
              </label>
              <input
                id="District"
                {...register(`AddressDTO.0.District`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.AddressDTO?.[0]?.District && (
                <p className="mt-1 text-sm text-red-600">{errors.AddressDTO[0].District.message}</p>
              )}
            </div>
            
            {/* Municipality Field */}
            <div>
              <label htmlFor="municipality" className="block text-sm font-medium text-gray-700 mb-1">
                Municipality <span className="text-red-500">*</span>
              </label>
              <input
                id="Municipality"
                {...register(`AddressDTO.0.Municipality`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.AddressDTO?.[0]?.Municipality && (
                <p className="mt-1 text-sm text-red-600">{errors.AddressDTO[0].Municipality.message}</p>
              )}
            </div>
            
            {/* Ward Number Field */}
            <div>
              <label htmlFor="wardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Ward Number <span className="text-red-500">*</span>
              </label>
              <input
                id="WardNumber"
                {...register(`AddressDTO.0.WardNumber`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.AddressDTO?.[0]?.WardNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.AddressDTO[0].WardNumber.message}</p>
              )}
            </div>
            
            {/* Tole/Street Field */}
            <div>
              <label htmlFor="toleStreet" className="block text-sm font-medium text-gray-700 mb-1">
                Tole/Street <span className="text-red-500">*</span>
              </label>
              <input
                id="ToleStreet"
                {...register(`AddressDTO.0.ToleStreet`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.AddressDTO?.[0]?.ToleStreet && (
                <p className="mt-1 text-sm text-red-600">{errors.AddressDTO[0].ToleStreet.message}</p>
              )}
            </div>
            
            {/* House Number Field */}
            <div>
              <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-700 mb-1">
                House Number
              </label>
              <input
                id="HouseNumber"
                {...register(`AddressDTO.0.HouseNumber`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.AddressDTO?.[0]?.HouseNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.AddressDTO[0].HouseNumber.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Temporary Address Fields - only show if not same as permanent */}
      {!isPermanentOnly && fields.length > 1 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Temporary Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Temporary Province Field */}
            <div>
              <label htmlFor="TemporaryProvince" className="block text-sm font-medium text-gray-700 mb-1">
                Province <span className="text-red-500">*</span>
              </label>
              <select
                id="TemporaryProvince"
                {...register(`AddressDTO.1.Province`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Province</option>
                <option value="Province 1">Province 1</option>
                <option value="Madhesh Province">Madhesh Province</option>
                <option value="Bagmati Province">Bagmati Province</option>
                <option value="Gandaki Province">Gandaki Province</option>
                <option value="Lumbini Province">Lumbini Province</option>
                <option value="Karnali Province">Karnali Province</option>
                <option value="Sudurpaschim Province">Sudurpaschim Province</option>
              </select>
              {errors.AddressDTO?.[1]?.Province && (
                <p className="mt-1 text-sm text-red-600">{errors.AddressDTO[1].Province.message}</p>
              )}
            </div>
            
            {/* Temporary District Field */}
            <div>
              <label htmlFor="tempDistrict" className="block text-sm font-medium text-gray-700 mb-1">
                District <span className="text-red-500">*</span>
              </label>
              <input
                id="tempDistrict"
                {...register(`AddressDTO.1.District`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.AddressDTO?.[1]?.District && (
                <p className="mt-1 text-sm text-red-600">{errors.AddressDTO[1].District.message}</p>
              )}
            </div>
            
            {/* Temporary Municipality Field */}
            <div>
              <label htmlFor="tempMunicipality" className="block text-sm font-medium text-gray-700 mb-1">
                Municipality <span className="text-red-500">*</span>
              </label>
              <input
                id="tempMunicipality"
                {...register(`AddressDTO.1.Municipality`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.AddressDTO?.[1]?.Municipality && (
                <p className="mt-1 text-sm text-red-600">{errors.AddressDTO[1].Municipality.message}</p>
              )}
            </div>
            
            {/* Temporary Ward Number Field */}
            <div>
              <label htmlFor="tempWardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Ward Number <span className="text-red-500">*</span>
              </label>
              <input
                id="tempWardNumber"
                {...register(`AddressDTO.1.WardNumber`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.AddressDTO?.[1]?.WardNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.AddressDTO[1].WardNumber.message}</p>
              )}
            </div>
            
            {/* Temporary Tole/Street Field */}
            <div>
              <label htmlFor="tempToleStreet" className="block text-sm font-medium text-gray-700 mb-1">
                Tole/Street <span className="text-red-500">*</span>
              </label>
              <input
                id="tempToleStreet"
                {...register(`AddressDTO.1.ToleStreet`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.AddressDTO?.[1]?.ToleStreet && (
                <p className="mt-1 text-sm text-red-600">{errors.AddressDTO[1].ToleStreet.message}</p>
              )}
            </div>
            
            {/* Temporary House Number Field */}
            <div>
              <label htmlFor="tempHouseNumber" className="block text-sm font-medium text-gray-700 mb-1">
                House Number
              </label>
              <input
                id="tempHouseNumber"
                {...register(`AddressDTO.1.HouseNumber`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.AddressDTO?.[1]?.HouseNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.AddressDTO[1].HouseNumber.message}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}