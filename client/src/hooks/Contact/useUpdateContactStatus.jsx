import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateContactStatus, fetchContacts } from "../../stores/actions/contactActions";
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
import useGetAllContacts from "./useGetAllContacts";
import { showErrorMessage, showSuccessMessage } from "../../components/Toast/ToastContainer";
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export default function useUpdateContactStatus() {
  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector((state) => state.contact);
  const { queryParams } = useGetAllContacts();
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const fetchContactsByStatus = async (status, contactId) => {
    if (!contactId) {
      showErrorMessage("No contact ID provided!");
      return;
    }
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    try {
      await dispatch(updateContactStatus({ status, contactId })).unwrap();
      showSuccessMessage("Contact status updated successfully!");
      await dispatch(fetchContacts(queryParams));
    } catch (err) {
      showErrorMessage(err.message || "Failed to update contact status.");
    }
  };
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return { contacts, loading, error, fetchContactsByStatus };
}
