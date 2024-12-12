import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loading from "../common/Loading";
import { useGetAllLessonsQuery } from "../features/lessons/lessonApi";

const AdminDashboard = () => {
  const { data: allLessons, isLoading } = useGetAllLessonsQuery();
  const auth = useAuth();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex-grow p-10">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold">Hey There 👋!</h2>
        <h1 className="text-4xl font-bold">
          Welcome Back To your Admin Panel{" "}
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to={"/admin/create-lesson"} className="group">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 ">
            <div className="text-buzzr-purple mb-4 group-hover:scale-105 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-all">
              Create a new lesson
            </h3>
            <p className="text-gray-600 text-sm group-hover:scale-105 transition-all">
              Build from the ground up
            </p>
          </div>
        </Link>

        {allLessons.data.map((lesson) => (
          <Link
            to={`/admin/addlesson/${lesson._id}`}
            key={lesson._id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 group cursor-pointer"
          >
            <div className="text-buzzr-purple mb-4 group-hover:scale-105 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z" />
                <path d="M12 12l4 -2.25l4 -2.25" />
                <path d="M12 12l0 9" />
                <path d="M12 12l-4 -2.25l-4 -2.25" />
                <path d="M20 12l-4 2v4.75" />
                <path d="M4 12l4 2l0 4.75" />
                <path d="M8 5.25l4 2.25l4 -2.25" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-all">
              {lesson.lessonName}
            </h3>
            <p className="text-gray-600 text-sm group-hover:scale-105 transition-all">
              Lesson No- {lesson.lessonNumber}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
