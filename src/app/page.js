import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <HomeCoverSection blogs={allBlogs} />
      </main>
      {/*} <div
        className="!important mt-0 p-4 sm:6 md:p-20 lg:p-5 mx-auto flex flex-col items-center bg-neutral-100 lg:flex-row md:max-w-full 
      justify-evenly dark:bg-neutral-600"
      ></div>*/}
      <main className="flex flex-col items-center justify-center">
        {/*<FeaturedPosts blogs={allBlogs} />*/}
        <RecentPosts blogs={allBlogs} />
      </main>
    </>
  );
}
