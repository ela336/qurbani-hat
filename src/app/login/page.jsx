"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const Login = () => {
  const handlegooglesignin=async()=>{
     const data = await authClient.signIn.social({
    provider: "google",
  });
  }
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) =>
    {

       console.log(data);

       const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(data,res);
    }

  console.log(errors);
  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-12">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
        
          <h1 className="text-3xl font-bold text-center text-green-700">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mb-4">
            Login to your Qurbani Hat account.
          </p>

          
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
    
            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                
                {...register("email",{ required: "Email is required!!!" })}
              />
              {errors.email && <p className="text-red-600 text-[13px]">{errors.email.message}</p>}
            </div>

            
            <div>
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                
                {...register("password",{ required: "Passsword is required!!!" })}
              />
              {errors.password && <p className="text-red-600 text-[13px]">{errors.password.message}</p>}
              
            </div>

           

        
            <button
              type="submit"
              className="btn btn-success w-full"
            >
              Login
            </button>
          </form>

          
          <div className="divider">OR</div>

          
          <button className="btn btn-outline w-full" onClick={handlegooglesignin}>
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

          
          <p className="text-center mt-4">
            Do not have an account?{" "}
            <Link
              href="/register"
              className="text-green-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;