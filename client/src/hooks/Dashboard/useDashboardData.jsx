import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUniversities } from "../../stores/actions/universityActions";
import { fetchBlog } from "../../stores/actions/blogActions";
import { fetchContacts } from "../../stores/actions/contactActions";
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export const useDashboardData = () => {
  const dispatch = useDispatch();
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Get state data
  const { loading: uniLoading, allUniversities, error: uniError } = useSelector((state) => state.university);
  const { loading: blogLoading,allBlogs, blogs, error: blogError } = useSelector((state) => state.blog);
  const { loading: contactLoading, allContacts, error: contactError } = useSelector((state) => state.contact);
  // If any are still loading
  const isLoading = uniLoading || blogLoading || contactLoading;
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  useEffect(() => {
    dispatch(fetchUniversities());
    dispatch(fetchBlog());
    dispatch(fetchContacts());
  }, [dispatch]);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return {
    allUniversities,
    blogs,
    allBlogs,
    allContacts,
    isLoading,
    uniError,
    blogError,
    contactError,
  };
};
