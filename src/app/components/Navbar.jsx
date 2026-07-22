"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

 
import {usePathname} from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const pathname=usePathname();
  const { data: session,isPending } = authClient.useSession();
  const user=session?.user;
  const router = useRouter();
  const handleLogout = async () => {
  await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/login");
    },
  },
});
};
  
  return (
    <div className="bg-white text-[#184B2D] shadow-md border border-4 w-full border-[#184B2D]">
      <div className="navbar max-w-7xl mx-auto px-4">

        
       <div className="navbar-start">
  
  <div className="dropdown md:hidden">
    <label tabIndex={0} className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </label>

    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-50 w-52 rounded-xl bg-white shadow-lg"
    >
      <li>
        <Link
          href="/"
          className={
            pathname === "/"
              ? "bg-[#184B2D] text-white"
              : "text-[#184B2D]"
          }
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/All"
          className={
            pathname === "/All"
              ? "bg-[#184B2D] text-white"
              : "text-[#184B2D]"
          }
        >
          All Animals
        </Link>
      </li>
    </ul>
  </div>

  {/* Logo */}
  <Link href="/" className="ml-2 md:ml-0">
    <Image
      src="/assets/logo.png"
      alt="Qurbani Hat"
      width={150}
      height={150}
      className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto"
    />
  </Link>
</div>

{/* Desktop Menu */}
<div className="navbar-center hidden md:flex">
  <ul className="menu menu-horizontal gap-2 lg:gap-4">
    <li>
      <Link
        href="/"
        className={`rounded-lg px-4 py-2 text-base lg:text-lg ${
          pathname === "/"
            ? "bg-[#184B2D] text-white"
            : "text-[#184B2D]"
        }`}
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        href="/All"
        className={`rounded-lg px-4 py-2 text-base lg:text-lg ${
          pathname === "/All"
            ? "bg-[#184B2D] text-white"
            : "text-[#184B2D]"
        }`}
      >
        All Animals
      </Link>
    </li>
  </ul>
</div>

        {isPending?<span className="loading loading-spinner loading-xl mx-65"></span>: user?
         ( 
          <div className="navbar-end  gap-0 sm:gap-4">
  <p className="hidden sm:block text-base font-semibold text-green-700">
  Hi, <span className="font-bold text-gray-800">{user.name}</span>
</p>

  <div className="dropdown dropdown-end">
    <label
      tabIndex={0}
      className="btn btn-ghost h-auto px-3 py-2 rounded-xl hover:bg-green-50"
    >
      <div className="flex items-center gap-3">
        <div className="w-11 rounded-full overflow-hidden ring ring-green-500 ring-offset-2">
          <Image
            src="/assets/avater.jpg"
            alt="User Avatar"
            width={44}
            height={44}
          />
        </div>

        <div className="text-left hidden md:block">
          <p className="text-sm font-semibold text-gray-800">My Profile</p>
          <p className="text-xs text-gray-500">Account ▼</p>
        </div>
      </div>
    </label>

    <ul className="menu menu-sm dropdown-content mt-3 z-[1] w-56 rounded-2xl bg-white shadow-2xl border border-gray-100 p-2">
      <li>
        <Link href="/profile" className="font-medium">
          👤 My Profile
        </Link>
      </li>

      <li>
        <button
  onClick={handleLogout}
  className="text-red-600 font-medium hover:bg-red-50"
>
  🚪 Logout
</button>
      </li>
    </ul>
  </div>
</div>
         ):
        ( <div className="navbar-end gap-1 sm:gap-2 flex flex-col sm:flex-row">
  <Link
    href="/login"
    className="btn btn-sm sm:btn-md bg-[#F4A62A] hover:bg-[#E78B1A] text-white border-none rounded-lg sm:rounded-xl px-3 sm:px-5 lg:px-6 text-xs sm:text-sm lg:text-base"
  >
    Login
  </Link>

  <Link
    href="/register"
    className="btn btn-sm  sm:btn-md bg-[#F4A62A] hover:bg-[#E78B1A] text-white border-none rounded-lg sm:rounded-xl px-3 sm:px-5 lg:px-6 text-xs sm:text-sm lg:text-base"
  >
    Register
  </Link>
</div>)
        }
       

      </div>
    </div>
  );
};

export default Navbar;