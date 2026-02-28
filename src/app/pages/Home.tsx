import { Link } from "react-router";
import { Shield, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import MistBackground from "../components/ui/mistbackground";


export default function Home() {
  const roles = [
    {
      title: "Admin Portal",
      description: "Oversee platform operations, manage user accounts, and ensure data security",
      icon: Shield,
      path: "/admin",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Lender Dashboard",
      description: "Create loan offers, track payments, and manage borrower interactions",
      icon: TrendingUp,
      path: "/lender",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Borrower Dashboard",
      description: "Apply for loans, track payment schedules, and manage loan details",
      icon: Users,
      path: "/borrower",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Financial Analyst",
      description: "Analyze loan data, assess risks, and generate financial reports",
      icon: BarChart3,
      path: "/analyst",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold text-[#773ddd]">Lendstream</h1>
              <p className="text-black">Comprehensive Loan Management System</p>
            </div>
          </div>
        </div>
      </header>


      {/* Hero Section Wrapper */}
      <div className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-7xl px-4">

          {/* Hero Card */}
          <div className="relative overflow-hidden rounded-2xl min-h-[520px] shadow-xl">

            {/* Mist Background (CLIPPED) */}
            <MistBackground />

            {/* Optional soft overlay for readability */}
            <div className="absolute inset-0 bg-black/10 z-[1]" />

            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-16 text-white">

              {/* Left */}
              <div>
                

                <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] sm:leading-tight lg:leading-[1.05] font-normal mb-6">
                  Streamline Your Loan Issuance Process
                </h2>

                <p className="text-lg max-w-xl opacity-90">
                  Track payments, calculate interest, and manage transaction records with ease.
                  An effortless way to manage loans for both lenders and borrowers.
                </p>

                
              </div>

            

            </div>
          </div>
        </div>
      </div>

      
      

      {/* Role Cards */}
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-black mb-2">Choose Your Role</h2>
          <p className="text-black text-lg">Select your dashboard to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card key={role.path} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${role.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${role.color}`} />
                  </div>
                  <CardTitle>{role.title}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={role.path}>
                    <Button className="w-full">
                      Access Dashboard
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Payment Tracking</h3>
              <p className="text-gray-600">Monitor all payments with detailed transaction history and automated reminders</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interest Calculation</h3>
              <p className="text-gray-600">Automatic interest computation with customizable rates and amortization schedules</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Risk Assessment</h3>
              <p className="text-gray-600">Advanced analytics to evaluate creditworthiness and manage portfolio risk</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2026 LoanFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
