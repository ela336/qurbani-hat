import Image from "next/image";
import Link from "next/link";


const Banner = () => {
  return (
    <section className="hero min-h-[90vh] bg-gradient-to-r from-green-50 to-emerald-100">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10 max-w-7xl">

        
        <div className="flex-1">
          <Image 
            src="/assets/heroimg.jpg"
            alt="Qurbani Cow"
            width={650}
            height={500}
            priority
            className="rounded-2xl shadow-2xl object-cover w-full"
          />
        </div>

        
        <div className="flex-1">
          <span className="badge badge-success badge-lg mb-4">
            Eid-ul-Adha 2026
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Find Your Perfect
            <span className="text-green-600"> Qurbani Animal </span>
            With Confidence
          </h1>

          <p className="py-6 text-gray-600 text-lg">
            Browse verified cows, goats, bulls, and sheep from trusted sellers
            across Bangladesh. Compare prices, explore details, and choose the
            perfect animal for your Qurbani.
          </p>

          <div className="mx-auto">
            <Link href="/All">
              <button className="btn bg-white text-[#184B2D] text-sm sm:text-xl w-35 sm:w-100 h-13 border border-4 border-[#184B2D]  ml-20 shadow-2xl">
                All Animals
              </button>
            </Link>

            
          </div>

         
        </div>

      </div>
    </section>
  );
};

export default Banner;