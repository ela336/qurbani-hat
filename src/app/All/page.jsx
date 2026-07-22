import Image from "next/image";
import Link from "next/link";
import cows from "../data/cows.json";
import Sort from "../components/Sort";


const All = () => {

  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      
      <div className="text-center mb-10">
        <h1 className="text-xl sm:text-4xl font-bold text-green-700">
          All Qurbani Animals
        </h1>
       <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
  Browse our collection of healthy and verified Qurbani animals from
  trusted farmers across Bangladesh. Choose the perfect animal for your
  Qurbani.
</p>
      </div>

       
     <Sort cows={cows} ></Sort>
    

    
    </section>
  );
};

export default All;