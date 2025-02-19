import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createContact } from '../../stores/actions/contactActions';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { showErrorMessage, showSuccessMessage } from "../../components/Toast/ToastContainer";
export default function useCreateContact() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isContactLoading, contactError } = useSelector((state) => state.contact);
  const [contactMassages, setContactMassages] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      qualification: '',
      message: ''
    }
  });

  // Form submit handler
      {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const onSubmit = async (data) => {
    try {
      const newTab = window.open("", "_blank");
      // Dispatch createContact action and await result
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      await dispatch(createContact(data)).unwrap();
      setContactMassages('Contact created successfully'); // Set success message after successful submission
      showSuccessMessage("Contact created successfully");
      setTimeout(() => {
        setContactMassages(null); // Clear success message after 1 second
        reset(); // Clear form after 1 second
        if (newTab) {
          newTab.location.href = "https://admission.lpu.in/?utm_source=center&utm_medium=smi&agent_id=LPUUYB936";
        }
      }, 800);
      // Reset form after 1 second to avoid duplicate submissions on consecutive page refreshes
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    } catch (err) {
      showErrorMessage(err.message || "Failed to create contact");
      setContactMassages(null); // Clear success message in case of error
      // console.error("Error creating contact:", err);
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isLoading: isContactLoading, // Use the loading state from Redux
    error: contactError,         // Error state from Redux
    reset,
    contactMassages
  };
}
