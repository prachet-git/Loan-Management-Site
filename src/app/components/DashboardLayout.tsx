import { Link, useLocation } from "react-router";
import { Home, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "../../assets/credaxior-logo.svg";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  roleColor: string;
}

export default function DashboardLayout({ children, title, roleColor }: DashboardLayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`bg-white border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src={Logo} alt="Credaxior Logo" className="h-6 w-auto"></img>
              </Link>
              <span className="text-gray-400">|</span>
              <h2 className={`text-lg font-semibold ${roleColor}`}>{title}</h2>
            </div>

            <div className="flex items-center space-x-3">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Button>
              </Link>
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
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
