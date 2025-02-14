import React, { useState } from 'react'

const App = () => {

  const [songName, setSongName] = useState('')
  const [songArtist, setSongArtist] = useState('')
  const [songAlbum, setsongAlbum] = useState('')
  const [songPoster, setsongPoster] = useState('')

  const [allSongs, setAllSongs] = useState([])
    
  const submitHandler = (e)=>{
    e.preventDefault()
    
    const copySong = [...allSongs]
    copySong.push({songName,songArtist,songAlbum,songPoster})

    setAllSongs(copySong)

    setSongName('')
    setSongArtist('')
    setsongAlbum('')
    setsongPoster('')
  }

  const deleteHandler = (idx)=>{

    const copySong = [...allSongs]
    copySong.splice(idx,1)
    setAllSongs(copySong)

  }
  
  return (
    <div className='bg-blue-50 h-screen'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        value={songName}
        onChange={(e)=>{
            setSongName(e.target.value)
        }}

        className='border-2 rounded px-3 m-2 py-1' type="text" placeholder='Enter Song Name' />
        <input
        value={songArtist}
        onChange={(e)=>{
          setSongArtist(e.target.value)
        }}
        className='border-2 rounded px-3 m-2 py-1'  type="text" placeholder='Enter Song Artist Name' />
        <input
        value={songAlbum}
        onChange={(e)=>{
          setsongAlbum(e.target.value)
        }}
        className='border-2 rounded px-3 m-2 py-1'  type="text" placeholder='Enter Song Album Name' />
        <input 
        value={songPoster}
        onChange={(e)=>{
          setsongPoster(e.target.value)
        }}
        className='border-2 rounded px-3 m-2 py-1'  type="text" placeholder='Paste Song Poster URL' />
        <button className='border-2 rounded px-3 m-2 py-1 bg-blue-500 text-white' >Add Song</button>
      </form>

      <div className='p-3'> 
        {allSongs.map(function(elem,idx){

          return <div key={idx} className='flex w-80 items-center p-2 bg-white rounded gap-4 h-24 w-80'>
            <img className='h-full object-cover object-top rounded w-20' src={elem.songPoster} alt="" />
            <div className='text-xs'>
              <h3>{elem.songName}</h3>
              <h5>Album: {elem.songAlbum}</h5>
              <h5>Artist: {elem.songArtist}</h5>
            </div>
            <button onClick={()=>{
              deleteHandler(idx)
            }} className='bg-red-600 text-white px-3 py-1 rounded'>Delete</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default App