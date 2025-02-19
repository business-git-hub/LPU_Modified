import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { postBlog } from '../../stores/actions/blogActions';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fetchBlog } from '../../stores/actions/blogActions';
import useGetAllBlogs from './useGetAllBlogs';
import { showErrorMessage, showSuccessMessage } from "../../components/Toast/ToastContainer";
export default function useCreateBlog() {
  const dispatch = useDispatch();
  const { queryParams } = useGetAllBlogs();
  // State for image file and preview
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [createBlogLoding, setCreateBlogLoding] = useState(false);
  const { user, isLoading, error } = useSelector((state) => state.auth);

  // React Hook Form initialization
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: "onBlur",
    defaultValues: {
      title: "",
      category: "",
      content: "",
      author: user.name, // Could be dynamically set
      university: "",
      metaDescription: "",
      metaKeywords: [],// Assuming metaKeywords is an array
      images: imageFile,
    }
  });


  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/png', 'image/jpeg', 'image/gif'];
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (!validTypes.includes(file.type)) {
        setErrorMessage("Invalid file type. Only PNG, JPG, and GIF are allowed.");
        setImagePreview(""); // Clear image preview
        return;
      }

      if (file.size > maxSize) {
        setErrorMessage("File size exceeds 10MB.");
        setImagePreview(""); // Clear image preview
        return;
      }
      {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(file);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  // Handle form submission
  const onSubmit = async (data) => {
    setCreateBlogLoding(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("content", data.content);
    formData.append("author", user.name); // Replace with dynamic author
    formData.append("university", data.university);
    formData.append("metaDescription", data.metaDescription);
    // Convert metaKeywords string into an array, trimming spaces and removing empty entries
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    const metaKeywordsArray = data.metaKeywords
      .split(',')
      .map(keyword => keyword.trim()) // Trim spaces from each keyword
      .filter(keyword => keyword !== ""); // Filter out empty strings

    // If there are valid meta keywords, append to the formData
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    if (metaKeywordsArray.length > 0) {
      formData.append("metaKeywords", JSON.stringify(metaKeywordsArray)); // Send as a JSON string (array format)
    } else {
      setErrorMessage("Please enter valid keywords.");
      return;
    }
    if (imageFile) {
      formData.append("images", imageFile); // ✅ This should match `req.files.images` in your backend
    } else {
      setErrorMessage("Image is required.");
      return;
    }
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    try {
      await dispatch(postBlog({ formData })).unwrap();
      {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
      await dispatch(fetchBlog(queryParams));
      showSuccessMessage("Blog post created successfully.");
      setSuccessMessage("Blog post created successfully.");
      setCreateBlogLoding(false); // Reset loading state after successful submission
      reset(); // Reset the form after successful submission
    } catch (error) {
      setErrorMessage(error.message || "An error occurred while creating the blog post.");
      setErrorMessage(error.message || "An error occurred while creating the blog post.");
      setCreateBlogLoding(false); // Reset loading state after error occurred
    }
  };
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  return {
    handleImageChange,
    register,
    isLoading,
    handleSubmit,
    errorMessage,
    successMessage,
    onSubmit,
    imagePreview,
    createBlogLoding,
    errors
  };
}
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ } 