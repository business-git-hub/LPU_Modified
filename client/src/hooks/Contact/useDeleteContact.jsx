import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts, deleteContact } from "../../stores/actions/contactActions";
import useGetAllContacts from "./useGetAllContacts";
import { toast } from 'react-toastify';
import { showErrorMessage, showSuccessMessage } from "../../components/Toast/ToastContainer";
export default function useDeleteContact() {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const { queryParams = {} } = useGetAllContacts() || {}; // Avoid proxy revocation
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const deleteContactId = async (contactId) => {
    setIsDeleting(true);
    setError(null);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    try {
      // Ensure delete action is safe
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      const resultAction = await dispatch(deleteContact(contactId));

      if (deleteContact.fulfilled.match(resultAction)) {
        showSuccessMessage("Deleted successfully")
        await dispatch(fetchContacts({ ...queryParams })); // Clone queryParams
      } else {
        showErrorMessage(resultAction.payload)
        // throw new Error(resultAction.error.message || "Failed to delete contact");
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      }
    } catch (err) {
      // console.error("Error deleting contact:", err);
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      setError(err.message || "Failed to delete the contact");
    } finally {
      setIsDeleting(false);
    }
  };
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return {
    deleteContactId,
    isDeleting,
    error,
  };
}
