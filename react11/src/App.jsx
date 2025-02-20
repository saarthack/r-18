import React, { useState } from 'react'
import axios from 'axios';

const App = () => {

  const [productData, setProductData] = useState([])
  const [cartData, setCartData] = useState([])

  const btnClicked = async () => {

    const response = await axios.get('https://fakestoreapi.com/products')

    console.log(response.data);
    setProductData(response.data)
  }

  const addToCart = (idx)=>{
    setCartData([...cartData,productData[idx]])
  }


  return (
    <div className='p-2'>
      <button onClick={btnClicked} className='active:scale-95 bg-green-500 text-white rounded px-4 py-2'>Get Data</button>
      <div className='flex'>
        <div className='w-3/4 bg-blue-100 flex flex-wrap gap-2 '>
          {productData.map(function (elem, idx) {

            return <div key={idx} className='bg-white w-40 m-1 p-3 text-center'>
              <img className='h-32 mx-auto' src={elem.image} alt="" />
              <h1 className='h-18 overflow-hidden'>{elem.title}</h1>

              <button onClick={()=>{
                addToCart(idx)
              }} className='active:scale-95 mt-4 bg-yellow-400 text-white rounded px-5 py-2'>Add to Cart</button>
            </div>
          })}
        </div>
        <div className='w-1/4 bg-green-100 p-2'>
          {cartData.map(function (elem) {
            return <div className='flex p-2 mb-2 rounded items-center bg-white'>
              <img className='h-14' src={elem.image} alt="" />
              <h1>{elem.title}</h1>
              </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App