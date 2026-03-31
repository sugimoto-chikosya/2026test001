import { createBrowserRouter, Navigate } from "react-router";

import { Layout } from "./components/Layout";
import { CompanyLayout } from "./components/CompanyLayout";
import { Login } from "./pages/Login";
import { CompanySelection } from "./pages/CompanySelection";
import { FuturePrediction } from "./pages/FuturePrediction";
import { ProfitLoss } from "./pages/ProfitLoss";
import { CustomerAnalysis } from "./pages/CustomerAnalysis";
import { CashFlow } from "./pages/CashFlow";
import { ManagementReport } from "./pages/ManagementReport";
import { Settings } from "./pages/Settings";

// ✅ これを必ず分離する（重要）
function RootRedirect() {
  return <Navigate to="/login" replace />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootRedirect,
  },

  {
    path: "/login",
    Component: Login,
  },

  {
    path: "/company-selection",
    Component: CompanyLayout,
    children: [
      { index: true, Component: CompanySelection },
    ],
  },

  {
    path: "/app",
    Component: Layout,
    children: [
      { path: "future-prediction", Component: FuturePrediction },
      { path: "profit-loss", Component: ProfitLoss },
      { path: "customer-analysis", Component: CustomerAnalysis },
      { path: "cash-flow", Component: CashFlow },
      { path: "management-report", Component: ManagementReport },
      { path: "settings", Component: Settings },
    ],
  },
]);