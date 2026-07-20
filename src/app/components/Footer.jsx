import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

    
        <div>
          <h2 className="text-2xl font-bold text-green-500 mb-4">
            QurbaniHat
          </h2>
          <p className="text-sm leading-7">
            QurbaniHat is an online marketplace where buyers can easily
            find healthy and verified sacrificial animals while sellers
            can reach customers across the country safely and conveniently.
          </p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-green-500 duration-300">
                Home
              </Link>
            </li>

            <li>
              <Link href="/allCows" className="hover:text-green-500 duration-300">
                All Cows
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-green-500 duration-300">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-green-500 duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact Info
          </h3>

          <div className="space-y-4 text-sm">

            

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-500" />
              <span>support@qurbanihat.com</span>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-green-500 mt-1" />
              <span>Dhaka, Bangladesh</span>
            </div>

          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Follow Us
          </h3>

          <p className="mb-5 text-sm">
            Stay connected with us through social media.
          </p>

          <div className="flex gap-4">

            <a
              href="#"
              className="bg-green-600 hover:bg-green-500 p-3 rounded-full duration-300"
            >
              <FaFacebookF className="text-white" />
            </a>

            <a
              href="#"
              className="bg-green-600 hover:bg-green-500 p-3 rounded-full duration-300"
            >
              <FaInstagram className="text-white" />
            </a>

            <a
              href="#"
              className="bg-green-600 hover:bg-green-500 p-3 rounded-full duration-300"
            >
              <FaLinkedinIn className="text-white" />
            </a>

            <a
              href="#"
              className="bg-green-600 hover:bg-green-500 p-3 rounded-full duration-300"
            >
              <FaYoutube className="text-white" />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-5 text-center text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-green-500 font-semibold">
          QurbaniHat
        </span>
        . All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;