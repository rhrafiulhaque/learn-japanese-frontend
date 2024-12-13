import React, { useState } from "react";
import Confetti from "react-confetti";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../Footer";
import Navbar from "../Navbar/Nabar";
import Loading from "../common/Loading";
import { useGetLessonByLessonNoQuery } from "../features/lessons/lessonApi";
import Vocabulary from "./Vocabulary";

const LessonPage = () => {
  const { lessonNo } = useParams();
  const navigate = useNavigate();
  const [currentVocabularyIndex, setCurrentVocabularyIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const {
    data: vocabularyData,
    isLoading,
    isError,
    error,
  } = useGetLessonByLessonNoQuery(lessonNo);

  let content = null;

  const vocabularies = vocabularyData?.data || [];
  const currentVocabulary = vocabularies[currentVocabularyIndex];

  const handleNextVocabulary = () => {
    if (currentVocabularyIndex < vocabularies.length - 1) {
      setCurrentVocabularyIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousVocabulary = () => {
    if (currentVocabularyIndex > 0) {
      setCurrentVocabularyIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleCompleteLesson = () => {
    setShowConfetti(true);
    toast.success("Great! You have been Completed this Lesson");
    setTimeout(() => {
      setShowConfetti(false);
      navigate("/");
    }, 3000);
  };

  //Rendering the page

  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = (
      <div className="grid grid-cols-1  lg:grid-cols-3 justify-end gap-10 lg:h-full">
        <div className="lg:col-span-2 flex items-center justify-center bg-white p-6 rounded-md shadow-md">
          <p className="text-red-500">{error?.data?.message}</p>;
        </div>
      </div>
    );
  }
  if (!isLoading && !isError && vocabularyData?.data.length === 0) {
    content = <div className="text-red-500">There Have no Vocabularies!!</div>;
  }
  if (!isLoading && !isError && vocabularyData?.data.length > 0) {
    content = (
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-10 lg:h-full">
        {currentVocabulary && (
          <Vocabulary
            vocabulary={currentVocabulary}
            onNext={handleNextVocabulary}
            onPrevious={handlePreviousVocabulary}
            isFirstVocabulary={currentVocabularyIndex === 0}
            isLastVocabulary={
              currentVocabularyIndex === vocabularies.length - 1
            }
            onComplete={handleCompleteLesson}
          />
        )}
      </div>
    );
  }

  return (
    <div className="bg-[#F5F3FF] min-h-screen relative">
      {showConfetti && <Confetti />}
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="container mx-auto py-3">
        <main className="max-w-8xl mx-auto h-[calc(100vh-10rem)]">
          {content}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LessonPage;
