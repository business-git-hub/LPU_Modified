import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export default function ToastContainers() {
    return (
        <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar
            draggable
            pauseOnHover={false}
            className="mt-12"
            closeOnClick
            pauseOnFocusLoss={false}
            toastClassName={({ type }) =>
                `relative flex p-4 mb-5 rounded-lg shadow-lg
                ${type === "success" ? "bg-green-100 text-green-900" : ""}
                ${type === "error" ? "bg-red-100 text-red-900" : ""}
                dark:bg-gray-800 dark:text-white`
            }
            bodyClassName={() => "flex items-center"}
        />
    );
}

// Success Message (Green)
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export const showSuccessMessage = (message) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: false,
        theme: "light",
        className: "bg-green-100 text-green-900 dark:bg-gray-800 dark:text-white",
    });
};

// Error Message (Red)
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export const showErrorMessage = (message) => {
    toast.error(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: false,
        theme: "colored",
        className: "bg-red-100 text-red-900 dark:bg-gray-800 dark:text-white",
    });
};
