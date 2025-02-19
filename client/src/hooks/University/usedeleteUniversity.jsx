import { useDispatch, useSelector } from 'react-redux';
import { deleteUniversity } from '../../stores/actions/universityActions';
import { useState } from 'react';
import { fetchUniversities } from '../../stores/actions/universityActions';
import useGetAllUniversities from './usegetAllUniversities';
import { showErrorMessage, showSuccessMessage } from "../../components/Toast/ToastContainer";
export default function useDeleteUniversity() {
    const dispatch = useDispatch();
    const { page, limit, search } = useGetAllUniversities()
    const { isUniversityLoading, universityError } = useSelector((state) => state.university); // Redux state
    const [error, setError] = useState(null);
    const [isLodingDleting, setIsLoadingDeleting] = useState(false);

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    // Function to handle the deletion of a university by ID
    
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    const handleDeleteUniversity = async (id) => {
        setIsLoadingDeleting(true);
        try {
            
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
            setError(null); // Reset error state before dispatching
            await dispatch(deleteUniversity(id)).unwrap(); // Dispatch deleteUniversity action
            showSuccessMessage('University deleted successfully!'); // Show success message
            await dispatch(fetchUniversities({ page, limit, search }));
            setIsLoadingDeleting(false);
        } catch (err) {
            setIsLoadingDeleting(false); // Set loading state to false after failed deletion
            showErrorMessage('Failed to delete university'); // Show error message
            setError(err.message || 'Failed to delete university');
        }
    };

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    return {
        handleDeleteUniversity,
        isLodingDleting: isLodingDleting, // Is the university deletion in progress
        error: error || universityError, // Combine local error with Redux error
    };
}
