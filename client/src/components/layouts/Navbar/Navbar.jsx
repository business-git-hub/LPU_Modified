import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../../../assets/Logo.svg";
import { useSelector } from "react-redux";
import useSession from "../../../hooks/Authentication/useSession";
export default function Navbar() {
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  useSession();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/university', label: 'University' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  const loginItem = { path: '/auth/login', label: 'Login' };
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  return (
    <nav
      className={`fixed w-screen z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white shadow-lg py-1'
        : 'bg-transparent py-3'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="TopUniversityIndia Logo"
                className={`h-[50px] md:h-[60px] rounded-lg transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-white/90 hover:bg-white'
                  }`}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-2 py-1 text-sm font-medium transition-all duration-200
                  ${isScrolled ? 'text-gray-800' : 'text-white'}
                  hover:text-blue-500 
                  ${location.pathname === item.path
                    ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500'
                    : ''
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={isLoggedIn ? "/admin/dashboard" : "/auth/login"} // ✅ Conditional Navigation
              className={`px-6 py-2.5 rounded-full font-medium text-sm
          transition-all duration-200 transform hover:scale-105
          ${isScrolled
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-white text-blue-500 hover:bg-blue-50"
                }`}
            >
              {isLoggedIn ? "Dashboard" : "Login"} {/* ✅ Change Label Based on Login State */}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-200 ${isScrolled
                ? 'text-gray-800 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
                }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white shadow-lg`}
      >
        <div className="px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2.5 rounded-lg text-gray-800 
                transition-colors duration-200 text-base font-medium
                ${location.pathname === item.path
                  ? 'bg-blue-50 text-blue-500'
                  : 'hover:bg-gray-50'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to={isLoggedIn ? "/admin/dashboard" : "/auth/login"}
            className="block px-4 py-2.5 mt-4 text-center text-white bg-blue-500 
              hover:bg-blue-600 rounded-lg transition-colors duration-200 
              text-base font-medium shadow-sm">
            {isLoggedIn ? "Dashboard" : "Login"}
          </Link>
        </div>
      </div>
    </nav>
  );
}