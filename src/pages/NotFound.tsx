import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 Not Found | YourBrand</title>
        <meta name="description" content="Page not found. Return to the homepage." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
