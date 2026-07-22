import Image from "next/image";
import cows from "../../data/cows.json";

const Details = async ({ params }) => {
  const { details } = await params;
  console.log(details);

  const cow = cows.find((cow) => cow.id === parseInt(details));

  if (!cow) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold text-red-500">
          Animal Not Found
        </h2>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
    
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700">
          Animal Details
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Browse our collection of healthy and verified Qurbani animals from
          trusted farmers across Bangladesh.
        </p>
      </div>

      
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2 gap-10">
        
        <div className="relative h-[500px] w-full">
          <Image
            src={cow.image}
            alt={cow.name}
            fill
            className="object-cover"
          />
        </div>

        
        <div className="p-8 flex flex-col justify-center">
          <span className="badge badge-success badge-lg w-fit mb-4">
            {cow.category}
          </span>

          <h2 className="text-4xl font-bold text-gray-800">
            {cow.name}
          </h2>

          <p className="text-lg text-gray-500 mt-2">
            {cow.breed} • {cow.type}
          </p>

          <div className="divider"></div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-gray-500">Price</p>
              <h3 className="text-2xl font-bold text-green-700">
                ৳ {cow.price.toLocaleString()}
              </h3>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-gray-500">Weight</p>
              <h3 className="text-2xl font-bold">
                {cow.weight} kg
              </h3>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-gray-500">Age</p>
              <h3 className="text-2xl font-bold">
                {cow.age} Years
              </h3>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-gray-500">Location</p>
              <h3 className="text-2xl font-bold">
                {cow.location}
              </h3>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">
              Description
            </h3>

            <p className="text-gray-600 leading-8">
              {cow.description}
            </p>
          </div>

          <button className="btn btn-success btn-lg mt-10 w-full">
            Contact Seller
          </button>
        </div>
      </div>
    </section>
  );
};

export default Details;