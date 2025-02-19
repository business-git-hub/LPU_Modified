



import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useSession from "../../hooks/Authentication/useSession";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Initialize the session once (e.g., to update your Redux state)
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    useSession();

    const { user, isSessionLoading, isLoggedIn } = useSelector((state) => state.auth);
    const [hasRedirected, setHasRedirected] = useState(false);

    useEffect(() => {
        // Only run when session loading is complete and a redirection hasn't been triggered yet
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
        if (!isSessionLoading && !hasRedirected) {
            if (isLoggedIn && user && !isSessionLoading) {
                // If the user is logged in and you want to ensure they land on the dashboard,
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
                // check if the current pathname is different.
                if (location.pathname !== "/admin/dashboard" || isSessionLoading) {
                    // console.log("Redirecting to dashboard...");
                    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
                    setHasRedirected(true);
                    navigate("/admin/dashboard");
                }
            } else if (!isLoggedIn || !user && !isSessionLoading) {

                // console.log("Redirecting to login...");
                // Only navigate if we're not already on the login page
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
                if (location.pathname !== "/auth/login" || isSessionLoading) {
                    setHasRedirected(true);
                    navigate("/auth/login");
                }
            }
        }
    }, [isSessionLoading, isLoggedIn, user, navigate, location, hasRedirected]);

    // While the session is loading or redirection is in progress,
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }

    // If no redirection is needed, render the protected content.
    return <>{children}</>;
};

export default ProtectedRoute;