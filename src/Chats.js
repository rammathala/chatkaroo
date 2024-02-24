import React from 'react'
import './Chats.css';
import { Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function Chats() {
  return (
    <div className='Chats'>
      <div className='m'>
        <h3>Messages</h3>
      </div>
     <div className='Search'>
      <div>
      <SearchIcon/>
      <Input className='inputs' placeholder='Search Chats'></Input>
      </div>
      
     </div>
     <div className='chatusers'>
     <div className='chatuser'>
        <img className='chatimage' src='https://c4.wallpaperflare.com/wallpaper/611/838/413/spiderman-hd-4k-superheroes-wallpaper-preview.jpg'></img>
        <p>UserName</p>
     </div>
     <div className='chatuser'>
        <img className='chatimage' src='https://c4.wallpaperflare.com/wallpaper/611/838/413/spiderman-hd-4k-superheroes-wallpaper-preview.jpg'></img>
        <p>UserName</p>
     </div>
     </div>
     
    </div>
  )
}

export default Chats;