import React, { useState } from 'react'
import axios from 'axios';

const App = () => {

  const [ImageData, setImageData] = useState([])


  async function btnClicked() {

    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data);
    setImageData(response.data)
  }

  return (
    <div className='p-3'>
      <button onClick={btnClicked} className='bg-green-500 text-white px-3 py-2 rounded'>Get Data</button>

      <div className='p-2'>
        {ImageData.map(function (elem, idx) {

          return <div className='inline-block m-1'>
            <img className='h-32 rounded' src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App