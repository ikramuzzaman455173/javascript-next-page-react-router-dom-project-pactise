import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const SingleBook = ({ book }) => {
  const navigation = useNavigation()
  if (navigation.state === 'loading') {
    return <LoadingSpinner/>
  }
  const {title,subtitle,price,image,isbn13}=book
  // console.log(book, 'book');
  return (
    <Link to={`../book/${isbn13}`}>
      <div className='overflow-hidden relative rounded shadow-md hover:shadow-xl p-2 transition duration-300 transform hover:-translate-y-2 cursor-pointer'>
        <img src={image} className="object-cover w-full h-56 md:h-64 xl:h-80" loading='lazy' alt="book cover image" />
        <div className="bg-slate-700 text-white bg-opacity-75 absolute inset-0 flex flex-col transition-opacity duration-300  px-5 py-4 opacity-0 hover:opacity-100">
          <p>{title}</p><br />
          <p>{subtitle.substring(0, 45)} ...</p><br />
          <p className='mt-auto'>Price: {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;