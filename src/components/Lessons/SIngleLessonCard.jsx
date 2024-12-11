import React from "react";
import { Link } from "react-router-dom";
import lessonBackground from "../../assets/lessonBackground.jpg";
const SingleLessonCard = ({ lesson }) => {
  const { lessonName, lessonNumber } = lesson || {};

  return (
    <Link to={`/lesson/${lessonNumber}`} className="cursor-pointer">
      <div className="rounded-lg overflow-hidden flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow max-h-[450px] cursor-pointer group relative">
        <div className="group-hover:scale-105   absolute transition-all text-white  text-center top-1/2 -translate-y-1/2 px-4">
          <p className="mt-2 text-lg">Lesson No- {lessonNumber}</p>
          <h1 className=" text-5xl">{lessonName}</h1>
        </div>
        <img
          src={lessonBackground}
          alt={lessonName}
          className="w-full h-full object-cover rounded mb-4 transition-all "
        />
      </div>
    </Link>
  );
};

export default SingleLessonCard;
