import { Routes, Route } from "react-router-dom";
import "./admin-page.scss";
import MessagesPage from "./pages/messages/MessagesPage";

function AdminPage() {
  return (
    <div className="admin-view">
      <Routes>
        <Route path="/" element={<h2>Welcome to Admin</h2>} />
        <Route path="/messages" element={<MessagesPage />} />
      </Routes>
    </div>
  );
}
export default AdminPage;
