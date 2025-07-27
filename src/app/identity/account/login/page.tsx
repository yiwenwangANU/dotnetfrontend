"use client";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useLogin from "@/hooks/useLogin";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login = () => {
  const { mutate } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  // Pre-fill email on mount
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setValue("email", rememberedEmail);
      setValue("rememberMe", true);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.rememberMe) {
      localStorage.setItem("rememberedEmail", data.email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
    mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="text-4xl">Login</div>
      <div className="text-2xl ">Use a local account to log in</div>
      <hr className="border-t-2 border-gray-600 mb-4" />
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Email"
          className="border rounded border-gray-200 p-4 text-xl w-100"
          {...register("email", { required: "Please enter a email." })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <div className="flex flex-row gap-2 items-center">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border rounded border-gray-200 p-4 text-xl w-100"
            {...register("password", {
              required: "Please enter your password.",
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
        {errors.password && <span>{errors.password.message}</span>}

        <div className="flex flex-row gap-3">
          <input type="checkbox" id="rememberMe" {...register("rememberMe")} />
          <label htmlFor="rememberMe">Remember me?</label>
        </div>
        <Button type="submit" className="w-100">
          Log in
        </Button>
      </form>
      <Link
        href={"/identity/account/register"}
        className="text-blue-600 underline items-start"
      >
        Create a new account
      </Link>
    </div>
  );
};

export default Login;
