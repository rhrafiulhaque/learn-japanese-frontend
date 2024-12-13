import React from "react";
import useAuth from "../../hooks/useAuth";
import Loading from "../common/Loading";
import { useGetAllUsersQuery } from "../features/auth/authApi";
import {
  useGetAllLessonsQuery,
  useGetAllVocabulariesQuery,
} from "../features/lessons/lessonApi";
import { useGetAllTutorialsQuery } from "../features/lessons/tutorialApi";

const AdminDashboard = () => {
  const { data: lessonsData, isLoading: isLessonsLoading } =
    useGetAllLessonsQuery();
  const { data: tutorialsData, isLoading: isTutorialsLoading } =
    useGetAllTutorialsQuery();
  const { data: usersData, isLoading: isUsersLoading } = useGetAllUsersQuery();
  const { data: vocabulariesData, isLoading: isVocabulariesLoading } =
    useGetAllVocabulariesQuery();
  const auth = useAuth();

  if (
    isLessonsLoading ||
    isTutorialsLoading ||
    isUsersLoading ||
    isVocabulariesLoading
  ) {
    return <Loading />;
  }

  const lessonCount = lessonsData?.data?.length || 0;
  const tutorialCount = tutorialsData?.data?.length || 0;
  const userCount = usersData?.data?.length || 0;
  const vocabularyCount = vocabulariesData?.data?.length || 0;

  return (
    <div className="flex-grow p-10">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold">Hey There 👋!</h2>
        <h1 className="text-4xl font-bold">Welcome Back To your Admin Panel</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card: Lessons */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-semibold text-lg mb-2">Total Lessons</h3>
          <p className="text-gray-600 text-2xl font-bold">{lessonCount}</p>
        </div>

        {/* Card: Tutorials */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-semibold text-lg mb-2">Total Tutorials</h3>
          <p className="text-gray-600 text-2xl font-bold">{tutorialCount}</p>
        </div>

        {/* Card: Users */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-semibold text-lg mb-2">Total Users</h3>
          <p className="text-gray-600 text-2xl font-bold">{userCount}</p>
        </div>

        {/* Card: Vocabularies */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-semibold text-lg mb-2">Total Vocabularies</h3>
          <p className="text-gray-600 text-2xl font-bold">{vocabularyCount}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
