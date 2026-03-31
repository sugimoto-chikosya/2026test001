import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { FuturePrediction } from "./pages/FuturePrediction";
import { ProfitLoss } from "./pages/ProfitLoss";
import { CustomerAnalysis } from "./pages/CustomerAnalysis";
import { CashFlow } from "./pages/CashFlow";
import { ManagementReport } from "./pages/ManagementReport";
import { Settings } from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: FuturePrediction },
      { path: "future-prediction", Component: FuturePrediction },
      { path: "profit-loss", Component: ProfitLoss },
      { path: "customer-analysis", Component: CustomerAnalysis },
      { path: "cash-flow", Component: CashFlow },
      { path: "management-report", Component: ManagementReport },
      { path: "settings", Component: Settings },
    ],
  },
]);
