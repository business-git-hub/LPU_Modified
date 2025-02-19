// MainLayout.js
import { Outlet } from 'react-router-dom';
import Footer from '../components/layouts/Footer/Footer';
import Navbar from '../components/layouts/Navbar/Navbar';
import FloatingRegistration from '../components/FloatingButton/FloatingRegistration'; // Import the new component
import FloatingWhatsAppButton from '../components/FloatingButton/FloatingWhatsAppButton';

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }

const MainLayouts = () => {

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    return (
        <div className="h-screen relative">
            <Navbar />
            <main className="overflow-hidden">
                <Outlet />
            </main>
            <Footer />
            <FloatingRegistration />
            <FloatingWhatsAppButton />
        </div>
    );
}
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export default MainLayouts;
