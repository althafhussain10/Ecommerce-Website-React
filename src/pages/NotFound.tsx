import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <img
          src="/src/assets/images/404.png"
          alt="Page Not Found"
          className="mx-auto mb-6 w-64 sm:w-80"
        />
        <p className="mb-6 text-2xl sm:text-3xl font-semibold text-foreground/90 dark:text-foreground/80 animate-fade-in">
            Oops! Page not found
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;