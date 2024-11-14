import uploadjpg from "../assets/upload.jpg";
import { Button } from "./ui/button";
import { ArrowRight } from 'lucide-react';

function Home() {
  return (
    <>
      <section>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mt-16">
          <span>Git </span>
          <span className=" text-purple-400">Bucket</span>:{" "}
          <span className=" text-slate-800">
            {" "}
            <span className=" border-b-4 border-yellow-400">Free</span> Image
            Hosting Service
          </span>
        </h1>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center my-4">
          The Platform for every beginer developer !
        </h2>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center flex justify-center items-center flex-wrap">
          <span className=" 2xl:w-[50%] md:w-[50%] w-[80%] text-slate-600">
            This is git bucket 🔥 a totally free cloud image hosting service for
            beginer developers. ⚠️ It is not recommended for production useage
            as this platform is only made for personal projects .
          </span>
        </h4>
      </section>
      <section className="flex justify-center items-center mt-20">
        <div className=" w-52 border-2 border-purple-400 rounded-xl flex-col justify-center items-center overflow-hidden">
          <img src={uploadjpg} alt="" />
          <h1 className=" text-center font-medium">Host your image 🚀</h1>
          <div className="flex justify-center items-center">
            <Button className="m-3">Host<ArrowRight className="ml-2"/></Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
