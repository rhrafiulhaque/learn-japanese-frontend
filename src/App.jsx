import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AdminCreateLesson from "./components/AdminPanel/AdminCreateLesson";
import AdminCreateVocubulary from "./components/AdminPanel/AdminCreateVocubulary";
import AdminDashboard from "./components/AdminPanel/AdminDashboard";
import Layout from "./components/AdminPanel/AdminLayout";
import AdminLessonList from "./components/AdminPanel/AdminLessonList";
import AdminUserList from "./components/AdminPanel/AdminUserList";
import AdminVocabularyList from "./components/AdminPanel/AdminVocabularyList";
import Footer from "./components/Footer";
import LessonBoard from "./components/Lessons/LessonBoard";
import LessonPage from "./components/Lessons/LessonPage";
import LoginPage from "./components/Login/LoginPage";
import Homepage from "./components/Navbar/HomePage";
import Navbar from "./components/Navbar/Nabar";
import RegistrationPage from "./components/Register/RegistrationPage";
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
        <Route
          path="/lesson"
          element={
            <div className="container mx-auto pt-2">
              <Navbar />
              <LessonBoard />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        <Route path="/admin" element={<Layout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="create-lesson" element={<AdminCreateLesson />} />
          <Route path="create-vocabulary" element={<AdminCreateVocubulary />} />
          <Route path="lessonlist" element={<AdminLessonList />} />
          <Route path="userlist" element={<AdminUserList />} />
          <Route path="vocabularylist" element={<AdminVocabularyList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
