import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUniversityById } from '../../stores/actions/universityActions';

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export default function useGetUniversityById(id) {
    const dispatch = useDispatch();
    const { university, isUniversityLoading, universityError } = useSelector((state) => state.university);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // Function to fetch Blog by ID
    
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    const getUniversityById = async (universityId) => {
        try {
            if (!university || university._id !== universityId) { // Check if the university data is already present and matches
                await dispatch(fetchUniversityById(universityId)).unwrap(); // Dispatch action to fetch university by ID
            }
        } catch (err) {
            // setError(err.message || universityError || 'Failed to fetch university');
        }
    };

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    useEffect(() => {
        let isMounted = true; // Flag to prevent state updates on unmounted component

        const fetchUniversity = async () => {
            if (!id || (university && university._id === id)) return; // Prevent unnecessary fetch

            setIsLoading(true);
            try {
                setError(null);
                await dispatch(fetchUniversityById(id)).unwrap();
                setIsLoading(false); // Set loading state to false after successful fetch
            } catch (err) {
                if (isMounted) setError(err.message || universityError || 'Failed to fetch university');
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        fetchUniversity();

        return () => {
            isMounted = false; // Cleanup function to prevent memory leaks
        };
    }, [id, dispatch]); // Remove university?._id from dependencies to prevent re-fetching
    return {
        getUniversityById,
        university,
        isLoading: isLoading || isUniversityLoading,
        error: error || universityError,
    };
}

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 