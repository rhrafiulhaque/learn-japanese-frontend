import React from "react";
import Loading from "../common/Loading";
import { useGetAllLessonsQuery } from "../features/lessons/lessonApi";
import SingleLessonCard from "./SIngleLessonCard";

const LessonBoard = () => {
  const { data: lessons, isLoading, isError, error } = useGetAllLessonsQuery();

  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="text-red-500">There Have an error!!</div>;
  }
  if (!isLoading && !isError && lessons?.data.length === 0) {
    content = <div className="text-red-500">There Have no lessons!!</div>;
  }
  if (!isLoading && !isError && lessons?.data.length > 0) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...lessons.data]
          .sort((a, b) => a.lessonNumber - b.lessonNumber)
          .map((lesson) => (
            <SingleLessonCard key={lesson._id} lesson={lesson} />
          ))}
      </div>
    );
  }
  return (
    <main className="bg-white p-6 rounded-md h-full">
      <section>
        <h3 className="text-2xl font-bold mb-6">
          Lessons for Japanese Language
        </h3>
        {content}
      </section>
    </main>
  );
};

export default LessonBoard;
