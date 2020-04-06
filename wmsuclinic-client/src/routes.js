import Dashboard from "./components/DashboardContent";
import Settings from "./components/SettingCards";

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
  }
];
export default routes;
