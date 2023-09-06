import { Routes, Route, NavLink } from "react-router-dom";
import "./admin-page.scss";
import MessagesPage from "./pages/messages/MessagesPage";
import ProjectsManagments from "./pages/projects/ProjectsManagment";

function AdminPage() {
  return (
    <div className="admin-view">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h2>Welcome to Admin</h2>

              <NavLink to="messages">New Messages</NavLink>
              <NavLink to="projects">Projects Managements</NavLink>
            </div>
          }
        />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/projects" element={<ProjectsManagments />} />
      </Routes>
    </div>
  );
}
export default AdminPage;
