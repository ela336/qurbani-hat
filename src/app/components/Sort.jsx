"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const Sort = ({cows}) => {
   
    const cpyani=[...cows];
    const [sortan,setsortani]=useState("");
    console.log(sortan);
  
    if (sortan === "low") {
  cpyani.sort((a, b) => a.price - b.price);
}
if (sortan === "high") {
  cpyani.sort((a, b) => b.price - a.price);
}

    

    return (
        <div>
        <div className="flex items-center gap-3 m-8">
    <label
      htmlFor="price-sort"
      className="font-semibold text-green-950"
    >
      Sort by Price
    </label>
        <select
      id="price-sort"
      className="select select-bordered select-success w-52"
      defaultValue=""
      onChange={(e)=> setsortani(e.target.value)}
    >
      <option value="" disabled>
        All animals
      </option>
      <option value="low">Price: Low → High</option>
      <option value="high">Price: High → Low</option>
    </select>
    </div>

   < div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cpyani.map((animal) => (
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
      </div>

    
  
    );
};

export default Sort;