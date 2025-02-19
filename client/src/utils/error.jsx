import { toast } from 'react-toastify';
export const handleError = (error) => {
    toast(error)
    if (typeof error === 'string') return error;
    if (error.error) return error.error;

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    if (!navigator.onLine) return "Network connection lost. Please check your internet connection.";

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    if (error.response) {
        const { status, data } = error.response;
        const errorMessage = data?.message || data?.error || "An error occurred.";

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
        const errorMessages = {
            400: errorMessage || "Invalid request. Please check your input.",
            401: "Your session has expired. Please log in again.",
            403: "You don't have permission to perform this action.",
            404: "The requested resource was not found.",
            422: errorMessage || "Validation error. Please check your input.",
            429: "Too many requests. Please try again later.",
            500: "Server error. Please try again later.",
            502: "Service temporarily unavailable. Please try again later.",
            503: "Service temporarily unavailable. Please try again later.",
            504: "Service temporarily unavailable. Please try again later.",
        };

        return errorMessages[status] || errorMessage;
    }

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    if (error.request && !error.response) return "Unable to connect to the server. Please check your connection.";
    return error.message || "An unexpected error occurred.";
};
