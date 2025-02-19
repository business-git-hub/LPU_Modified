import logo from "../../../assets/Logobg.svg";
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export default function Footer() {
  return (
    <footer className="bg-[#1E1E2F] text-gray-300 py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Left Section - Company Info */}
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
          <div>
            <h2 className="text-2xl font-semibold text-white">Top University India</h2>
            <p className="mt-3 text-sm leading-relaxed">
              The largest portal for university rankings, courses, and career guidance in India.
              Explore top colleges, admission processes, and student insights.
            </p>

            {/* Contact Information */}
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-400" />
                <a href="tel:+918885307365" className="hover:text-white transition">+91 8885307365</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:info@topuniversityindia.com" className="hover:text-white transition">
                  info@topuniversityindia.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Phase 1, Workflows by OYO, Chennai, Tamil Nadu</span>
              </div>
            </div>

            {/* Social Media Links */}
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
            <div className="mt-5">
              <p className="text-sm font-medium">Follow Us:</p>
              <div className="flex space-x-4 mt-2">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="h-6 w-6 text-gray-400 hover:text-white transition duration-300" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="h-6 w-6 text-gray-400 hover:text-white transition duration-300" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="h-6 w-6 text-gray-400 hover:text-white transition duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Courses</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Admissions</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Right Section - Logo (Hidden on Mobile) */}
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
          <div className="flex justify-center lg:justify-end">
            <img src={logo} alt="Top University Logo" className="h-24 md:h-28 lg:h-32 hidden md:block" />
          </div>
        </div>

        {/* Bottom Footer */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Top University India. All rights reserved.
        </div>

        {/* Developer Credit */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
        <div className="mt-2 text-center text-xs text-gray-400">
          Developed by <a href="https://trideocoders.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition duration-300">Trideocoders</a>
        </div>
      </div>
    </footer>
  );
}
