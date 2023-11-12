import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import siteMetadata from "@/src/utils/siteMetaData";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog?.author ? [blog.author] : siteMetadata.author,
        url: siteMetadata.twitter,
      },
    ],
  };

  return (
    <>
      <main className="my-1 pt-1 pb-1 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex flex-col justify-between px-4 mx-auto max-w-screen-xl">
          <Image
            src={blog.image.filePath.replace("../public", "")}
            alt="teste"
            height={650}
            width={1224}
            className="rounded-t-lg bg-fixed h-[650px] w-full bg-origin-content  bg-cover bg-no-repeat p-2"
          />

          <article className="my-12 prose lg:prose-xl dark:prose-invert w-full mx-auto max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <h1
              style={{ margin: "0px" }}
              className="prose-h1:my-0 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white"
            >
              {blog.title}
            </h1>

            <p
              style={{ margin: "0px" }}
              className="text-1xl font-extrabold leading-tight text-gray-500 lg:text-xl dark:text-white"
            >
              {blog.description}
            </p>

            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">
                {blog.author !== undefined ? (
                  <Image
                    width={"64"}
                    height={"64"}
                    className="mr-4 w-16 h-16 rounded-full"
                    src={blog.image.filePath.replace("../public", "")}
                    alt="nada"
                  />
                ) : (
                  " "
                )}

                <div className="flex flex-col">
                  <Link
                    href={`/author/oi`}
                    rel="author"
                    className="text-xl font-bold no-underline text-gray-900 dark:text-white"
                  >
                    "oi"
                  </Link>

                  <div className="flex flex-col md:flex-row ">
                    <p
                      style={{ margin: "0px" }}
                      className="ml-3 text-base font-light text-gray-500 dark:text-gray-400"
                    >
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        "February 8th, 2022"
                      </time>
                    </p>
                  </div>
                </div>
              </div>
            </address>

            <RenderMdx blog={blog} />
          </article>
        </div>
      </main>
    </>
  );
}
