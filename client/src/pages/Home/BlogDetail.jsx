import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Calendar, User, Clock, ArrowLeft, Eye, ThumbsUp } from 'lucide-react';
import { fetchBlogID } from '../../stores/actions/blogActions';
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Get blogs from Redux store
  const { blogs, loading, error } = useSelector((state) => state.blog);
  const blog = blogs?.posts?.find((blog) => blog._id === id);

  useEffect(() => {
    if (id) {
      dispatch(fetchBlogID(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-600">Loading...</div>
      </div>
    );
  }
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-600">Error: {error}</div>
      </div>
    );
  }
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-600">Blog post not found</div>
      </div>
    );
  }
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-[50vh]">
        <img
          src={blog.img}
          alt={blog.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 -mt-32 relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-white hover:text-purple-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blogs
        </button>

        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Category Tag */}
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
            {blog.category}
          </span>
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {blog.title}
          </h1>
          <p className="mb-4">{blog.metaDescription}</p>
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-gray-400" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>{new Date(blog.createdAt).toLocaleTimeString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-gray-400" />
              <span>{blog.views} views</span>
            </div>
            <div className="flex items-center space-x-2">
              <ThumbsUp className="w-4 h-4 text-gray-400" />
              <span>{blog.likes} likes</span>
            </div>
          </div>
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
          <img
            src={blog.img}
            alt={blog.title}
            className="h-full w-full rounded-lg shadow-md"
          />
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
          {/* Content */}
          <div className="prose prose-lg border-t border-gray-200  pt-8 max-w-none mb-8 overflow-hidden break-words">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg lg:text-xl overflow-hidden text-ellipsis">
              {blog.content}
            </p>
          </div>
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 

          {/* Meta Description and Keywords */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              <h3 className="font-semibold mb-2">About this article:</h3>
              <p className="mb-4">{blog.metaDescription}</p>

              <div className="flex flex-wrap gap-2">
                {blog.metaKeywords[0] && JSON.parse(blog.metaKeywords[0]).map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-xs"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
 {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
          {/* Associated University */}
          {blog.university && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold mb-4">Associated University:</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">{blog.university.identity.name}</h4>
                <p className="text-gray-600 mb-4">{blog.university.description}</p>
                <div className="text-sm text-gray-500">
                  <p>Location: {blog.university.location.city}, {blog.university.location.country}</p>
                  <p>Founded: {blog.university.identity.founded}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 