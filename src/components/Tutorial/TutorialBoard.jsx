import Footer from "../Footer";
import Navbar from "../Navbar/Nabar";
import Loading from "../common/Loading";
import { useGetAllTutorialsQuery } from "../features/lessons/tutorialApi";
import SingleTutorial from "./SingleTutorial";

const TutorialBoard = () => {
  const {
    data: tutorials,
    isLoading: tutorialLoading,
    isError: tutorialIsError,
    error: tutorialError,
  } = useGetAllTutorialsQuery();

  if (tutorialLoading) {
    return <Loading />;
  }

  if (tutorialIsError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">
          Error: {tutorialError?.data?.message || "Something went wrong!"}
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <Navbar />
      <section className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Tutorials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tutorials?.data?.map((tutorial) => (
            <SingleTutorial key={tutorial._id} tutorial={tutorial} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TutorialBoard;
