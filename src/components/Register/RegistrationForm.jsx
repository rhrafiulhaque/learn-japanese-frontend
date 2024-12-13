import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Field from "../common/Field";
import Loading from "../common/Loading";
import { useSignupMutation } from "../features/auth/authApi";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [signup, { isLoading }] = useSignupMutation();

  const password = watch("password");

  if (isLoading) {
    return <Loading />;
  }

  const submitForm = async (formData) => {
    const dataToSubmit = new FormData();

    // Add form data fields to FormData
    dataToSubmit.append("name", formData.name);
    dataToSubmit.append("email", formData.email);
    dataToSubmit.append("password", formData.password);
    dataToSubmit.append("confirmPassword", formData.confirmPassword);

    // Add profile photo to FormData
    if (formData.profilePhoto?.[0]) {
      dataToSubmit.append("profilePhoto", formData.profilePhoto[0]);
    }

    try {
    
      const result = await signup(dataToSubmit).unwrap();
      if (result.success) {
        toast.success("Registration Successful. Please Login with Credentials");
        navigate("/login");
      }
    } catch (error) {
      const errorMessage =
        error?.data?.message || "Unable to register the user!";
      toast.error(errorMessage);
    }
  };

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit(submitForm)}>
      <div>
        <div className="mb-4">
          <Field label="Name" htmlFor="name" error={errors.name}>
            <input
              {...register("name", {
                required: "Name is Required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only alphabetic letters are accepted",
                },
              })}
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              placeholder="John Doe"
            />
          </Field>
        </div>

        <div className="mb-4">
          <Field label="Email" htmlFor="email" error={errors.email}>
            <input
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              placeholder="Email address"
            />
          </Field>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="mb-6">
          <Field
            label="Enter your Password"
            htmlFor="password"
            error={errors.password}
          >
            <input
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 8,
                  message: "Your Password Must be at least 8 characters",
                },
              })}
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              placeholder="Password"
            />
          </Field>
        </div>

        <div className="mb-6">
          <Field
            label="Confirm Password"
            htmlFor="confirmPassword"
            error={errors.confirmPassword}
          >
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              placeholder="Confirm Password"
            />
          </Field>
        </div>
      </div>

      <div className="mb-4">
        <Field
          label="Profile Picture"
          htmlFor="profilePhoto"
          error={errors.profilePhoto}
        >
          <input
            {...register("profilePhoto", {
              required: "Profile Picture is required",
            })}
            type="file"
            id="profilePhoto"
            className="w-full px-4 py-3 rounded-lg border border-gray-300"
            accept="image/*"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-lg mb-2"
        disabled={isLoading}
      >
        {isLoading ? "Creating..." : "Create Account"}
      </button>
    </form>
  );
};

export default RegistrationForm;
