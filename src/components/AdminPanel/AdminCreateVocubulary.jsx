import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useAuth from "../../hooks/useAuth";
import Field from "../common/Field";
import Loading from "../common/Loading";
import {
  useAddByAdminVocabularyMutation,
  useUpdateByAdminVocabularyByIdMutation,
} from "../features/lessons/adminLessonApi";
import { useGetAllLessonsQuery } from "../features/lessons/lessonApi";
import { clearVocubularyLesson } from "../features/lessons/vocubularySlice";

const AdminCreateVocubulary = () => {
  const user = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedVocubulary = useSelector(
    (state) => state.vocubulary.selectedVocubulary
  );
  const isEditMode = !!selectedVocubulary;
  const [addByAdminVocabulary, { data: lesson, isLoading: vocubularyLoading }] =
    useAddByAdminVocabularyMutation();

  const [updateByAdminVocabularyById, { isLoading: updateVocubularyLoading }] =
    useUpdateByAdminVocabularyByIdMutation();

  const {
    data: lessons,
    isLoading: lessonsLoading,
    isError: lessonIsError,
    error: lessonError,
  } = useGetAllLessonsQuery();
  if (lessonIsError) {
    return (
      <div className="text-red-500 font-semibold">
        {lessonError?.data.message}
      </div>
    );
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isEditMode && selectedVocubulary) {
      setValue("word", selectedVocubulary?.word || "");
      setValue("pronunciation", selectedVocubulary?.pronunciation || "");
      setValue("meaning", selectedVocubulary?.meaning || "");
      setValue("whenToSay", selectedVocubulary?.whenToSay || "");
      setValue("lessonNumber", selectedVocubulary?.lessonNumber || "");
    }
  }, [isEditMode, selectedVocubulary, setValue]);

  const VocublarySubmit = async (formData) => {
    try {
      const dataToSend = {
        ...formData,
        adminEmail: user.email,
      };

      if (isEditMode) {
        const result = await updateByAdminVocabularyById({
          vocId: selectedVocubulary._id,
          data: dataToSend,
        }).unwrap();
        if (result.success === true) {
          toast.success("Vocubulary Updated Successfully");
          dispatch(clearVocubularyLesson());
          navigate(`/admin/vocabularylist`);
        }
      } else {
        const result = await addByAdminVocabulary(dataToSend).unwrap();
        if (result.success === true) {
          toast.success("Vocubulary Added Successfully");
          dispatch(clearVocubularyLesson());
          navigate(`/admin/vocabularylist`);
        }
      }
    } catch (error) {
      toast.error(error.data?.message || "An error occurred");
    }
  };

  if (vocubularyLoading || updateVocubularyLoading || lessonsLoading) {
    return <Loading />;
  }

  return (
    <main className="md:flex-grow px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            {isEditMode ? "Edit Vocubulary" : " Create Vocubulary"}
          </h2>

          <form onSubmit={handleSubmit(VocublarySubmit)}>
            <div className="mb-4">
              <Field
                label={"Word"}
                htmlFor="word"
                className="block text-sm font-medium text-gray-700 mb-1"
                error={errors.word}
              >
                <input
                  type="text"
                  id="word"
                  name="word"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
                  placeholder="Word"
                  {...register("word", {
                    required: "Word is Required",
                  })}
                />
              </Field>
            </div>
            <div className="mb-4">
              <Field
                label={"Pronunciation"}
                htmlFor="pronunciation"
                className="block text-sm font-medium text-gray-700 mb-1"
                error={errors.pronunciation}
              >
                <input
                  type="text"
                  id="pronunciation"
                  name="pronunciation"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
                  placeholder="Pronunciation"
                  {...register("pronunciation", {
                    required: "Pronunciation is Required",
                  })}
                />
              </Field>
            </div>
            <div className="mb-4">
              <Field
                label={"Meaning"}
                htmlFor="meaning"
                className="block text-sm font-medium text-gray-700 mb-1"
                error={errors.meaning}
              >
                <input
                  type="text"
                  id="meaning"
                  name="meaning"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
                  placeholder="Meaning"
                  {...register("meaning", {
                    required: "Meaning is Required",
                  })}
                />
              </Field>
            </div>
            <div className="mb-4">
              <Field
                label={"When To Say"}
                htmlFor="whenToSay"
                className="block text-sm font-medium text-gray-700 mb-1"
                error={errors.whenToSay}
              >
                <input
                  type="text"
                  id="whenToSay"
                  name="whenToSay"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
                  placeholder="When To Say"
                  {...register("whenToSay", {
                    required: "When To Say is Required",
                  })}
                />
              </Field>
            </div>

            <div className="mb-6">
              <Field
                label={"Lesson Number"}
                htmlFor="lessonNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
                error={errors.lessonNumber}
              >
                <select
                  id="lessonNumber"
                  name="lessonNumber"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
                  {...register("lessonNumber", {
                    required: "Lesson Number is Required",
                  })}
                >
                  <option value="">Select Lesson Number</option>
                  {lessons?.data?.map((lesson) => (
                    <option
                      key={lesson._id}
                      value={lesson.lessonNumber}
                      selected={
                        lesson.lessonNumber === selectedVocubulary?.lessonNumber
                      }
                    >
                      Lesson No- {lesson.lessonNumber} - {lesson.lessonName}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <button
              type="submit"
              disabled={vocubularyLoading || updateVocubularyLoading}
              className="w-full block text-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {isEditMode ? "Update" : "Next"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AdminCreateVocubulary;
