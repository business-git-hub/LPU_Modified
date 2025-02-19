import { ArrowRight, School, ChevronLeft, ChevronRight, MapPin, Users, BookOpen, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import useGetAllUniversities from '../../hooks/University/usegetAllUniversities';
import UniversityCardSkeleton from '../skeleton/UniversityCardSkeleton';
import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "../ui/Card";
import SearchBar from '../ui/SearchBar';

export default function UniversitySection() {
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

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Universities</h2>
                {/* Search input */}
                <div className="mb-8">
                    <SearchBar search={search} handleSearch={handleSearch} />
                </div>
                {error && (
                    <Card className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 text-center">
                        <CardContent className="flex flex-col items-center">
                            <AlertCircle className="w-10 h-10 text-gray-500 mb-2" />
                            <p className="text-lg text-red-600 font-medium">Error loading universities:{error}</p>
                            <p className="text-sm text-gray-500">Try adjusting your search or check back later.</p>
                        </CardContent>
                    </Card>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Show skeletons while loading */}
                    {isUniversityLoading && (
                        <>
                            {[...Array(4)].map((_, index) => (
                                <UniversityCardSkeleton key={index} />
                            ))}
                        </>
                    )}

                    {/* Show actual content when not loading */}
                    {!isUniversityLoading && universities?.map((university, index) => (
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

                {/* Show "No universities" message when needed */}
                {!isUniversityLoading && !error && (!universities || universities.length === 0) && (
                    <Card className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 text-center">
                        <CardContent className="flex flex-col items-center">
                            <AlertCircle className="w-10 h-10 text-gray-500 mb-2" />
                            <p className="text-lg text-gray-700 font-medium">No universities available</p>
                            <p className="text-sm text-gray-500">Try adjusting your search or check back later.</p>
                        </CardContent>
                    </Card>

                )}

                {/* Pagination Controls */}

                {!isUniversityLoading && pagination && pagination.totalPages > 1 && (
                    <div className="mt-8 flex justify-center items-center space-x-4">
                        <button
                            onClick={() => handlePageChange(page - 1)}
                            disabled={!pagination.hasPrevPage}
                            className={`p-2 rounded-full ${!pagination.hasPrevPage
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-blue-600 hover:bg-blue-100'
                                }`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="flex space-x-2">
                            {[...Array(pagination.totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-4 py-2 rounded-md ${page === index + 1
                                        ? 'bg-blue-600 text-white'
                                        : 'text-blue-600 hover:bg-blue-100'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => handlePageChange(page + 1)}
                            disabled={!pagination.hasNextPage}
                            className={`p-2 rounded-full ${!pagination.hasNextPage
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-blue-600 hover:bg-blue-100'
                                }`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
