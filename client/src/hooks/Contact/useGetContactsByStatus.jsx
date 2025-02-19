import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactsByStatus } from "../../stores/actions/contactActions";
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export default function useGetContactsByStatus(initialStatus = "new") {
  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector((state) => state.contact);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const fetchContactsByStatus = (status, contactId) => {
    return dispatch(getContactsByStatus({ status, contactId })).unwrap();
  };
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  // Fetch contacts by status when the component mounts with the initial status
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  useEffect(() => {
    fetchContactsByStatus(initialStatus);
  }, [initialStatus, dispatch]);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return { contacts, loading, error, fetchContactsByStatus };
}
