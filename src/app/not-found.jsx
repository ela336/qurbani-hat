import Link from "next/link";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-5">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl font-extrabold text-green-700">404</h1>

        <h2 className="text-4xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-4 leading-7">
          Sorry! The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="btn btn-success btn-wide mt-8"
        >
          🏠 Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;