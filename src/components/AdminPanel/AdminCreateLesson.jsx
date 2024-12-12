import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Field from "../common/Field";
import Loading from "../common/Loading";
import {
  useAddByAdminLessonMutation,
  useUpdateLessonByAdminMutation,
} from "../features/lessons/adminLessonApi";
import { clearSelectedLesson } from "../features/lessons/lessonSlice";

const AdminCreateLesson = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedLesson = useSelector((state) => state.lesson.selectedLesson);
  const isEditMode = !!selectedLesson;
  const [addByAdminLesson, { data: lesson, isLoading: lessonLoading }] =
    useAddByAdminLessonMutation();
  const [updateLessonByAdmin, { isLoading: updateLessonLoading }] =
    useUpdateLessonByAdminMutation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isEditMode && selectedLesson) {
      setValue("lessonName", selectedLesson?.lessonName || "");
      setValue("lessonNumber", selectedLesson?.lessonNumber || "");
    }
  }, [isEditMode, selectedLesson, setValue]);

  const LessonSubmit = async (formData) => {
    try {
      if (isEditMode) {
        const result = await updateLessonByAdmin({
          lessonId: selectedLesson._id,
          data: formData,
        }).unwrap();
        if (result.success === true) {
          toast.success("Lesson Updated Successfully");
          dispatch(clearSelectedLesson());
          navigate(`/admin/lessonlist`);
        }
      } else {
        const result = await addByAdminLesson(formData).unwrap();
        if (result.success === true) {
          toast.success("Lesson Added Successfully");
          dispatch(clearSelectedLesson());
          navigate(`/admin/dashboard`);
        }
      }
    } catch (error) {
      toast.error(error.data?.message || "An error occurred");
    }
  };

  if (lessonLoading || updateLessonLoading) {
    return <Loading />;
  }

  return (
    <main className="md:flex-grow px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            {isEditMode
              ? "Edit Lesson"
              : " Give your Lesson Name and Lesson Number"}
          </h2>

          <form onSubmit={handleSubmit(LessonSubmit)}>
            <div className="mb-4">
              <Field
                label={"Lesson Name"}
                htmlFor="lessonName"
                className="block text-sm font-medium text-gray-700 mb-1"
                error={errors.lessonName}
              >
                <input
                  type="text"
                  id="lessonName"
                  name="lessonName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
                  placeholder="Lesson Name"
                  {...register("lessonName", {
                    required: "Lesson Name is Required",
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
                <input
                  type="number"
                  id="lessonNumber"
                  name="lessonNumber"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
                  placeholder="Lesson Number"
                  {...register("lessonNumber", {
                    required: "Lesson Number is Required",
                  })}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={lessonLoading}
              className="w-full block text-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AdminCreateLesson;
