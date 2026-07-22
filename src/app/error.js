"use client";

import Link from "next/link";

const Error = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-5">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center">

        {/* Error Icon */}
        <div className="text-8xl mb-4">⚠️</div>

        {/* Error Code */}
        <h1 className="text-6xl font-extrabold text-red-600">
          Error
        </h1>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Oops! Something Went Wrong
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 leading-7">
          We couldn't load this page because an unexpected error occurred.
          Please return to the homepage and try again.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="btn btn-success btn-wide mt-8"
        >
          🏠 Back to Home
        </Link>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-400">
          Qurbani Hat • Trusted Animal Marketplace
        </p>

      </div>
    </section>
  );
};

export default Error;