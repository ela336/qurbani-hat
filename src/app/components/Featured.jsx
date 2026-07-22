import React from "react";
import Image from "next/image";
import Link from "next/link";

import cows from "../data/cows.json";



const Featured = () => {
  
  
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-5">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#15713b]">
            Featured Animals
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Explore our handpicked premium Qurbani animals from trusted sellers
            across Bangladesh.
          </p>
        </div>

      
       

         <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cows.filter((animal)=>animal.id<5).map((animal) => (
            <div 
              key={animal.id}
              className="card bg-base-100  border border-2 border-green-700 shadow-xxl hover:shadow-2xl transition duration-300"
            >
              <Image className="w-full"
              src={animal.image}
              alt={animal.name}
              width={400}
               height={20}
               />
              

              <div className="card-body">
                <h2 className="card-title">{animal.name}</h2>

                <p className="text-gray-500">
                  <span className="font-semibold">Breed:</span>{" "}
                  {animal.breed}
                </p>

                <p className="text-gray-500">
                  <span className="font-semibold">Location:</span>{" "}
                  {animal.location}
                </p>

               

               
              </div>
            </div>
          ))}
        </div>
       
      </div>
      
    </section>
  );
};

export default Featured;