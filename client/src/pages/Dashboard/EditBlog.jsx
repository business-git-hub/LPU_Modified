import { ImagePlus } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useUpdateBlog from '../../hooks/blog/useUpdateBlog';
import usegetAllUniversities from '../../hooks/University/usegetAllUniversities';
import useGetBlogById from '../../hooks/blog/useGetBlogById';
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const EditBlog = () => {
    const navigate = useNavigate();
    const { blogId } = useParams(); // Assuming the blog ID is passed in the URL
    const { allUniversities } = usegetAllUniversities()
    // Fetch blog data when the component mounts
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    const { getBlogById } = useGetBlogById(blogId)
    getBlogById(blogId)
    const { isLoading, errorMessage, successMessage } = useSelector((state) => state.blog);
    // Initialize the hook to update blog, passing initial data if available
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    const {
        handleSubmit,
        register,
        imagePreview,
        handleImageChange,
        errors,
        isUpdating,
    } = useUpdateBlog(blogId);

    const handleBack = () => navigate('/admin/blog');
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">Edit Blog Post</h1>
                <button
                    onClick={handleBack}
                    className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow hover:bg-gray-100"
                >
                    Back
                </button>
            </div>
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
            {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                    <InputField label="Blog Title" id="title" register={register} errors={errors} required />
                    <InputField label="Category" id="category" register={register} errors={errors} required />
                    <InputField label="Meta Description" id="metaDescription" register={register} errors={errors} required />
                    <InputField label="Meta Keywords" id="metaKeywords" placeholder="e.g., university, education" register={register} errors={errors} required />
                    <SelectField label="University" id="university" options={allUniversities} register={register} errors={errors} required />
                    <TextAreaField label="Blog Content" id="content" register={register} errors={errors} required />
                    <FileUpload label="Featured Image" onChange={handleImageChange} imagePreview={imagePreview} />
                </div>
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                <button
                    type="submit"
                    className="w-full py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700"
                    disabled={isUpdating || isLoading}
                >
                    {isUpdating || isLoading ? 'Saving...' : 'Update Blog'}
                </button>
            </form>

            {successMessage && <p className="text-green-500 mt-4 text-center">{successMessage}</p>}
        </div>
    );
};
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const InputField = ({ label, id, register, errors, required, placeholder = '' }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type="text"
            id={id}
            {...register(id, required && { required: `${label} is required` })}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
            placeholder={placeholder}
        />
        {errors[id] && <span className="text-red-500 text-sm">{errors[id].message}</span>}
    </div>
);
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const SelectField = ({ label, id, options, register, errors, required }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <select
            id={id}
            {...register(id)}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
        >
            <option value="">Select an option</option>
            {options?.map((option) => (
                <option key={option._id} value={option._id}>{option.identity.name}</option>
            ))}
        </select>
        {errors[id] && <span className="text-red-500 text-sm">{errors[id].message}</span>}
    </div>
);
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const TextAreaField = ({ label, id, register, errors, required }) => (
    <div>

        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        <textarea
            id={id}
            rows={6}
            {...register(id, required && { required: `${label} is required` })}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
            placeholder={`Enter ${label.toLowerCase()} here...`}
        ></textarea>
        {errors[id] && <span className="text-red-500 text-sm">{errors[id].message}</span>}
    </div>
);
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const FileUpload = ({ label, onChange, imagePreview }) => (
    <div>
        <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="flex items-center justify-center w-full px-6 py-5 mt-1 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-blue-500">
            <label htmlFor="file-upload" className="flex flex-col items-center cursor-pointer">
                <ImagePlus className="w-12 h-12 text-gray-400" />
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </label>
            <input
                type="file"
                id="file-upload"
                className="hidden"
                accept="image/*"
                onChange={onChange}
            />
        </div>
        {imagePreview && (
            <div className="mt-4">
                <img src={imagePreview} alt="Preview" className="w-full max-h-40 mx-auto rounded-md object-contain" />
            </div>
        )}
    </div>
);
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export default EditBlog;
