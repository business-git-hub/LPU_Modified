import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../stores/actions/authActions";

export const useUpdateProfile = (user) => {
    const dispatch = useDispatch();
    const { isLoading, serverError } = useSelector((state) => state.auth);
    const fullName = user?.name?.trim() || "";
    const [firstName, lastName] = fullName.includes(" ")
        ? fullName.split(" ")
        : [fullName, ""]; // Handle case where no last name is provided
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            firstName: firstName || "",
            lastName: lastName || "",
            email: user?.email || "",
        },
    });
    const [previewImage, setPreviewImage] = useState(user?.profilePicture || "");
    const [imageFile, setImageFile] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (serverError) {
            setMessage(serverError);
        }
    }, [serverError]);

    // Handle Image Upload Preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
            setImageFile(file);
        }
    };

    // Submit Form Data
    const onSubmit = async (data) => {
        setMessage(null);

        const formData = new FormData();
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("email", data.email);
        if (data.password && data.newPassword) {
            formData.append("password", data.password);
            formData.append("newPassword", data.newPassword);
        }
        if (imageFile) {
            formData.append("images", imageFile);
        }
        let userId = user?._id;
        dispatch(updateProfile({ userId, formData }));
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        handleImageChange,
        watch,
        setPreviewImage,
        previewImage,
        errors,
        isSubmitting,
        isLoading,
        message,
    };
};
