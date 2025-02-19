import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../stores/actions/authActions";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export default function useLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Errors, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const { isLoading, serverError } = useSelector((state) => state.auth);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onBlur",
        defaultValues: {
            userEmail: localStorage.getItem('rememberedEmail') || '',
            rememberMe: localStorage.getItem('rememberedEmail') ? true : false
        }
    });
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    const preparePayload = (data) => {
        // Handle remember me
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
        if (data.rememberMe) {
            localStorage.setItem('rememberedEmail', data.userEmail.trim());
        } else {
            localStorage.removeItem('rememberedEmail');
        }
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
        return {
            email: data.userEmail.trim(),
            password: data.userPassword,
        };
    };
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    const onSubmit = async (data) => {
        setError("");
        setSuccessMessage("");
        const payload = preparePayload(data);
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
        try {
            const response = await dispatch(loginAsync(payload)).unwrap();
            setSuccessMessage("Login successful!");
            reset();
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
            // Navigate based on roles with updated paths
            setTimeout(() => {
                if (response.roles.some((role) => role.name === "admin")) {
                    navigate("/admin/dashboard");
                } else {
                    navigate("/auth/login");
                }
            }, 1000);
        } catch (error) {
            setError(error.message || "An error occurred during login.");
        }
    };
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    return { register, isLoading, handleSubmit, errors, Errors, onSubmit, serverError, successMessage };
}
