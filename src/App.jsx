import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/public/home";
import LoginPage from "./pages/public/login";
import RegisterPage from "./pages/public/register";
import AdminLayout from "./components/layout/admin";
import DashboardPage from "./pages/admin/dashboard";
import SkillsPage from "./pages/admin/skills";
import ExperiencePage from "./pages/admin/experience";
import PortfoliosPage from "./pages/admin/portfolios";
import UsersPage from "./pages/admin/users";
import { useSelector } from "react-redux";
import { authName } from "./redux/slices/auth";
import EducationPage from "./pages/admin/education";
import UserLayout from "./components/layout/user";
import NotFoundPage from "./pages/NotFound";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state[authName]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route
          element={
            isAuthenticated && user?.role === "admin" ? (
              <AdminLayout />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/portfolios" element={<PortfoliosPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/users" element={<UsersPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;