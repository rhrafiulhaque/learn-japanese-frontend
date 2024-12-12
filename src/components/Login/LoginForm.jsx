import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Field from "../common/Field";
import Loading from "../common/Loading";
import { useLoginMutation } from "../features/auth/authApi";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { data, isLoading, isError, error: responseError, isSuccess }] =
    useLoginMutation();

  if (isLoading) {
    return <Loading />;
  }

  const submitForm = async (formData) => {
    try {
      const result = await login(formData).unwrap();
      console.log(result);
      if (result.success === true) {
        if (result.data.user.role === "admin") {
          toast.success("Welcome to Admin Panel");
          navigate("/admin/dashboard");
        } else {
          toast.success("Welcome to Learn Japanese..");
          navigate("/");
        }
      }
    } catch (error) {
      const errorMessage = error?.data?.message || "Unable to log in!";
      toast.error(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="mb-4">
        <Field
          label=" Enter your  email address"
          htmlFor={"email"}
          className="block mb-2"
          error={errors.email}
        >
          <input
            {...register(
              "email",
              { required: "Email is Required" },
              {
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              }
            )}
            type="email"
            id="email"
            className={`w-full px-4 py-3 rounded-lg border border-gray-300 ${
              !!errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Username or email address"
          />
        </Field>
      </div>
      <div className="mb-6">
        <Field
          label=" Enter your Password"
          htmlFor="password"
          className="block mb-2"
          error={errors.password}
        >
          {/* Here i Donot Validate the Password Validation. like have One UpperCase and a small case , must have numeric Number and Special Character because backend accepted anything. there have no requirement on assingment description and i  will be do it later.  */}
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
            className={`w-full px-4 py-3 rounded-lg border border-gray-300 ${
              !!errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Password"
          />
        </Field>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-lg mb-4"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
