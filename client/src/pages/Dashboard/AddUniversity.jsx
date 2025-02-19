
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
import { useState } from 'react';
import {
  Building2,
  GraduationCap,
  MapPin,
  Users,
  DollarSign,
  Award,
  Building,
  Image,
  Text
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useCreateUniversity from '../../hooks/University/usecreateUniversity';
import { SyncLoader } from 'react-spinners';

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export const AddUniversity = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('identity');
  const { register, isFormData, handleSubmit, setValue, getValues, setFormData, Controller, control, reset, trigger, errors, error, isLoading } = useCreateUniversity(); // Using the custom hook
  const [file, setFile] = useState(null);
  const handleNext = async () => {
    // Trigger validation for the current tab to make sure inputs are valid
    
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    const isValid = await trigger(); // Check if the current tab's form is valid
    if (isValid) {
      // Go to the next tab
      const currentTabIndex = tabs.findIndex(tab => tab.id === activeTab);
      if (currentTabIndex < tabs.length - 1) {
        setActiveTab(tabs[currentTabIndex + 1].id); // Move to the next tab
      }
    }
  };
  
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const handlePrev = () => {
    // Go to the previous tab
    
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    const currentTabIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentTabIndex > 0) {
      setActiveTab(tabs[currentTabIndex - 1].id); // Move to the previous tab
    }
  };
  const handleBack = () => navigate('/admin/university');

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const tabs = [
    { id: 'identity', label: 'Identity', icon: Building2 },
    { id: 'location', label: 'Location', icon: MapPin },
    { id: 'sizeAndProfile', label: 'Size/Profile', icon: Users },
    { id: 'admissions', label: 'Admissions', icon: GraduationCap },
    { id: 'tuitionFees', label: 'Tuition', icon: DollarSign },
    { id: 'accreditations', label: 'Accreditations', icon: Award },
    { id: 'facilities', label: 'Facilities', icon: Building },
    { id: 'media', label: 'Media', icon: Image },
    { id: 'description', label: 'Description', icon: Text },
  ];
  const currentTabIndex = tabs.findIndex(tab => tab.id === activeTab);
  const isLastTab = currentTabIndex === tabs.length - 1;
  const isFirstTab = currentTabIndex === 0;
  // Render methods for each section
  
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const renderIdentityForm = () => (
    <div className="space-y-6">
      {/* University Name */}
      
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div>
        <label className="block text-sm font-medium text-gray-800">University Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
          {...register("identity.name", { required: 'Name is required' })} // Register with validation
        />
        {errors.identity?.name && (
          <span className="text-red-500 text-sm">{errors.identity.name.message}</span> // Display error
        )}
      </div>

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      {/* Native Name */}
      <div>
        <label className="block text-sm font-medium text-gray-800">Native Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
          {...register("identity.nativeName", { required: 'Native Name is required' })}
        />
        {errors.identity?.nativeName && (
          <span className="text-red-500 text-sm">{errors.identity.nativeName.message}</span> // Display error
        )}
      </div>

      {/* Acronym & Founded Year */}
      
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-800">Acronym</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("identity.acronym", { required: 'Acronym is required' })}
          />
          {errors.identity?.acronym && (
            <span className="text-red-500 text-sm">{errors.identity.acronym.message}</span> // Display error
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800">Founded Year</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("identity.founded", {
              valueAsNumber: true,
              required: 'Founded is required',
              min: { value: 1800, message: 'Founded year must be later than 1800' }
            })}
          />
          {errors.identity?.founded && (
            <span className="text-red-500 text-sm">{errors.identity.founded.message}</span>
          )}
        </div>
      </div>

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      {/* Colors */}
      <div>
        <label className="block text-sm font-medium text-gray-800">University Colors</label>
        <div className="flex flex-wrap gap-3 mt-2">
          {isFormData.identity.colors.map((color, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                className="rounded-lg border border-gray-300 shadow-sm p-2 w-24 text-sm"
                placeholder={color || "Enter color"} // Display current color or default text
                onChange={(e) => setValue(index, e.target.value)} // Update color array on input change
                {...register(`identity.colors.${index}`, {
                  required: "Color is required", // Validation
                })}
              />
              {errors.identity?.colors?.[index] && (
                <span className="text-red-500 text-xs">
                  {errors.identity.colors[index]?.message}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const renderLocationForm = () => (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 

      {/* Address */}
      <div>
        <label className="block text-sm font-medium text-gray-800">Address</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
          {...register("location.address", { required: "Address is required" })}
        />
        {errors.location?.address && (
          <span className="text-red-500 text-xs">{errors.location.address.message}</span>
        )}
      </div>
      {/* City & State */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* City Input */}
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        <div>
          <label className="block text-sm font-medium text-gray-800">City</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("location.city", { required: "City is required" })}
          />
          {errors?.location?.city && (
            <span className="text-red-500 text-xs">{errors.location.city.message}</span>
          )}
        </div>
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        {/* State Input */}
        <div>
          <label className="block text-sm font-medium text-gray-800">State</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("location.state", { required: "State is required" })}
          />
          {errors?.location?.state && (
            <span className="text-red-500 text-xs">{errors.location.state.message}</span>
          )}
        </div>
      </div>
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      {/* Postal Code & Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Postal Code Input */}
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        <div>
          <label className="block text-sm font-medium text-gray-800">Postal Code</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("location.postalCode", {
              required: "Postal Code is required",
              pattern: { value: /^[0-9]+$/, message: "Postal Code must be numbers only" }
            })}
          />
          {errors?.location?.postalCode && (
            <span className="text-red-500 text-xs">{errors.location.postalCode.message}</span>
          )}
        </div>
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        {/* Country Input */}
        <div>
          <label className="block text-sm font-medium text-gray-800">Country</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("location.country", { required: "Country is required" })}
          />
          {errors?.location?.country && (
            <span className="text-red-500 text-xs">{errors.location.country.message}</span>
          )}
        </div>
      </div>
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      {/* Phone & Fax */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-800">Phone</label>
          <input
            type="tel"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("location.phone", {
              required: "Phone is required",
              pattern: {
                value: /^\+?\d{10,15}$/,
                message: "Invalid phone number (Must be 10-15 digits, optional +)",
              },
            })}
          />
          {errors.location?.phone && (
            <span className="text-red-500 text-xs">{errors.location.phone.message}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800">Fax</label>
          <input
            type="tel"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("location.fax", {
              required: "Fax is required",
              pattern: {
                value: /^\+?\d{10,15}$/,
                message: "Invalid fax number (Must be 10-15 digits, optional +)",
              },
            })}
          />
          {errors.location?.fax && (
            <span className="text-red-500 text-xs">{errors.location.fax.message}</span>
          )}
        </div>
      </div>

      {/* Website & Email */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-800">Website</label>
          <input
            type="url"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("location.website", {
              required: "Website is required",
              pattern: {
                value: /^https?:\/\/.+\..+/,
                message: "Invalid website URL (Must start with http:// or https://)",
              },
            })}
          />
          {errors.location?.website && (
            <span className="text-red-500 text-xs">{errors.location.website.message}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800">Email</label>
          <input
            type="email"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("location.email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.location?.email && (
            <span className="text-red-500 text-xs">{errors.location.email.message}</span>
          )}
        </div>
      </div>
    </div>
  );


  const renderSizeAndProfileForm = () => (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      {/* Student Enrollment */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-800">Student Enrollment (Min)</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("sizeAndProfile.studentEnrollment.min", { required: "Min enrollment is required" })}
          />
          {errors.sizeAndProfile?.studentEnrollment?.min && (
            <span className="text-red-500 text-xs">{errors.sizeAndProfile.studentEnrollment.min.message}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800">Student Enrollment (Max)</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("sizeAndProfile.studentEnrollment.max", { required: "Max enrollment is required" })}
          />
          {errors.sizeAndProfile?.studentEnrollment?.max && (
            <span className="text-red-500 text-xs">{errors.sizeAndProfile.studentEnrollment.max.message}</span>
          )}
        </div>
      </div>

      {/* Academic Staff */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-800">Academic Staff (Min)</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("sizeAndProfile.academicStaff.min", { required: "Min staff is required" })}
          />
          {errors.sizeAndProfile?.academicStaff?.min && (
            <span className="text-red-500 text-xs">{errors.sizeAndProfile.academicStaff.min.message}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800">Academic Staff (Max)</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("sizeAndProfile.academicStaff.max", { required: "Max staff is required" })}
          />
          {errors.sizeAndProfile?.academicStaff?.max && (
            <span className="text-red-500 text-xs">{errors.sizeAndProfile.academicStaff.max.message}</span>
          )}
        </div>
      </div>

      {/* Control Type & Academic Calendar */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-800">Control Type</label>
          <select
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("sizeAndProfile.controlType", { required: "Control type is required" })}
          >
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
          {errors.sizeAndProfile?.controlType && (
            <span className="text-red-500 text-xs">{errors.sizeAndProfile.controlType.message}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800">Academic Calendar</label>
          <select
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("sizeAndProfile.academicCalendar", { required: "Academic calendar is required" })}
          >
            <option value="Semester">Semester</option>
            <option value="Quarter">Quarter</option>
            <option value="Trimester">Trimester</option>
          </select>
          {errors.sizeAndProfile?.academicCalendar && (
            <span className="text-red-500 text-xs">{errors.sizeAndProfile.academicCalendar.message}</span>
          )}
        </div>
      </div>

      {/* Campus Setting & Religious Affiliation */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-800">Campus Setting</label>
          <select
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("sizeAndProfile.campusSetting", { required: "Campus setting is required" })}
          >
            <option value="Urban">Urban</option>
            <option value="Suburban">Suburban</option>
            <option value="Rural">Rural</option>
          </select>
          {errors.sizeAndProfile?.campusSetting && (
            <span className="text-red-500 text-xs">{errors.sizeAndProfile.campusSetting.message}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800">Religious Affiliation</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("sizeAndProfile.religiousAffiliation", { required: "Religious affiliation is required" })}
          />
          {errors.sizeAndProfile?.religiousAffiliation && (
            <span className="text-red-500 text-xs">{errors.sizeAndProfile.religiousAffiliation.message}</span>
          )}
        </div>
      </div>
    </div>
  );

  const renderAdmissionsForm = () => (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      {/* Gender Selection */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div>
        <label className="block text-sm font-medium text-gray-800">Gender</label>
        <select
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
          {...register("admissions.gender", { required: "Gender selection is required" })}
        >
          <option value="Coed">Coed</option>
          <option value="Men">Male-only</option>
          <option value="Women">Female-only</option>
        </select>
        {errors.admissions?.gender && (
          <span className="text-red-500 text-xs">{errors.admissions.gender.message}</span>
        )}
      </div>

      {/* International Students Checkbox */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div className="flex items-center">
        <input
          type="checkbox"
          className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition"
          {...register("admissions.internationalStudents")}
        />
        <label className="ml-3 block text-sm font-medium text-gray-800">International Students</label>
      </div>

      {/* Selection Type */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div>
        <label className="block text-sm font-medium text-gray-800">Selection Type</label>
        <select
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
          {...register("admissions.selectionType", { required: "Selection type is required" })}
        >
          <option value="Selective">Selective</option>
          <option value="Open">Open</option>
          <option value="Other">Other</option>
        </select>
        {errors.admissions?.selectionType && (
          <span className="text-red-500 text-xs">{errors.admissions.selectionType.message}</span>
        )}
      </div>

      {/* Admission Rate */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-800">Admission Rate Min (%)</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("admissions.admissionRate.min", { required: "Minimum admission rate is required" })}
          />
          {errors.admissions?.admissionRate?.min && (
            <span className="text-red-500 text-xs">{errors.admissions.admissionRate.min.message}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800">Admission Rate Max (%)</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition"
            {...register("admissions.admissionRate.max", { required: "Maximum admission rate is required" })}
          />
          {errors.admissions?.admissionRate?.max && (
            <span className="text-red-500 text-xs">{errors.admissions.admissionRate.max.message}</span>
          )}
        </div>
      </div>
    </div>
  );

  const renderTuitionFeesForm = () => (
    <div className="space-y-6">
      {/* Undergraduate */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Undergraduate</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800">Local Min ($)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 p-2.5"
                {...register("tuitionFees.undergraduate.local.min", { required: "Local Min is required" })}
              />
              {errors.tuitionFees?.undergraduate?.local?.min && (
                <span className="text-red-500 text-xs">{errors.tuitionFees.undergraduate.local.min.message}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">Local Max ($)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 p-2.5"
                {...register("tuitionFees.undergraduate.local.max", { required: "Local Max is required" })}
              />
              {errors.tuitionFees?.undergraduate?.local?.max && (
                <span className="text-red-500 text-xs">{errors.tuitionFees.undergraduate.local.max.message}</span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800">International Min ($)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 p-2.5"
                {...register("tuitionFees.undergraduate.international.min", { required: "International Min is required" })}
              />
              {errors.tuitionFees?.undergraduate?.international?.min && (
                <span className="text-red-500 text-xs">{errors.tuitionFees.undergraduate.international.min.message}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">International Max ($)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 p-2.5"
                {...register("tuitionFees.undergraduate.international.max", { required: "International Max is required" })}
              />
              {errors.tuitionFees?.undergraduate?.international?.max && (
                <span className="text-red-500 text-xs">{errors.tuitionFees.undergraduate.international.max.message}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Postgraduate */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Postgraduate</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800">Local Min ($)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 p-2.5"
                {...register("tuitionFees.postgraduate.local.min", { required: "Postgraduate Local Min is required" })}
              />
              {errors.tuitionFees?.postgraduate?.local?.min && (
                <span className="text-red-500 text-xs">{errors.tuitionFees.postgraduate.local.min.message}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">Local Max ($)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 p-2.5"
                {...register("tuitionFees.postgraduate.local.max", { required: "Postgraduate Local Max is required" })}
              />
              {errors.tuitionFees?.postgraduate?.local?.max && (
                <span className="text-red-500 text-xs">{errors.tuitionFees.postgraduate.local.max.message}</span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800">International Min ($)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 p-2.5"
                {...register("tuitionFees.postgraduate.international.min", { required: "Postgraduate International Min is required" })}
              />
              {errors.tuitionFees?.postgraduate?.international?.min && (
                <span className="text-red-500 text-xs">{errors.tuitionFees.postgraduate.international.min.message}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">International Max ($)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 p-2.5"
                {...register("tuitionFees.postgraduate.international.max", { required: "Postgraduate International Max is required" })}
              />
              {errors.tuitionFees?.postgraduate?.international?.max && (
                <span className="text-red-500 text-xs">{errors.tuitionFees.postgraduate.international.max.message}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAccreditationsForm = () => (
    <div className="space-y-6">
      {/* Institutional Accreditation */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div>
        <label className="block text-sm font-medium text-gray-800">Institutional Accreditation</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 p-3"
          {...register("accreditations.institutional", { required: "Institutional Accreditation is required" })}
        />
        {errors.accreditations?.institutional && (
          <span className="text-red-500 text-xs">{errors.accreditations.institutional.message}</span>
        )}
      </div>

      {/* Specialized Accreditations */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div>
        <label className="block text-sm font-medium text-gray-800">Specialized Accreditations</label>
        <Controller
          control={control}
          name="accreditations.specialized"
          render={({ field }) => (
            <>
              {(field.value || []).map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mt-2">
                  <input
                    type="text"
                    className="flex-1 rounded-md border border-gray-300 bg-white shadow-sm focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 p-3"
                    value={item}
                    onChange={(e) => {
                      const newSpecialized = [...field.value];
                      newSpecialized[index] = e.target.value;
                      field.onChange(newSpecialized);
                    }}
                  />
                  <button
                    type="button"
                    className="mt-2 sm:mt-0 text-indigo-600 p-2 rounded-lg bg-red-100 hover:text-crimson-700 sm:ml-2"
                    onClick={() => {
                      const newSpecialized = field.value.filter((_, i) => i !== index);
                      field.onChange(newSpecialized);
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                type="button"
                className="mt-2 text-sm text-indigo-600 p-3 rounded-lg bg-blue-100 hover:text-crimson-700"
                onClick={() => field.onChange([...field.value || [], ''])}
              >
                Add Accreditation
              </button>
            </>
          )}
        />

        {errors.accreditations?.specialized && (
          <span className="text-red-500 text-xs">{errors.accreditations.specialized.message}</span>
        )}
      </div>

      {/* First Accreditation Year */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div>
        <label className="block text-sm font-medium text-gray-800">First Accreditation Year</label>
        <input
          type="number"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 p-3"
          {...register("accreditations.firstAccreditationYear", { required: "First Accreditation Year is required" })}
        />
        {errors.accreditations?.firstAccreditationYear && (
          <span className="text-red-500 text-xs">{errors.accreditations.firstAccreditationYear.message}</span>
        )}
      </div>
    </div>
  );
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const renderFacilitiesForm = () => (
    <div className="space-y-6">
      {Object.entries(isFormData.facilitiesAndServices).map(([key, value]) => (
        <div key={key} className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-crimson-600 focus:ring-crimson-500 border-gray-300 rounded"
            {...register(`facilitiesAndServices.${key}`)} // Register input with react-hook-form
            defaultChecked={value}  // Use defaultChecked to set the initial checked state
          />
          <label className="ml-2 block text-sm text-gray-700 capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}  {/* Format the key as label text */}
          </label>
        </div>
      ))}
    </div>

  );
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const renderMediaForm = () => (
    <div className="space-y-6">
      {isFormData.media.images.map((image, index) => (
        <div key={index} className="space-y-4 border p-4 rounded-lg bg-white shadow-md">
          <div>
            <label className="block text-sm font-medium text-gray-800">Upload Image</label>
            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 hover:border-indigo-500 transition duration-200">
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*"
                onChange={(e) => {
                  const selectedFile = e.target.files[0];
                  if (selectedFile) {
                    setFormData(prev => ({
                      ...prev,
                      media: {
                        ...prev.media,
                        images: prev.media.images.map((img, idx) =>
                          idx === index ? { ...img, file: selectedFile } : img
                        )
                      }
                    }));
                  }
                }}
              />
              <div className="text-center text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V12m0 0V8m0 4h4m6 8H5a2 2 0 01-2-2V7a2 2 0 012-2h3l2-2h4l2 2h3a2 2 0 012 2v9a2 2 0 01-2 2z" />
                </svg>
                <p className="text-sm">Drag & drop an image, or <span className="text-indigo-600 font-semibold">browse</span></p>
              </div>
            </div>
            {image.file instanceof File && (
              <div className="mt-2">
                <img
                  src={URL.createObjectURL(image.file)}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-md shadow-md"
                />
              </div>
            )}
          </div>
          <button
            type="button"
            className="w-full text-white bg-red-500 hover:bg-red-600 p-2 rounded-lg text-sm font-semibold transition duration-200 ease-in-out"
            onClick={() => {
              setFormData(prev => ({
                ...prev,
                media: { ...prev.media, images: prev.media.images.filter((_, i) => i !== index) }
              }));
            }}
          >
            Remove Image
          </button>
        </div>
      ))}
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <button
        type="button"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg text-sm shadow-md transition duration-200 ease-in-out"
        onClick={() => setFormData(prev => ({
          ...prev,
          media: {
            ...prev.media,
            images: [...prev.media.images, { file: null }] // Use `null` instead of an empty string
          }
        }))}
      >
        + Add Image
      </button>
    </div>
  );
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const renderDescriptionForm = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
        <label className="block text-lg font-semibold text-gray-900 mb-3">
          University Description
        </label>
        <textarea
          {...register('description', { required: 'Description is required' })} // Register the textarea and set validation
          className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 h-44 p-4 text-gray-800 text-base leading-relaxed resize-none transition duration-200 ease-in-out"
          placeholder="Write a brief and engaging description about the university..."
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-2">{errors.description.message}</p>
        )}
      </div>
    </div>
  );
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'identity': return renderIdentityForm();
      case 'location': return renderLocationForm();
      case 'sizeAndProfile': return renderSizeAndProfileForm();
      case 'admissions': return renderAdmissionsForm();
      case 'tuitionFees': return renderTuitionFeesForm();
      case 'accreditations': return renderAccreditationsForm();
      case 'facilities': return renderFacilitiesForm();
      case 'media': return renderMediaForm();
      case 'description': return renderDescriptionForm();
      default: return null;
    }
  };
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return (
    <div className="max-w-7xl mx-auto bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Create University</h1>
        <button
          onClick={handleBack}
          className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 transition-all"
        >
          Back
        </button>
      </div>
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 space-y-6">
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto pb-2 mb-6 border-b border-gray-300 space-x-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center whitespace-nowrap px-6 py-2 text-sm font-medium rounded-t-lg transition-all duration-300 ease-in-out
                  ${activeTab === tab.id
                    ? 'text-indigo-600 bg-indigo-100 border-b-4 border-indigo-600 shadow-lg'
                    : 'text-gray-600 hover:text-indigo-700 hover:bg-gray-200'
                  }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        {/* Active Tab Content */}
        <div className="min-h-[500px] bg-gray-50 p-6 rounded-lg shadow-inner">
          {renderActiveTab()}
        </div>
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        {/* Form Actions */}
        <div className="mt-6 flex flex-wrap justify-end gap-4 sm:gap-6">
          <button
            type="button"
            className="px-6 py-2 w-full sm:w-auto text-sm font-medium text-gray-700 bg-gray-300 border border-gray-400 rounded-md shadow-sm hover:bg-gray-400 transition-all"
          >
            Cancel
          </button>
          {!isFirstTab && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-6 py-2 w-full sm:w-auto text-sm font-medium text-white bg-gray-600 rounded-md shadow-md hover:bg-gray-700 transition-all"
            >
              Previous
            </button>
          )}
          {isLastTab ? (
            <button
              type="submit"
              className="px-6 py-2 w-full sm:w-auto text-sm font-medium text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 transition-all"
            >
              Save University
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2 w-full sm:w-auto text-sm font-medium text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 transition-all"
            >
              Next
            </button>
          )}
        </div>
      </form>
      {isLoading && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <SyncLoader color="#3B82F6" size={10} />
        </div>
      )}
    </div>
  );
};