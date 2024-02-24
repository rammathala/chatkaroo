import React from 'react'
import './Chatview.css'
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { IconButton } from '@mui/material';
function Chatview() {
  return (
    <div className='Chatview'>
        <div className='chatheader'>

        </div>
        <div className='chatmessages'>

        </div>
        <div className='chatinput'>
            <div>
                <IconButton>
                <EmojiEmotionsIcon/>
                </IconButton>
           <IconButton>
           <AttachFileIcon/>
           </IconButton>
           
           <input placeholder='Type Message...'></input>
           <IconButton>
           <SendIcon/>
           </IconButton>
           
            </div>
            
        </div>
    </div>
  )
}

export default Chatview