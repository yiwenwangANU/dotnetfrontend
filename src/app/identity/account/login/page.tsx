"use client";
import Button from "@/components/Buttom";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { mutation } from "@/hooks/useLogin";
type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login = () => {
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
    console.log(data);
    if (data.rememberMe) {
      localStorage.setItem("rememberedEmail", data.email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
    mutation.mutate({
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
          className="border rounded border-gray-200 p-4 text-xl"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded border-gray-200 p-4 text-xl"
          {...register("password", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}
        <div className="flex flex-row gap-3">
          <input type="checkbox" id="rememberMe" {...register("rememberMe")} />
          <label htmlFor="rememberMe">Remember me?</label>
        </div>
        <Button type="submit">Log in</Button>
      </form>
    </div>
  );
};

export default Login;
