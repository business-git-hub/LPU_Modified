import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBlog as deleteBlogAction } from '../../stores/actions/blogActions';
import { fetchBlog } from '../../stores/actions/blogActions';
import useGetAllBlogs from './useGetAllBlogs';
import { showErrorMessage, showSuccessMessage } from "../../components/Toast/ToastContainer";
export default function useDeleteBlog() {
  const { queryParams } = useGetAllBlogs();
  const [isDeleting, setIsDeleting] = useState(false); // To track if deletion is in progress
  const [error, setError] = useState(null); // To manage error state during deletion

  const dispatch = useDispatch();

  // Delete blog function
      {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const deleteBlog = async (blogId) => {
    setIsDeleting(true);
    setError(null); // Reset error state before making the request
    try {
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      // Dispatch the delete action and handle the result
      await dispatch(deleteBlogAction(blogId)).unwrap();
      await dispatch(fetchBlog(queryParams));
      showSuccessMessage("Blog deleted successfully");
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      // Redirect to the blog list page after successful deletion
    } catch (err) {
      // Handle errors if the deletion fails
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      setError(err.message || "Failed to delete the blog");
      showErrorMessage(err.message || "Failed to delete the blog");
    } finally {
      setIsDeleting(false); // Reset the deleting state
    }
  };
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return {
    deleteBlog,   // Function to delete blog
    isDeleting,   // Whether the deletion is in progress
    error         // Error message if deletion fails
  };
}
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 