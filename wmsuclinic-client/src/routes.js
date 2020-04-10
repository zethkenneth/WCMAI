// Sidebar
import Dashboard from "./components/DashboardContent";
import Settings from "./components/SettingCards";

// Settings
import Account from "./components/Account/Account";
import Medicine from "./components/Medicine/Medicine";
import Course from "./components/Course/Course";

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
  },
  {
    path: "/medicine",
    name: "Medicine",
    component: Medicine,
    layout: "/admin"
  },
  {
    path: "/course",
    name: "Course",
    component: Course,
    layout: "/admin"
  }
];
export default routes;
