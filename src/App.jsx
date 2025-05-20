// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/context/ProtectedRoute";
import "./App.css";
import TopBar from "./design/topBar";
import Dashboard from "./Dashboard";
import LoginForm from "./forms/LoginForm";
import SignUpForm from "./forms/SignUpForm";
import UserStats from "./pages/user-stats/userStats";
import ServiceIntervention from "./pages/service-intervention/ServiceIntervention";
import PersistLogin from "./context/PersistLogin";
import UserDetail from "@/pages/user-detail/UserDetail";

function App() {
  return (
    <AuthProvider>
      <PersistLogin>
        <Router>
          <div className="app-container">
            <TopBar />
            <main className="content-area pt-32">
              <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/user-stats"
                  element={
                    <ProtectedRoute>
                      <UserStats />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/service-intervention"
                  element={
                    <ProtectedRoute>
                      <ServiceIntervention />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/user/:userId"
                  element={
                    <ProtectedRoute>
                      <UserDetail />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
          </div>
        </Router>
      </PersistLogin>
    </AuthProvider>
  );
}

export default App;
