import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useViews from "./hooks/Views/useViews"

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Pages
import Home from "./pages/Home/Home";
import University from "./pages/Home/University";
import About from "./pages/Home/About";
import Blog from "./pages/Home/Blog";
import Contact from "./pages/Home/Contact";


{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Admin
import Dashboard from "./pages/Dashboard/Dashboard";
import BlogList from "./pages/Dashboard/BlogList";
import ContactForms from "./pages/Dashboard/ContactForms";
import UniversityList from "./pages/Dashboard/UniversityList";
import ProfilePage from "./pages/Dashboard/ProfilePage";

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }

// Authentication components
import SignIn from "./pages/Authentication/SignIn";
import ProtectedRoute from "./components/layouts/ProtectedRoute";

// Layouts
import MainLayouts from "./layouts/MainLayouts";
import AuthLayouts from "./layouts/AuthLayouts";
import AdminLayouts from "./layouts/AdminLayouts";

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }

import ToastContainers from "./components/Toast/ToastContainer";
import BlogDetail from "./pages/Home/BlogDetail";
import UniversityDetail from "./pages/Home/UniversityDetail";

// Loader
import Loader from "./components/Loader/Loader";


{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }


export default function App() {
  useViews();
  // Authentication routes
  const authRoutes = [
    { path: "login", element: <SignIn /> },
  ];

  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  // Main routes for logged-in users
  const mainRoutes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/university", element: <University /> },
    { path: "/university/:id", element: <UniversityDetail /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/:id", element: <BlogDetail /> },
    { path: "/contact", element: <Contact /> },
  ];

  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  // Admin routes (only accessible if logged in as admin)
  const adminRoutes = [
    { path: "dashboard", element: <Dashboard /> },
    { path: "profile", element: <ProfilePage /> },
    { path: "profile/:action", element: <ProfilePage /> },
    { path: "profile/:action/:id", element: <ProfilePage /> },
    { path: "blog", element: <BlogList /> },
    { path: "blog/:action", element: <BlogList /> },
    { path: "blog/:action/:blogId", element: <BlogList /> },
    { path: "university", element: <UniversityList /> },
    { path: "university/:action", element: <UniversityList /> },
    { path: "university/:action/:universityid", element: <UniversityList /> },
    { path: "contact", element: <ContactForms /> },
    { path: "contact/:action", element: <ContactForms /> },
    { path: "contact/:action/:id", element: <ContactForms /> },
  ];


  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  // Function to render routes with the specified layout
  const renderRoutes = (layout, routes) => (
    <Route path={layout.path} element={layout.component}>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Route>
  );

  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  return (
    <BrowserRouter>
      <Routes>
        {/* Main routes are wrapped with ProtectedRoute to ensure the user is logged in */}
        {renderRoutes(
          { path: "", component: <MainLayouts /> },
          mainRoutes
        )}
        {/* Auth routes are publicly accessible */}
        {renderRoutes({
          path: "/auth", component: <ProtectedRoute ><AuthLayouts /></ProtectedRoute>
        }, authRoutes)}

        {/* Admin routes are wrapped with ProtectedRoute requiring admin rights */}
        {renderRoutes(
          { path: "/admin", component: <ProtectedRoute><AdminLayouts /></ProtectedRoute> },
          adminRoutes
        )}
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainers />
    </BrowserRouter>
  );
}

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }