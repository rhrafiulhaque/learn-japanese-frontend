import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import AdminCreateLesson from "./components/AdminPanel/AdminCreateLesson";
import AdminCreateTutorial from "./components/AdminPanel/AdminCreateTutorial";
import AdminCreateVocubulary from "./components/AdminPanel/AdminCreateVocubulary";
import AdminDashboard from "./components/AdminPanel/AdminDashboard";
import Layout from "./components/AdminPanel/AdminLayout";
import AdminLessonList from "./components/AdminPanel/AdminLessonList";
import AdminTutorialList from "./components/AdminPanel/AdminTutorialList";
import AdminUserList from "./components/AdminPanel/AdminUserList";
import AdminVocabularyList from "./components/AdminPanel/AdminVocabularyList";
import Footer from "./components/Footer";
import LessonBoard from "./components/Lessons/LessonBoard";
import LessonPage from "./components/Lessons/LessonPage";
import LoginPage from "./components/Login/LoginPage";
import Homepage from "./components/Navbar/Homepage";
import Navbar from "./components/Navbar/Nabar";
import RegistrationPage from "./components/Register/RegistrationPage";
import TutorialBoard from "./components/Tutorial/TutorialBoard";
import TutorialDetails from "./components/Tutorial/TutorialDetails";
import Loading from "./components/common/Loading";
import NotAuthorize from "./components/common/NotAuthorize";
import NotFound from "./components/common/NotFound";
import AdminRoute from "./components/route/AdminRoute";
import PrivateRoute from "./components/route/PrivateRoute";
import useAuth from "./hooks/useAuth";
import useAuthCheck from "./hooks/useAuthCheck";

function App() {
  const authChecked = useAuthCheck();
  const user = useAuth();
  if (!authChecked) {
    return <Loading />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user?.role === "admin" ? (
              <Navigate to="/admin/dashboard" />
            ) : user?.role === "user" ? (
              <Navigate to="/homepage" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/tutorials" element={<TutorialBoard />} />
          <Route path="/tutorials/:tutorialId" element={<TutorialDetails />} />
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
          <Route path="/lesson/:lessonNo" element={<LessonPage />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<Layout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="create-lesson" element={<AdminCreateLesson />} />
            <Route path="create-tutorial" element={<AdminCreateTutorial />} />
            <Route
              path="create-vocabulary"
              element={<AdminCreateVocubulary />}
            />
            <Route path="lessonlist" element={<AdminLessonList />} />
            <Route path="userlist" element={<AdminUserList />} />
            <Route path="vocabularylist" element={<AdminVocabularyList />} />
            <Route path="tutoriallist" element={<AdminTutorialList />} />
          </Route>
        </Route>

        <Route path="/notauthorized" element={<NotAuthorize />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
