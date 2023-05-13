import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import {getCategories} from '../services';

const Catergories = () => {
  const [categories,setCategories]=useState([]);

  useEffect(()=>{
    getCategories()
    .then((newCategories)=> setCategories(newCategories))

  },[]);

  return (
    <div className="bg-[#e4dcc9] bg-opacity-50 shadow-lg rounded-lg p-8 pb-12 mb-8 bottom-20 right-200 ">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-[#24221b]">Categories</h3>
      {categories.map((category, index) => (
        <Link className='text-[#24221b] text-xl font-semibold' key={index} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3 '>{category.category}</span>
        </Link>
      ))}
    </div>
  );
};
export default Catergories
