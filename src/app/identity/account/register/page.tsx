import Button from "@/components/Buttom";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  re_password: string;
};

const Register = () => {
  //   const { mutate } = useLogin();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // mutate({
    //   userName: data.email,
    //   password: data.password,
    // });
  };
  const password = watch("password");

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="text-4xl">Login</div>
      <div className="text-2xl ">Use a local account to log in</div>
      <hr className="border-t-2 border-gray-600 mb-4" />
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Email"
          className="border rounded border-gray-200 p-4 text-xl"
          {...register("email", {
            required: "Please enter a email.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email.",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <input
          type="password"
          placeholder="Password"
          className="border rounded border-gray-200 p-4 text-xl"
          {...register("password", {
            required: "Please enter the password.",
            min: {
              value: 6,
              message: "A valid password must between 6 to 20 characters.",
            },
            max: {
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
        {/* errors will return when field validation fails  */}
        {errors.password && <span>{errors.password.message}</span>}
        <div className="flex flex-row gap-3">
          <input
            type="password"
            placeholder="Confirm Password"
            className="border rounded border-gray-200 p-4 text-xl"
            {...register("re_password", {
              required: "Please confirm your password.",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
        </div>
        {errors.re_password && <span>{errors.re_password.message}</span>}
        <Button type="submit">Create Account</Button>
      </form>
    </div>
  );
};

export default Register;
