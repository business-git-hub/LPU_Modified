import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Sidebar from "../components/layouts/Sidebar/Sidebar";
import Header from "../components/layouts/Navbar/Header";
import useGetAllContacts from "../hooks/Contact/useGetAllContacts";
import { useSelector } from "react-redux";


    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
const AdminLayouts = () => {
    const { isSessionLoading, isLoggedInuser, user } = useSelector((state) => state.auth);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { loading: contactsLoading } = useGetAllContacts();


    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    if (!user) {
        return navigate("/auth/login", { replace: true });
    }

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar */}
            
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
            <div
                className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 md:relative transition-transform duration-300 ease-in-out bg-white shadow-lg z-40`}
            >
                <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            </div>

            {/* Main Content */}
            
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
                <Header user={user} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

                {/* Main Section */}
                
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
                <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
                    {contactsLoading ? (
                        <div className="flex justify-center items-center h-full">
                            <Loader />
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </main>
            </div>
        </div>
    );
};

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export default AdminLayouts;
