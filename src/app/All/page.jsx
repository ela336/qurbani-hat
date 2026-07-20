import Image from "next/image";
import Link from "next/link";
import cows from "../data/cows.json";

const All = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700">
          All Qurbani Animals
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Browse our collection of healthy and verified Qurbani animals from
          trusted farmers across Bangladesh. Choose the perfect animal for your
          Qurbani.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cows.map((animal) => (
          <div
            key={animal.id}
            className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <figure>
              <Image
                src={animal.image}
                alt={animal.name}
                width={400}
                height={250}
                className="h-60 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-xl">{animal.name}</h2>

              <div className="space-y-2 text-gray-600 text-sm">
                <p>
                  <span className="font-semibold text-black">Type:</span>{" "}
                  {animal.type}
                </p>

                <p>
                  <span className="font-semibold text-black">Breed:</span>{" "}
                  {animal.breed}
                </p>

                <p>
                  <span className="font-semibold text-black">Weight:</span>{" "}
                  {animal.weight} kg
                </p>

                <p>
                  <span className="font-semibold text-black">Age:</span>{" "}
                  {animal.age} Years
                </p>

                <p>
                  <span className="font-semibold text-black">Location:</span>{" "}
                  {animal.location}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-bold text-green-600">
                  ৳ {animal.price.toLocaleString()}
                </h3>
              </div>

              <div className="card-actions mt-4">
                <Link
                  href={`/animals/${animal.id}`}
                  className="btn btn-success w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default All;