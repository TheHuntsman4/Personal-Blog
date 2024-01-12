import React from "react";
import "../styles/Home.module.css";
import Image from "next/image";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3
            key={index}
            className="text-xl text-black font-semibold mb-4 font-Roboto"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8 text-[1.2rem] text-black font-Roboto">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4
            key={index}
            className="text-md font-semibold mb-4 font-Roboto text-black"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "heading-two":
        return (
          <h2
            key={index}
            className="text-2xl font-semibold mb-4 font-Roboto text-black"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "image":
        return (
          <div className="w-full flex flex-wrap justify-center items-center">
            <img
              className="pb-[2rem]"
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
            />
          </div>
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="mx-auto w-3/4">
        <div className="bg-white bg-opacity-75 shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
          <div className="relative overflow-hidden shadow-md mb-6">
            <img
              src={post.featuredImage.url}
              alt=""
              className="object-top h-full w-full object-cover rounded-t-lg lg:rounded-lg"
            />
          </div>
          <div className="px-4 lg:px-0">
            <div className="flex items-center mb-8 w-full">
              <div className="hidden md:flex justify-center lg:mb-0 lg:w-auto mr-8 items-center">
                <img
                  alt={post.author.name}
                  height="30px"
                  width="30px"
                  className="align-middle rounded-full"
                  src={post.author.photo.url}
                />
                <p className="inline align-middle text-black ml-2 font-medium text-lg font-Roboto">
                  {post.author.name}
                </p>
              </div>
            </div>
            <h1 className="mb-8 text-3xl font-semibold font-Roboto text-black">
              {post.title}
            </h1>
            {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) =>
                getContentFragment(itemindex, item.text, item)
              );

              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
