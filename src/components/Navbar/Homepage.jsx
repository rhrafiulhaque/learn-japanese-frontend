import useAuth from "../../hooks/useAuth";
import Footer from "../Footer";
import LessonBoard from "../Lessons/LessonBoard";
import Navbar from "./Nabar";
import UserSection from "./UserSection";

const Homepage = () => {
  const user = useAuth();

  return (
    <div className="bg-[#F5F3FF] min-h-screen">
      <div className="container mx-auto py-3">
        <Navbar />

        {user && <UserSection />}
        <LessonBoard />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
