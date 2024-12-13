import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Field from "../common/Field";
import Loading from "../common/Loading";
import {
  useAddByAdminTutorialMutation,
  useUpdateByAdminTutorialByIdMutation,
} from "../features/lessons/tutorialApi";
import { clearSelectedTutorial } from "../features/lessons/tutorialSlice";

const AdminCreateTutorial = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedTutorial = useSelector(
    (state) => state.tutorial.selectedTutorial
  );
  console.log(selectedTutorial);
  const isEditMode = !!selectedTutorial;
  const [addByAdminTutorial, { data: tutorial, isLoading: tutorialLoading }] =
    useAddByAdminTutorialMutation();
  const [updateByAdminTutorialById, { isLoading: updateTutorialLoading }] =
    useUpdateByAdminTutorialByIdMutation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isEditMode && selectedTutorial) {
      setValue("tutorialLink", selectedTutorial?.tutorialLink || "");
      setValue("tutorialTitle", selectedTutorial?.tutorialTitle || "");
    }
  }, [isEditMode, selectedTutorial, setValue]);

  const TutorialSubmit = async (formData) => {
    try {
      if (isEditMode) {
        const result = await updateByAdminTutorialById({
          tutorialId: selectedTutorial._id,
          data: formData,
        }).unwrap();
        if (result.success === true) {
          toast.success("Tutorial Updated Successfully");
          dispatch(clearSelectedTutorial());
          navigate(`/admin/tutoriallist`);
        }
      } else {
        const result = await addByAdminTutorial(formData).unwrap();
        if (result.success === true) {
          toast.success("Tutorial Added Successfully");
          dispatch(clearSelectedTutorial());
          navigate(`/admin/tutoriallist`);
        }
      }
    } catch (error) {
      toast.error(error.data?.message || "An error occurred");
    }
  };

  if (tutorialLoading || updateTutorialLoading) {
    return <Loading />;
  }

  return (
    <main className="md:flex-grow px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            {isEditMode ? "Edit Tutorial" : " Create Tutorial"}
          </h2>

          <form onSubmit={handleSubmit(TutorialSubmit)}>
            <div className="mb-4">
              <Field
                label={"Tutotial Title"}
                htmlFor="tutorialTitle"
                className="block text-sm font-medium text-gray-700 mb-1"
                error={errors.tutorialTitle}
              >
                <input
                  type="text"
                  id="tutorialTitle"
                  name="tutorialTitle"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
                  placeholder="Tutotial Title"
                  {...register("tutorialTitle", {
                    required: "Tutotial Title is Required",
                  })}
                />
              </Field>
            </div>

            <div className="mb-6">
              <Field
                label={"Tutorial Link (embeded)"}
                htmlFor="tutorialLink"
                className="block text-sm font-medium text-gray-700 mb-1"
                error={errors.tutorialLink}
              >
                <input
                  type="text"
                  id="tutorialLink"
                  name="tutorialLink"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
                  placeholder="Tutorial Link (embeded)"
                  {...register("tutorialLink", {
                    required: "Tutorial Link (embeded) is Required",
                  })}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={tutorialLoading}
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

export default AdminCreateTutorial;
