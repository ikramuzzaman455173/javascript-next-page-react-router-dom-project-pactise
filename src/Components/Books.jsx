import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import SingleBook from './SingleBook';

const Books = () => {
  const navigation = useNavigation()
  if (navigation.state === 'loading') {
    return <LoadingSpinner/>
  }
  const {books} = useLoaderData()
  // console.log(books);
  return (
    <div className='my-container '>
      <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
        {books?.map(book=><SingleBook key={book.isbn13} book={book} />)}
      </div>
    </div>
  );
};

export default Books;