
import { ArrowRight, School, ChevronLeft, ChevronRight, MapPin, Users, BookOpen, Calendar } from 'lucide-react';
import UniversityCardSkeleton from '../skeleton/UniversityCardSkeleton';
import { Link } from 'react-router-dom';
import useGetAllUniversities from '../../hooks/University/usegetAllUniversities';
export default function UniversityCollaborationsSection() {
    const {
        universities,
        isUniversityLoading,
        error,
        pagination,
        page,
        handlePageChange,
        handleSearch,
        search
    } = useGetAllUniversities();
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    return (
        <div className=" py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center animate-fade-in-up">Universities Collaboration</h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    Partnering with leading Universities worldwide to foster innovation, research, and cultural exchange.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Show skeletons while loading */}
                        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
                    {isUniversityLoading && (
                        <>
                            {[...Array(4)].map((_, index) => (
                                <UniversityCardSkeleton key={index} />
                            ))}
                        </>
                    )}

                    {/* Show actual content when not loading */}
                        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
                    {!isUniversityLoading && universities?.slice(0, 4).map((university, index) => (
                        <div
                            key={university._id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            style={{
                                opacity: 0,
                                animation: 'fadeInUp 0.6s ease-out forwards',
                                animationDelay: `${index * 200}ms`
                            }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute top-2 right-2 z-10">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                        {university.identity.type}
                                    </span>
                                </div>
                                <img
                                    src={university.media.images[0]?.url || 'default-university-image.jpg'}
                                    alt={university.identity.name}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6">
                                    <div className="text-white">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <School className="w-6 h-6" />
                                            <h3 className="text-xl font-semibold">{university.identity.name}</h3>
                                        </div>
                                        <p className="text-blue-50 text-sm line-clamp-2">{university.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                {/* Location and Founded Info */}
                                    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        <span className="text-sm">
                                            {university.location.city}, {university.location.country}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        <span className="text-sm">Founded {university.identity.founded}</span>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div className="text-center p-2 bg-blue-50 rounded-lg">
                                        <Users className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                                        <p className="text-xs text-gray-600">Students</p>
                                        <p className="text-sm font-semibold text-blue-900">
                                            {university.sizeAndProfile.studentEnrollment.min}+
                                        </p>
                                    </div>
                                    <div className="text-center p-2 bg-blue-50 rounded-lg">
                                        <BookOpen className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                                        <p className="text-xs text-gray-600">Programs</p>
                                        <p className="text-sm font-semibold text-blue-900">
                                            {university.sizeAndProfile.programs?.length || 'Multiple'}
                                        </p>
                                    </div>
                                    <div className="text-center p-2 bg-blue-50 rounded-lg">
                                        <Users className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                                        <p className="text-xs text-gray-600">Faculty</p>
                                        <p className="text-sm font-semibold text-blue-900">
                                            {university.sizeAndProfile.academicStaff.min}+
                                        </p>
                                    </div>
                                </div>

                                {/* Rankings and Accreditation */}
                                    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
                                {university.rankings && (
                                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                                        <p className="text-sm font-medium text-gray-700 mb-1">Rankings</p>
                                        <div className="flex flex-wrap gap-2">
                                            {Object.entries(university.rankings).map(([key, value]) => (
                                                <span key={key} className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                                                    {key}: #{value}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Learn More Link */}
                                    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
                                <div className="mt-4 flex justify-end">
                                    <Link
                                        to={`/university/${university._id}`}
                                        className="text-blue-900 font-semibold hover:text-blue-700 flex items-center text-sm"
                                    >
                                        Learn More
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
