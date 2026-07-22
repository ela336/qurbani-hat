
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const Profile = async() => {
     const session = await auth.api.getSession({
    headers: await headers(),
  });
   const user = session?.user;

  return (
    <section className="min-h-screen bg-green-50 py-14 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-500 h-40"></div>

          <div className="flex flex-col items-center -mt-16 px-8 pb-10">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
             <img
  src={user.image || "/assets/avater.jpg"}
  alt={user.name}
  className="w-32 h-32 rounded-full object-cover"
/>
</div>
            <h2 className="text-3xl font-bold text-gray-800 mt-5">
              {user.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {user.email}
            </p>

            <div className="grid md:grid-cols-2 gap-6 w-full mt-10">
              <div className="bg-green-50 rounded-2xl p-6">
                <p className="text-sm text-gray-500">Full Name</p>
                <h3 className="text-xl font-semibold text-gray-800 mt-1">
                   {user.name}
                </h3>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <p className="text-sm text-gray-500">Email Address</p>
                <h3 className="text-xl font-semibold text-gray-800 mt-1">
                  {user.email}
                </h3>
              </div>
            </div>

            <Link
              href="/updateinfo"
              className="btn btn-success btn-wide mt-10"
            >
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;