import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SyncLoader } from 'react-spinners';
import { Calendar, User, Clock, ChevronLeft, Pencil, Trash2, ChevronRight } from 'lucide-react';
import { useSelector } from "react-redux";
import useGetAllBlogs from '../../hooks/blog/useGetAllBlogs';
import Modal from '../../components/model/Modal'
import CreateBlog from "./CreateBlog";
import useDeleteBlog from "../../hooks/blog/useDeleteBlog";
import EditBlog from "./EditBlog";
import BlogFilter from '../../components/ui/BlogFilter';
const BlogList = () => {
  const { action } = useParams();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [onConfirmAction, setOnConfirmAction] = useState(null);
  const { deleteBlog, isDeleting } = useDeleteBlog();
  const [selectedBlog, setSelectedBlog] = useState(null);
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const {
    blogs,
    loading,
    error,
    search,
    pagination,
    page,
    category,
    handlePageChange,
    handleSearch,
    handleCategoryFilter
  } = useGetAllBlogs();
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const openModal = (content, title, onConfirm) => {
    setModalContent(content);
    setModalTitle(title);
    setOnConfirmAction(() => onConfirm);
    setModalVisible(true);
  };
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const closeModal = () => {
    setModalVisible(false);
    setOnConfirmAction(null);
  };
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const handleDelete = async (blogId) => {
    try {
      await deleteBlog(blogId);
    } catch (error) {
      console.error(`Failed to ${blogId} user:`, error);
    } finally {
      closeModal();
    }
  };
  if (action === "edit") {
    return <EditBlog />;
  }
  if (action === "create") {
    return <CreateBlog />;
  }
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 

  if (!blogs) return <div className="min-h-screen flex items-center justify-center">
    Blogs not found
  </div>;
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  if (action === undefined || action === null) {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Blog Posts</h1>
          <Link to="create"
            className="px-4 py-2 bg-[#4056B6] text-white rounded-md hover:bg-[#5067c7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4056B6]"
          >
            Create New Blog
          </Link>
        </div>
        <BlogFilter blogs={blogs} search={search} handleSearch={handleSearch} category={category} handleCategoryFilter={handleCategoryFilter} />
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
              <tbody className="bg-white divide-y divide-gray-200">
                {blogs.map((blog, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{blog.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{blog.author}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{blog.createdAt}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-3">
                        <Link to={`edit/${blog._id}`} className="text-blue-600 hover:text-blue-900">
                          <Pencil size={18} />
                        </Link>
                        <Link className="text-red-600 hover:text-red-900"
                          onClick={() =>
                            openModal(
                              `Are you sure you want to Delete ${blog.title}?`,
                              'Delete Confirmation',
                              () => handleDelete(blog._id)
                            )
                          }
                        >
                          <Trash2 size={18} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
          <div className="flex space-x-2">
            {[...Array(pagination.totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-2 py-1 rounded-md ${page === index + 1
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-600 hover:bg-purple-100'
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
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

        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
        <Modal
          show={modalVisible}
          onClose={closeModal}
          title={modalTitle}
          onConfirm={onConfirmAction}>
          {modalContent}
        </Modal>
        {loading || isDeleting && (
          <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <SyncLoader color="#3B82F6" size={10} />
          </div>
        )}
      </div>
    );
  };
}
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export default BlogList;

