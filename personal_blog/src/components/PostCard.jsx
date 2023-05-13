import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({post}) => {
  console.log(post)
  
  return (
    <div className='bg-[#e4dcc9] font-Special shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img
        src={post.featuredImage.url}
        alt={post.title}
        className='object-top absolute h-full w-full object-cover shadow-lg rounded-t-lg:rounded-lg'
        />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-black">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-automr-8  '>

         <img
          src={post.author.photo.url}
          heigth="30px"
          width="30px"
          />
          <p className='inline align-center font-black text-semibold ml-8'>{post.author.name}</p>
        

        </div>
      </div>
      <p classname='align-center font-mono text-lg px-4 lg:px-20 mb-8 ml-8'>{post.excerpt}</p>
      
      <div className="text-right mb-3 mr-4">
      <Link href={`/post/${post.slug}`}>
        <span className='transition duration-500 text-center inline-block bg-blue-600 rounded-full cursor-pointer hover:text-white-500 px-8 py-3'>Continue Reading
        </span></Link>
       </div> 
    </div>

  )
}

export default PostCard
