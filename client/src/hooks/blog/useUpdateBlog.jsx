import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
import { useForm } from "react-hook-form";
import { updateBlog } from "../../stores/actions/blogActions";
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
import useGetBlogById from "../../hooks/blog/useGetBlogById";
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
import { fetchBlog } from '../../stores/actions/blogActions';
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
import useGetAllBlogs from './useGetAllBlogs';
import { showErrorMessage, showSuccessMessage } from "../../components/Toast/ToastContainer";
export default function useUpdateBlog(blogId) {
  const dispatch = useDispatch();
  const { queryParams } = useGetAllBlogs();
  const { blog, getBlogById } = useGetBlogById(blogId);
  const { isBlogUpdating, blogError } = useSelector((state) => state.blog);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  useEffect(() => {
    getBlogById(blogId);
  }, [blogId]);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  useEffect(() => {
    if (blog) {
      setImagePreview(blog.img || "");
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      // Parse metaKeywords
      let metaKeywordsStrings = "";
      if (Array.isArray(blog.metaKeywords)) {
        if (Array.isArray(blog.metaKeywords[0])) {
          metaKeywordsStrings = blog.metaKeywords[0].join(", ");
        } else if (typeof blog.metaKeywords[0] === "string") {
          try {
            const parsed = JSON.parse(blog.metaKeywords[0]);
            metaKeywordsStrings = Array.isArray(parsed) ? parsed.join(", ") : "";
          } catch {
            metaKeywordsStrings = blog.metaKeywords[0];
          }
        }
      }
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      reset({
        title: blog.title || "",
        category: blog.category || "",
        content: blog.content || "",
        author: blog.author || "John Doe",
        university: blog.university?._id || "",
        metaDescription: blog.metaDescription || "",
        metaKeywords: metaKeywordsStrings,
      });
    }
  }, [blog, reset]);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    const validTypes = ["image/png", "image/jpeg", "image/gif"];
    const maxSize = 10 * 1024 * 1024; // 10MB
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    if (!validTypes.includes(file.type)) {
      showErrorMessage("Invalid file type. Only PNG, JPG, and GIF are allowed.");
      setErrorMessage("Invalid file type. Only PNG, JPG, and GIF are allowed.");
      return;
    }
    if (file.size > maxSize) {
      setErrorMessage("File size exceeds 10MB.");
      return;
    }
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  const onSubmit = async (data) => {
    if (!blog?._id) {
      setErrorMessage("Invalid blog ID.");
      showErrorMessage("Invalid blog ID.");
      return;
    }    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("content", data.content);
    formData.append("author", data.author || "John Doe");
    formData.append("university", data.university);
    formData.append("metaDescription", data.metaDescription);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    // Convert metaKeywords string into an array
    const metaKeywordsArray = data.metaKeywords
      .split(",")
      .map((keyword) => keyword.trim())
      .filter((keyword) => keyword !== "");
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    if (metaKeywordsArray.length) {
      formData.append("metaKeywords", JSON.stringify(metaKeywordsArray));
    } else {
      // Handle the case where metaKeywords is an empty array
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      showErrorMessage("Please enter at least one valid keyword.")
      setErrorMessage("Please enter at least one valid keyword.");
      return;
    }

    if (imageFile) {
      formData.append("images", imageFile);
    }
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    try {
      await dispatch(updateBlog({ id: blogId, blogData: formData })).unwrap();
      dispatch(fetchBlog(queryParams));
      setErrorMessage("");
      setSuccessMessage("Blog updated successfully.");
      showSuccessMessage("Blog updated successfully.");
    } catch (error) {
      showErrorMessage("An error occurred while updating the blog.");
      setErrorMessage(error.message || "An error occurred while updating the blog.");
    }
  };
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    reset,
    setValue,
    isUpdating: isBlogUpdating,
    error: errorMessage || blogError,
    errors,
    imagePreview,
    handleImageChange,
    successMessage,
  };
}
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 