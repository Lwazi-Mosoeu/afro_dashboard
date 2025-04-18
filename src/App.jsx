import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/context/ProtectedRoute";
import "./App.css";
import TopBar from "./design/topBar";
import Dashboard from "./Dashboard";
import LoginForm from "./forms/LoginForm";
import SignUpForm from "./forms/SignUpForm";

function App() {
  return (
    <AuthProvider>
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
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
