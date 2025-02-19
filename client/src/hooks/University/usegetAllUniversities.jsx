import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUniversities, fetchUniversityById } from '../../stores/actions/universityActions';

export default function useGetAllUniversities() {
  const { allUniversities, isUniversityLoading, universities, universityError } = useSelector((state) => state.university);
  const dispatch = useDispatch();

  // Pagination & search state
  
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState('');
  const [universityId, setUniversityId] = useState(null);
  const [debouncedSearch, setDebouncedSearch] = useState('');

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search.trim()); // Trimmed search query
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Fetch all universities
  useEffect(() => {
    dispatch(fetchUniversities({ page, limit, search: debouncedSearch }));
  }, [dispatch, page, debouncedSearch]);

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Fetch a single university
  useEffect(() => {
    if (universityId) {
      dispatch(fetchUniversityById(universityId));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [universityId]); // Removed dispatch from dependencies

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Handlers
  const handlePageChange = (newPage) => {
    if (newPage !== page) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    setPage(1); // Reset to first page when searching
  };

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const fetchUniversity = (id) => {
    if (universityId !== id) {
      setUniversityId(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return {
    allUniversities,
    universities: universities?.data || [], // Fallback to empty array
    isUniversityLoading,
    error: universityError,
    pagination: universities?.pagination || {},
    page,
    handlePageChange,
    handleSearch,
    search,
    fetchUniversity,
    university: universities?.data?.find((uni) => uni._id === universityId) || null, // Fallback to null
  };
}

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 