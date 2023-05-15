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
        className='object-top absolute h-full w-full object-cover rounded-lg shadow-lg rounded-t-lg:rounded-lg'
        />
      </div>
      <h1 className=" text-center text-[3rem] cursor-pointer text-3xl font-black py-[1rem]">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
        {/* <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 '>

         <img
          src={post.author.photo.url}
          heigth="100px"
          width="100px"
          className='rounded-full'/>
          <p className='inline align-center font-black text-semibold ml-8'>{post.author.name}</p>
        

        </div> */}
      </div>
      <div className='px-[2rem]'>
      <p classname='align-center font-mono text-[10rem] pl-[2rem] lg:px-20 '>{post.excerpt}</p>
      </div>
      <div className="text-right mb-3 mr-4">
      <Link href={`/post/${post.slug}`}>
        <span className='transition duration-500 font-semibold text-[#e4dcc9] text-center inline-block bg-[#4A2C29] rounded-full cursor-pointer hover:text-white-500 px-8 py-3'>Continue Reading
        </span></Link>
       </div> 
    </div>

  )
}

export default PostCard
