import React from 'react'
import { books } from '../constant/books-data'

const Cards = ({bookDetail, handleEvent, firstName = "Idrees", keyID}) => {
  console.log(firstName)
  return (
    <div key={keyID} className='bg-green-700 rounded-xl overflow-hidden w-100 m-5'>
      <img
        className='w-full'
        src={bookDetail.photoURL} alt="book-cover-photo" />
      <h1 className='text-center text-xl font-bold text-white py-3'>{bookDetail.title}</h1>
      <h2 className='text-center text-lg font-semibold text-white -mt-2'>{bookDetail.author}</h2>
      <h2 className='text-center text-3xl font-semibold text-green-100 my-2 '>{bookDetail.price}</h2>
      <h2 className='text-center text-3xl font-semibold text-green-100 my-2 '>{firstName}</h2>
      <button 
      onClick={ ()=> handleEvent(bookDetail.title) }
      className='bg-gray-200 rounded-md text-2xl w-[90%] my-5 py-5 ml-5 hover:bg-green-500 hover:text-white cursor-pointer'>
        {
          bookDetail.available ? "Available" : "Out of Stock"
          
        }
      </button>
    </div>
  )
}

export default Cards