"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"; 
import {usePathname} from "next/navigation";

const Navbar = () => {
  const pathname=usePathname();
  
  return (
    <div className="bg-white text-[#184B2D] shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">

        
        <div className="navbar-start">

          
          <div className="dropdown lg:hidden">
            

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-white text-black shadow z-50"
            >
              <li className="text-[#184B2D] font-bold">
                <Link href="/" className={pathname==='/' ? " bg-[#F4A62A] text-white" : ""}>Home</Link>
              </li>
              <li className="text-[#184B2D] font-bold">
                <Link href="/all-animals" className={pathname==="/all-animals" ? "bg-[#F4A62A] text-white" : ""}>All Animals</Link>
              </li>
            </ul>
          </div>

          
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Qurbani Hat"
              width={150}
              height={150}
            />
          </Link>
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 text-base font-medium">
            <li className="text-[#184B2D] text-[20px] font-normal">
              <Link href="/" className={pathname==='/' ? " bg-[#184B2D] text-white" : ""}>Home</Link>
            </li>
            <li className="text-[#184B2D] text-[20px] font-normal">
              <Link href="/All" className={pathname==="/All" ? "bg-[#184B2D] text-white" : ""}>All Animals</Link>
            </li>
          </ul>
        </div>

        
        <div className="navbar-end gap-2">
          <button className="btn bg-[#F4A62A] hover:bg-[#E78B1A] text-white border-none rounded-xl px-6">
            Login
          </button>
          <button className="btn bg-[#F4A62A] hover:bg-[#E78B1A] text-white border-none rounded-xl px-6">
            Register
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;