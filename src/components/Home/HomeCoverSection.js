import { sortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  console.log("oi" + blog.image.blurhashDataUrl);
  return (
    <div className="w-full inline-block">
      <article className=" flex flex-col items-start justify-end  relative h-[60vh] sm:h-[85vh]">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 z-0
            "
        />
        <Image
          src="/home.jpg"
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt="/home.jpg"
          fill
          className="w-full h-full object-center object-cover  -z-10"
          sizes="100vw"
          priority
        />
        <div className=" align-middle absolute inset-0 flex flex-col items-center justify-start text-white text-center">
          <div className="align-middle w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col  z-0 text-light m-[25px]">
            <Link href={blog.url} className="mt-6"></Link>
            <p className=" align-middle sm:inline-block mt-4 font-in font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-5xl ">
              Welcome
            </p>
            <p className="sm:inline-block mt-4 font-in font-bold capitalize text-lg sm:text-xl md:text-1xl lg:text-3xl ">
              Ultimate Reviews and Suggestions
            </p>
            <p className="sm:inline-block mt-4 md:text-lg lg:text-2xl font-in">
              Let’s help reduce the time it takes you to make that decision
            </p>
          </div>
          <Link href="/blog">
            <button className="-mt-20 bg-white hover:bg-white-200 text-black py-2 px-4 rounded">
              Start Here
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
