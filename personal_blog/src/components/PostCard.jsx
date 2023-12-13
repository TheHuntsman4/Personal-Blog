import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  console.log(post);

  return (
    <div className="bg-white bg-opacity-[75%] flex flex-col justify-center items-center shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative z-10 overflow-hidden shadow-md ">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full object-cover rounded-lg shadow-lg rounded-t-lg:rounded-lg"
        />
      </div>
      <h1 className="text-center text-[1.75rem] md:text-[3rem] font-semibold cursor-pointer text-black  py-[1rem]">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full"></div>
      <div className="px-[2rem] text-black  ">
        <p className="align-center text-black text-center text-[1.2rem] lg:px-20 ">
          {post.excerpt}
        </p>
      </div>
      <div className="">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 font-semibold text-white text-center inline-block bg-black rounded-full cursor-pointer hover:text-black hover:bg-white px-8 py-3 my-[2rem]">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
