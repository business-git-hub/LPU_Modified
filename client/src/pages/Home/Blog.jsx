import { Calendar, User, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import useGetAllBlogs from '../../hooks/blog/useGetAllBlogs';
import { Link } from 'react-router-dom';
import BlogFilter from '../../components/ui/BlogFilter';
import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "../../components/ui/Card";
import BlogCardSkeleton from '../../components/skeleton/BlogCardSkeleton';
export default function Blog() {
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 

  const {
    blogs,
    loading,
    error,
    pagination,
    page,
    categories,
    handlePageChange,
    handleSearch,
    handleCategoryFilter,
    search,
    category,
    isBlogLoading
  } = useGetAllBlogs();

  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-green-600 to-teal-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full">
            <div className="absolute inset-0 bg-black/30" />
            <img
              src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
              alt="Blog"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="animate-fade-in-up px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Blog</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Stay updated with the latest news and insights
            </p>
          </div>
        </div>
      </div>
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      {/* Blog Posts */}
      <div className="py-20 px-4">
        {/* Search and Category Filter */}
        <BlogFilter blogs={blogs} search={search} handleSearch={handleSearch} />

        {error && (
          <Card className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 text-center">
            <CardContent className="flex flex-col items-center">
              <AlertCircle className="w-10 h-10 text-gray-500 mb-2" />
              <p className="text-lg text-red-600 font-medium">Error loading blogs: {error}</p>
              <p className="text-sm text-gray-500">Try adjusting your search or check back later.</p>
            </CardContent>
          </Card>
        )}
        {/* Show "No universities" message when needed */}
         {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        {!isBlogLoading && !error && (!blogs || blogs.length === 0) && (
          <Card className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 text-center">
            <CardContent className="flex flex-col items-center">
              <AlertCircle className="w-10 h-10 text-gray-500 mb-2" />
              <p className="text-lg text-gray-700 font-medium">No blogs available</p>
              <p className="text-sm text-gray-500">Try adjusting your search or check back later.</p>
            </CardContent>
          </Card>
        )}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Show skeletons while loading */}
            {isBlogLoading && (
              <>
                {[...Array(10)].map((_, index) => (
                  <BlogCardSkeleton key={index} />
                ))}
              </>
            )}
          </div>
        </div>
        {!isBlogLoading && !error && blogs.length > 0 && (
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {blogs.map((post, index) => (
                <article
                  key={post._id || index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-48">
                    <span className="absolute left-2 top-2 rounded-lg bg-indigo-300 p-1 text-base font-bold  text-gray-700 ">{post.category}</span>
                    <img
                      src={post.img}

                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-purple-800 ">{post.category}</p>
                    <h2 className="text-xl font-bold pb-1">{post.title}</h2>
                    <p className="text-gray-600 pb-1">{post.metaDescription}</p>

                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.createdAt).toISOString().split('T')[0]}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(post.createdAt).toISOString().split('T')[1].split('.')[0]}
                      </div>
                    </div>

                    <div className="flex items-center justify-start pt-1">
                      <Link
                        to={`/blog/${post._id}`} // Navigate to the blog details page
                        className="text-purple-600 hover:text-purple-700 font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
            {/* Pagination Controls */}
            <div className="mt-8 flex justify-center items-center space-x-4">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={!pagination.hasPrevPage}
                className={`p-2 rounded-full ${!pagination.hasPrevPage
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-purple-600 hover:bg-purple-100'
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
                      ? 'bg-purple-600 text-white'
                      : 'text-purple-600 hover:bg-purple-100'
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
                  : 'text-purple-600 hover:bg-purple-100'
                  }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}