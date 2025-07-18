"use client";
import Button from "@/components/Buttom";
import useRegister from "@/hooks/useRegister";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  re_password: string;
};

const Register = () => {
  const { mutate } = useRegister();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const password = watch("password");
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    mutate({
      userName: data.email,
      password: data.password,
    });
  };
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="text-4xl">Register</div>
      <div className="text-2xl ">Create a new Account</div>
      <hr className="border-t-2 border-gray-600 mb-4" />
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Email"
          className="border rounded border-gray-200 p-4 text-xl w-100"
          {...register("email", {
            required: "Please enter a email.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email.",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-600">{errors.email.message}</span>
        )}
        <div className="flex flex-row items-center gap-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border rounded border-gray-200 p-4 text-xl w-100"
            {...register("password", {
              required: "Please enter the password.",
              minLength: {
                value: 6,
                message: "A valid password must between 6 to 20 characters.",
              },
              maxLength: {
                value: 20,
                message: "A valid password must between 6 to 20 characters.",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/,
                message:
                  "A valid password must include uppercase, lowercase, number, and symbol(e.g., !@#$%)",
              },
            })}
          />
          <span onClick={togglePassword}>
            {showPassword ? (
              <EyeSlashIcon className="w-8 h-8 text-gray-400" />
            ) : (
              <EyeIcon className="w-8 h-8 text-gray-400" />
            )}
          </span>
        </div>

        {/* errors will return when field validation fails  */}
        {errors.password && (
          <span className="text-red-600">{errors.password.message}</span>
        )}
        <div className="flex flex-row gap-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="border rounded border-gray-200 p-4 text-xl w-100"
            {...register("re_password", {
              required: "Please confirm your password.",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
        </div>
        {errors.re_password && (
          <span className="text-red-600">{errors.re_password.message}</span>
        )}
        <Button type="submit">Create Account</Button>
      </form>
    </div>
  );
};

export default Register;
