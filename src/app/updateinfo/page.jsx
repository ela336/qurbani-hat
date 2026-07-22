"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"

const Updateinfo = () => {
const handleupdate =async(e)=>{
         e.preventDefault();
         const form = e.target;
         const name =e.target.name.value;
         const image=e.target.image.value;
 try {
await authClient.updateUser({
    
    name,
    image,
});
 
 alert("Profile Updated!");

  form.reset();
    }catch (error) {
    console.log(error);
    alert("Something went wrong!");
  }
    };
  return (
    <section className="min-h-screen bg-green-50 flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-green-700">
          Update Information
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Update your profile information below.
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleupdate}>
          <div>
            <label className="font-medium text-gray-700">
              Profile Image URL
            </label>

           <input
  name="image"
  type="text"
  placeholder="Enter image URL"
  className="input input-bordered w-full mt-2"
/>
          </div>

          <div>
            <label className="font-medium text-gray-700">
              Full Name
            </label>

           <input
  name="name"
  type="text"
  placeholder="Enter your name"
  className="input input-bordered w-full mt-2"
/>
          </div>

          <button
            type="submit"
            className="btn btn-success w-full"
            
          >
            Update Information
          </button>

          <Link
            href="/profile"
            className="btn btn-outline btn-success w-full"
          >
            Back to Profile
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Updateinfo;