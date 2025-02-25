import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'remixicon/fonts/remixicon.css'

const App = () => {



  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)

  const [cartData, setCartData] = useState([])

  const btnClicked = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response.data);
    setAllProducts(response.data)

  }

  const totalAmount = ()=>{
    let sum = 0
    cartData.forEach(function(elem){
        sum += elem.price 
    })

    setTotal(sum)
  }

  const addToCartFunction = (idx)=>{
    const copyCartData = [...cartData]

    copyCartData.push(allProducts[idx])

    setCartData(copyCartData)
    
    
  }

  const cartItemDelete = (idx)=>{
    const copyCartData = [...cartData]

    copyCartData.splice(idx,1)

    setCartData(copyCartData)

    
  }


  useEffect(function(){
    totalAmount()
  },[cartData])


  return (
    <div className='p-2'>
      <button onClick={btnClicked} className='bg-green-600 px-3 py-2 text-white rounded'>Get Data</button>

      <div className='flex bg-blue-100 p-2'>
        <div className='w-8/12 flex flex-wrap gap-2 rounded p-2'>
          {allProducts.map(function (elem, idx) {

            return <div className=' text-center w-60 bg-white rounded p-4' key={idx}>
              <img className='mx-auto h-20' src={elem.image} alt="" />
              <h1>{elem.title}</h1>
              <h4 className='my-2'>${elem.price}</h4>
              <button onClick={()=>{
                addToCartFunction(idx)
              }} className='active:scale-95 bg-yellow-400 text-white py-2 px-5 rounded mt-4'>Add to Cart</button>
            </div>
          })}
        </div>
        <div className='w-4/12 bg-green-100 p-2'>
          {cartData.map(function(elem,idx){

            return <div key={idx} className='flex items-center bg-white p-2 gap-3'>
              <img className='h-16' src={elem.image} alt="" />
              <div>
              <h1 className='text-xs'>{elem.title}</h1>
              <h4>${elem.price}</h4>
              
              </div>
              <button onClick={()=>{
                  cartItemDelete(idx)
              }} className='bg-red-500 active:scale-95 text-white px-2 py-1 rounded-full'><i className="ri-delete-bin-line"></i></button>
            </div>
          })}
        </div>
        <div className='fixed flex w-80 bottom-0 justify-between right-0 bg-white rounded p-3'>
            <h2>Total </h2>
            <h5>${total}</h5>
        </div>
      </div>
    </div>
  )
}

export default App