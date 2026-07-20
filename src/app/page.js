import Image from "next/image";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import Tips from "./components/Tips";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans ">
      <Banner></Banner>
      <Featured></Featured>
      <Tips></Tips>
    </div>
  );
}
