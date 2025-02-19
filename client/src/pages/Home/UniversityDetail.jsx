 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
import { useParams, useNavigate } from 'react-router-dom';
import {
  MapPin, Users, BookOpen, ArrowLeft,
  Globe2, Mail, Phone, Building, DollarSign, Award,
  GraduationCap, Library, Activity,
  CheckCircle, XCircle, Flag,
  Printer
} from 'lucide-react';
import useGetUniversityById from '../../hooks/University/usegetUniversityById';
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export default function UniversityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Pass the id to the hook
  const { university, isLoading, error } = useGetUniversityById(id)

  const renderFacilityStatus = (isAvailable, label) => (
    <div className="flex items-center gap-2 text-sm">
      {isAvailable ?
        <CheckCircle className="w-5 h-5 text-green-500" /> :
        <XCircle className="w-5 h-5 text-red-500" />
      }
      <span className={isAvailable ? "text-green-700" : "text-red-700"}>
        {label}
      </span>
    </div>
  );
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  if (isLoading) return <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  </div>;
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-600">
    Error: {error}
  </div>;
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  if (!university) return <div className="min-h-screen flex items-center justify-center">
    University not found
  </div>;
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src={university.media.images[0]?.url}
          alt={university.identity.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 flex items-center hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Universities
          </button>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              {university.identity.colors.map((color, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ backgroundColor: color, color: color === 'White' ? 'black' : 'white' }}
                >
                  {color}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              {university.identity.name}
              {university.identity.acronym &&
                <span className="text-2xl ml-3">({university.identity.acronym})</span>
              }
            </h1>
            <p className="text-xl text-gray-200 italic ">{university.identity.nativeName}</p>
            <p className="text-lg max-w-3xl mb-4">{university.identity.founded}</p>
            <p className="text-lg max-w-3xl">{university.description}</p>
          </div>
        </div>
      </div>
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Basic Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Building className="w-5 h-5 mr-2 text-blue-600" />
                Contact Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">{university.location.address}</p>
                    <p>{university.location.city}, {university.location.state}</p>
                    <p>{university.location.postalCode}, {university.location.country}</p>
                  </div>
                </div>
                <a
                  href={`tel:${university.location.phone}`}
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-800"
                >
                  <Phone className="w-5 h-5" />
                  {university.location.phone}
                </a>
                <a
                  href={`tel:${university.location.fax}`}
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-800"
                >
                  <Printer className="w-5 h-5" />
                  {university.location.fax}
                </a>
                <a
                  href={university.location.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-800"
                >
                  <Globe2 className="w-5 h-5" />
                  Visit Website
                </a>
                <a
                  href={`mailto:${university.location.email}`}
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-800"
                >
                  <Mail className="w-5 h-5" />
                  {university.location.email}
                </a>
              </div>
            </div>
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
            {/* Key Statistics */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-blue-600" />
                Key Statistics
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">Students</p>
                  <p className="font-semibold">{university.sizeAndProfile.studentEnrollment.min}+</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <GraduationCap className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">Faculty</p>
                  <p className="font-semibold">{university.sizeAndProfile.academicStaff.min}+</p>
                </div>
              </div>
            </div>
            {/* Facilities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Library className="w-5 h-5 mr-2 text-blue-600" />
                Facilities
              </h2>
              <div className="space-y-4">
                {/* facilitiesAndServices */}
                {Object.entries(university.facilitiesAndServices).map(([key, isAvailable], index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    {renderFacilityStatus(isAvailable, key)}
                  </div>
                ))}

              </div>
            </div>
          </div>
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
          {/* Middle Column - Academic Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                Academic Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Control Type</span>
                  <span className="font-medium">{university.sizeAndProfile.controlType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Calendar</span>
                  <span className="font-medium">{university.sizeAndProfile.academicCalendar}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Campus Setting</span>
                  <span className="font-medium">{university.sizeAndProfile.campusSetting}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Religious Affiliation</span>
                  <span className="font-medium">{university.sizeAndProfile.religiousAffiliation}</span>
                </div>
              </div>
            </div>
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
            {/* Admissions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Flag className="w-5 h-5 mr-2 text-blue-600" />
                Admissions
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Admission Rate</span>
                  <span className="font-medium">{university.admissions.admissionRate.min}-{university.admissions.admissionRate.max}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Selection Type</span>
                  <span className="font-medium">{university.admissions.selectionType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Gender Policy</span>
                  <span className="font-medium">{university.admissions.gender}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">International Students</span>
                  <CheckCircle className={`w-5 h-5 ${university.admissions.internationalStudents ? 'text-green-500' : 'text-red-500'}`} />
                </div>
              </div>
            </div>
          </div>
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
          {/* Right Column - Facilities & Tuition */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                Tuition & Fees (Annual)
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Undergraduate</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600">Local</p>
                      <p className="font-semibold text-blue-600">${university.tuitionFees.undergraduate.local.min} - {university.tuitionFees.undergraduate.local.max}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600">International</p>
                      <p className="font-semibold text-blue-600">${university.tuitionFees.undergraduate.international.min} - {university.tuitionFees.undergraduate.international.max}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Graduate</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600">Local</p>
                      <p className="font-semibold text-blue-600">${university.tuitionFees.postgraduate.local.min} - {university.tuitionFees.postgraduate.local.max}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600">International</p>
                      <p className="font-semibold text-blue-600">${university.tuitionFees.postgraduate.international.min} - {university.tuitionFees.postgraduate.international.max}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Accreditation */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                Accreditation
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Institutional</span>
                  <span className="font-medium">{university.accreditations.institutional}</span>
                </div>
                {/* specialized */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Specialized</span>
                  {university.accreditations.specialized.map((specialized, index) => (
                    <span key={index} className="font-medium">{specialized}</span>
                  ))}
                </div>
                {/* firstAccreditationYear */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">First Accreditation Year</span>
                  <span className="font-medium">{university.accreditations.firstAccreditationYear}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
