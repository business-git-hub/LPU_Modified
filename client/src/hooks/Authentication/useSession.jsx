import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSessionAsync } from "../../stores/actions/authActions";
import { getCookie } from "../../utils/authUtils";

const useSession = () => {
    const dispatch = useDispatch();
    // Access session state from Redux
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    const {
        isSessionLoading,
        isLoggedIn,
        user,
        roles,
        error,
    } = useSelector((state) => state.auth);
    const token = getCookie('session-token')
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    useEffect(() => {
        if (token && !isLoggedIn && !isSessionLoading) {
            dispatch(getSessionAsync());
        }
    }, [dispatch, token, isLoggedIn]); // Removed isSessionLoading to prevent unnecessary calls
    // Redirect to home page if there's an error in fetching session
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    return {
        isSessionLoading,
        isLoggedIn,
        token,
        roles,
        user,
        error,
    };
};
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export default useSession;
