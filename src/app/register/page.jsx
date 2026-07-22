"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
 import { useRouter } from "next/navigation";

const Register = () => {
  const handlegooglesignup=async()=>{
     const data = await authClient.signIn.social({
    provider: "google",
  });
  }
   const {
      register,
      handleSubmit,
       reset,
      
      formState: { errors },
    } = useForm();
    const router = useRouter();

    const onSub = async(data) =>{
       console.log(data);
       const {name,email,photo,password}=data;
       const { data:res,error } = await authClient.signUp.email({
    name: name, 
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/",
    
});
console.log(res,error);
if(error)
{
  alert(error.message);
}
if(res)
{
  alert("Signup Successfull");
  reset(); 

    router.push("/login"); 
}

    };
  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-12">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          
          <h1 className="text-3xl font-bold text-center text-green-700">
            Create Your Account
          </h1>

          <p className="text-center text-gray-500 mb-4">
            Register to buy or sell Qurbani animals.
          </p>

          

          <form className="space-y-4" onSubmit={handleSubmit(onSub)}>
            
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Full Name
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                {...register("name",{ required: "Name is required!!!" })}
              />
               {errors.name && <p className="text-red-600 text-[13px]">{errors.name.message}</p>}
            </div>

            
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Email
                </span>
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
                <span className="label-text font-semibold">
                  Photo URL
                </span>
              </label>

              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full"
              {...register("photo",{ required: "Photo URL is required!!!" })}
              />
               {errors.photo && <p className="text-red-600 text-[13px]">{errors.photo.message}</p>}
            </div>

            
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Password
                </span>
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                {...register("password",{ required: "Password is required!!!" })}
              />
               {errors.password && <p className="text-red-600 text-[13px]">{errors.password.message}</p>}
            </div>

            
            <button
              type="submit"
              className="btn btn-success w-full mt-2"
            >
              Register
            </button>
          </form>

          
          <div className="divider">OR</div>

          
          <button className="btn btn-outline w-full" onClick={handlegooglesignup} >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

    
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-green-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;