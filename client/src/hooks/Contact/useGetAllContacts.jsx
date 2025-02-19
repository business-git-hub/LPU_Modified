import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../stores/actions/contactActions';

export default function useGetAllContacts() {
  const { loading, contacts, error } = useSelector((state) => state.contact);
  const dispatch = useDispatch();
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Pagination and filtering state
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // Number of items per page
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState('');
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search.trim());
    }, 500);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    return () => clearTimeout(handler);
  }, [search]);
  const queryParams = {
    page,
    limit,
    search: debouncedSearch.trim(),
    ...(status && { status })
  };
  // Fetch contacts function
  const fetchContactsData = useCallback(async (queryParams) => {
    try {
      setIsSearching(true);
      await dispatch(fetchContacts(queryParams)).unwrap();
    } catch (error) {
      // console.error('Error fetching contacts:', error);
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    } finally {
      setIsSearching(false);
    }
  }, [dispatch]);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  useEffect(() => {
    fetchContactsData(queryParams);
  }, [fetchContactsData, page, limit, debouncedSearch, status]);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Handle page change
  const handlePageChange = useCallback((newPage) => {
    if (typeof newPage !== 'number' || newPage < 1) return;
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Handle search input change
  const handleSearch = useCallback((searchTerm) => {
    if (typeof searchTerm !== 'string') return;
    setSearch(searchTerm);
    setPage(1);
  }, []);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Handle status filter change
  const handleStatusFilter = useCallback((newStatus) => {
    if (typeof newStatus !== 'string') return;
    setStatus(newStatus);
    setPage(1);
  }, []);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return {
    contacts,
    loading: loading || isSearching,
    error,
    pagination: contacts?.pagination,
    page,
    status,
    queryParams,
    handlePageChange,
    handleSearch,
    handleStatusFilter,
    search
  };
}