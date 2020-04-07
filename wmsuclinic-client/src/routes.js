// Sidebar
import Dashboard from "./components/DashboardContent";
import Settings from "./components/SettingCards";

// Settings
import Account from "./components/Account/Account";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    layout: "/admin"
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
    layout: "/admin"
  }
];
export default routes;
