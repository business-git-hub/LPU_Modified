import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAsync } from "../../stores/actions/authActions";
import { useState } from "react";
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            // Trigger the API logout and reset state
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
            await dispatch(logoutAsync()).unwrap();
            // Optional: Clear session data or localStorage if needed
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
            localStorage.removeItem("authToken");
            sessionStorage.removeItem("authToken");
            // Redirect to login page
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
            navigate("/auth/login");
        } catch (error) {
            console.error("Error during logout:", error);
            alert("An error occurred while logging out. Please try again.");
            navigate("/auth/login");
        } finally {
            setIsLoggingOut(false);
        }
    };
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    return {handleLogout, isLoggingOut};
};

export default useLogout;
