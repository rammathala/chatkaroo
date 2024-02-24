import React from 'react'
import Side from './Side'
import Chats from './Chats'
import Chatview from './Chatview'

function Home({dar,dark}) {
  return (
    <div className='Home'>
       <Side dar={dar} fun={dark}/>
      <Chats/>
      <Chatview/>
    </div>
  )
}

export default Home