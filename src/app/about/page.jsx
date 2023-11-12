import React from "react";
import ImageFallback from "@/src/components/ImageFallback";

function About() {
  const title = "Reviews Plane was started in August of 2023.";
  const meta_title = "About";
  const content =
    "The purpose of the website is to provide meaningful recommendations of gift items for that special loved one on that special ocassion. We review items from multiple sites and categorise by relation, by ocassion, etc.";
  const image = "/images/avatar.png";

  return (
    <>
      <div className="row justify-center px-5 ">
        <div className="flex flex-col justify-center bg-white-100">
          <div className="text-white-800 text-center bg-white-300 px-4 py-2 m-2"></div>
          <div className="text-white-800 text-center bg-white-300 px-4 py-2 m-2"></div>
          <div className="text-white-800 text-center bg-white-300"></div>
          {image && (
            <ImageFallback
              className="mx-auto rounded-lg"
              src={image}
              width={200}
              height={200}
              alt={title}
            />
          )}
          <main className="pt-10">
            <div className="flex justify-center max-w-6xl flex-col mx-auto">
              <h2 className="text-4xl font-semibold tracking-tight text-center text-gray-700">
                {title}
              </h2>
              <div className="text-white-800 text-center bg-white-300 px-4 py-2 m-2"></div>
              <h3 className="text-2xl tracking-tight text-center text-gray-700">
                {content}
              </h3>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default About;
