import { Link, useLocation } from "react-router";
import { Home, LogOut, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "../../assets/credaxior-logo.svg";
import { useState, useRef, useEffect } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  roleColor: string;
}

export default function DashboardLayout({
  children,
  title,
  roleColor,
}: DashboardLayoutProps) {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={Logo}
                  alt="Credaxior Logo"
                  className="h-6 w-auto"
                />
              </Link>
              <span className="text-gray-400">|</span>
              <h2 className={`text-lg font-semibold ${roleColor}`}>
                {title}
              </h2>
            </div>

            {/* Right Section - Burger Menu */}
            <div className="relative" ref={menuRef}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(!open)}
              >
                <Menu className="w-5 h-5" />
              </Button>

              {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg py-2">
                  <Link to="/" onClick={() => setOpen(false)}>
                    <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Home className="w-4 h-4 mr-2" />
                      Home
                    </div>
                  </Link>

                  <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
