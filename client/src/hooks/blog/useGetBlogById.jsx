import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogID } from '../../stores/actions/blogActions';

export default function useGetBlogById(blogId) {
  const dispatch = useDispatch();
  const { isBlogFetchingID, blogError, blog } = useSelector((state) => state.blog);
  useEffect(() => {
    // console.log("Received blogId:", blogId);
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    if (!blogId) {
      // console.warn("Invalid blogId, skipping API call");
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      return;
    }
    dispatch(fetchBlogID(blogId));
  }, [blogId, dispatch]);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Function to fetch Blog by ID
  const getBlogById = async (blogId) => {
    try {
      if (!blog || blog._id !== blogId) { // Check if the university data is already present and matches
        await dispatch(fetchBlogID(blogId)).unwrap(); // Dispatch action to fetch university by ID
      }
    } catch (err) {
      // setError(err.message || universityError || 'Failed to fetch university');
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    }
  };

  // Automatically fetch university data if the university ID changes
      {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  useEffect(() => {
    if (blogId) {
      if (!blog || blog._id !== blogId) { // Only fetch if university data is not present or doesn't match ID
        getBlogById(blogId);
      }
    }
  }, [blogId, dispatch]); // Use university._id to compare and prevent unnecessary rerenders
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return { blog, isBlogFetchingID, getBlogById, blogError };
}
