import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import LenderDashboard from "./pages/LenderDashboard";
import BorrowerDashboard from "./pages/BorrowerDashboard";
import AnalystDashboard from "./pages/AnalystDashboard";
import LoanDetails from "./pages/LoanDetails";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "admin", Component: AdminDashboard },
      { path: "lender", Component: LenderDashboard },
      { path: "borrower", Component: BorrowerDashboard },
      { path: "analyst", Component: AnalystDashboard },
      { path: "loan/:id", Component: LoanDetails },
      { path: "*", Component: NotFound },
    ],
  },
]);
