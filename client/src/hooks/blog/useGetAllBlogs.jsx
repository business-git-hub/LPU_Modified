import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from '../../stores/actions/blogActions';

export default function useGetAllBlogs() {
  const { isBlogLoading, loading, blogs, error } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  // Pagination state
      {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const queryParams = {
    page,
    limit,
    search: debouncedSearch.trim(), // Ensure API is hit even on empty search
  };
      {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Fetch blogs on page or search change
  useEffect(() => {
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    dispatch(fetchBlog(queryParams));

  }, [dispatch, page, limit, debouncedSearch]);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Handler for page changes
  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Handler for search
  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    setPage(1);
  };
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return {
    queryParams,
    blogs: blogs?.posts || [],
    loading,
    isBlogLoading,
    error,
    pagination: blogs?.pagination || {},
    page,
    handlePageChange,
    handleSearch,
    search,
  };
}
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 