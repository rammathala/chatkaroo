import React from 'react'
import './Login.css'
import chat from './chat.png'
import chati from './chati.svg'
import gbutton from './gbuton.png'
import { Button } from '@mui/material'
function Login() {
  return (
    <div className='Login'>
      <div className='for'>
        <h2>Chatkarooo</h2>
          <img className='chati'src={chati}/>
          <Button className='Button' variant='contained'>
            <div>
            <img src={gbutton}/> 
            </div>
            <p>Sign in with google</p>
          </Button>
      </div>
    </div>
  )
}

export default Login