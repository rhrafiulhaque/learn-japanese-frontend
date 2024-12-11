import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LessonPage from "./components/Lessons/LessonPage";
import LoginPage from "./components/Login/LoginPage";
import Homepage from "./components/Navbar/HomePage";
import useAuthCheck from "./hooks/useAuthCheck";

function App() {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div>Auth Checking</div>
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lesson/:lessonNo" element={<LessonPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
