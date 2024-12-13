import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar/Nabar";
import Loading from "../common/Loading";
import { useGetTutorialsByIdQuery } from "../features/lessons/tutorialApi";

const TutorialDetails = () => {
  const { tutorialId } = useParams();

  const {
    data: tutorial,
    isLoading,
    isError,
    error,
  } = useGetTutorialsByIdQuery(tutorialId);

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = (
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-end gap-10 lg:h-full">
        <div className="lg:col-span-2 flex items-center justify-center bg-white p-6 rounded-md shadow-md">
          <p className="text-red-500">
            {error?.data?.message || "Error loading tutorial!"}
          </p>
        </div>
      </div>
    );
  } else if (tutorial?.data) {
    const { tutorialLink, tutorialTitle } = tutorial.data;

    content = (
      <div className="lg:w-3/4">
        <div className="relative">
          <iframe
            src={tutorialLink}
            title={tutorialTitle}
            frameBorder="0"
            className="w-full aspect-video h-[500px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <h1 className="text-2xl font-bold mt-4">{tutorialTitle}</h1>
      </div>
    );
  } else {
    content = <div className="text-red-500">No tutorial found!</div>;
  }

  return (
    <div className="container mx-auto">
      <Navbar />
      <main className="flex flex-col lg:flex-row gap-6">{content}</main>
      <Footer />
    </div>
  );
};

export default TutorialDetails;
