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
    <div className="bg-white-opacity-60 shadow-lg rounded-lg p-8 pb-12 mb-8 bottom-20 right-200 ">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-white">Categories</h3>
      {categories.map((category, index) => (
        <Link className='text-white text-xl' key={index} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3 '>{category.category}</span>
        </Link>
      ))}
    </div>
  );
};
export default Catergories
