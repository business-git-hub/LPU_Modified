import React, { useState } from "react";
import { useSelector } from "react-redux";
import { User, Eye, Edit, Lock, UploadCloud, X } from "lucide-react";
import { useUpdateProfile } from "../../hooks/Authentication/useUpdateProfile";
import ProfileCard from "../../components/ui/ProfileCard"
const ProfilePage = () => {
    const { user } = useSelector((state) => state.auth); // Getting user from Redux
    const [isEditing, setIsEditing] = useState(false);
    const fullName = user?.name?.trim() || "";
    const [firstName, lastName] = fullName.includes(" ")
        ? fullName.split(" ")
        : [fullName, ""]; // Handle case where no last name is provided
    // Use the custom hook to manage form logic
    const {
        register,
        handleSubmit,
        onSubmit,
        handleImageChange,
        setPreviewImage,
        watch,
        previewImage,
        errors,
        isSubmitting,
        isLoading,
        message,
    } = useUpdateProfile(user);

    return (
        <div className="space-y-6 p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
                <div className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</div>
            </div>

            {isEditing ? (
                <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-6">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-800">Edit Profile</h1>
                        <button onClick={() => {
                            setIsEditing(false);
                            setPreviewImage(user.profilePicture);
                        }}
                            className="text-gray-500 hover:text-gray-800">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                        {/* Profile Picture Upload */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="relative mb-2 w-32 h-32 border-2 border-dashed border-gray-300 rounded-full p-4 flex flex-col items-center justify-center hover:border-blue-400 transition cursor-pointer"
                                onClick={() => document.getElementById("profileImageInput").click()}>
                                {!previewImage ? (
                                    <>
                                        <UploadCloud className="w-9 h-9 text-gray-400" />
                                        <span className="text-gray-500 text-[10px]">Click to upload</span>
                                    </>
                                ) : (
                                    <img src={previewImage} alt="Preview" className="w-24 h-24 object-cover rounded-full border shadow-md" />
                                )}
                            </div>

                            {/* Hidden File Input */}
                            <input
                                id="profileImageInput"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                            <label className="block text-gray-700 font-medium">Profile Picture</label>
                        </div>
                        {/* First Name */}
                        <div>
                            <label className="block text-gray-700 font-medium">First Name</label>
                            <input
                                {...register("firstName", { required: "First name is required" })}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter first name"
                            />
                            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block text-gray-700 font-medium">Last Name</label>
                            <input
                                {...register("lastName", { required: "Last name is required" })}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter last name"
                            />
                            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-medium">Email</label>
                            <input
                                {...register("email")}
                                className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
                                disabled
                            />
                        </div>


                        {/* Old Password */}
                        <div>
                            <label className="block text-gray-700 font-medium">Old Password</label>
                            <div className="relative">
                                <input
                                    {...register("password")}
                                    type="password"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 pr-10"
                                    placeholder="Enter current password"
                                />
                                <Lock className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
                            </div>
                        </div>

                        {/* New Password */}
                        <div>
                            <label className="block text-gray-700 font-medium">New Password</label>
                            <div className="relative">
                                <input
                                    {...register("newPassword")}
                                    type="password"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 pr-10"
                                    placeholder="Enter new password"
                                />
                                <Lock className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
                            </div>
                        </div>


                        {/* Loading & Error Message */}
                        {isLoading && <p className="text-blue-500 text-center">Updating...</p>}
                        {message && <p className="text-red-500 text-center">{message}</p>}

                        {/* Buttons */}
                        <div className="flex space-x-4">
                            <button
                                type="submit"
                                disabled={isSubmitting || isLoading}
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex justify-center"
                            >
                                {isSubmitting || isLoading ? "Saving..." : "Save Changes"}
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsEditing(false);
                                    setPreviewImage(user.profilePicture);
                                }}

                                className="w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProfileCard title="First Name" value={firstName || "N/A"} icon={Edit} color="bg-blue-500" />
                        <ProfileCard title="Last Name" value={lastName || "N/A"} icon={Edit} color="bg-green-500" />
                        <ProfileCard title="Email" value={user?.email || "N/A"} icon={Edit} color="bg-purple-500" />
                    </div>
                    <div className="flex space-x-4 mt-6">
                        <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center">
                            <Edit className="mr-2" /> Edit Profile
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;

