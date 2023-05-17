import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">Welcome to my blog</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index,) => (
            <>

            <Link key={index} href={`/category/${category.slug}`}>
              <span className="transition duration-200 md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer hover:scale-125">
              <img src={category.categoryImage.url} className='inline mx-[0.5rem] text-white' height={"30px"} width={"30px"} />
              {category.category}
              </span>
            </Link>
            </>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;