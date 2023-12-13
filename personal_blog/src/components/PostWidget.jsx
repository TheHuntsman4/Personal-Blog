import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

import { getSimilarPosts, getRecentPosts } from '../services';


const ImageLoader=({src})=>src;


const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white bg-opacity-[75%] shadow-lg rounded-lg p-8 pb-12 mb-8 ">
      <h3 className="text-xl mb-8 font-semibold border-b-4 border-black pb-4 text-black">{'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              loader={ImageLoader}
              alt={post.title}
              height="60"
              width="60"
              className="rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-black font-md">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} className="text-md font-semibold text-black" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};


export default PostWidget;