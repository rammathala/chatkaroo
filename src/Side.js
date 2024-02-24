import React from 'react'
import './Side.css'
import { IconButton } from '@mui/material';
import ShieldMoonIcon from '@mui/icons-material/ShieldMoon';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
 function Side({dar,fun}) {
  return (
    <div className={dar?'Side dar':'Side su'}>
      <div className='sidepa'>
      <div className='dp'>
        <img src='https://c4.wallpaperflare.com/wallpaper/611/838/413/spiderman-hd-4k-superheroes-wallpaper-preview.jpg'/>
      </div>
        <div className='dark'>
        <IconButton className={dar?'bxs b1':'bxs b2'} onClick={fun}><ShieldMoonIcon className={dar?'moo':''}/></IconButton>
        </div>
      </div>
      <div>
        <IconButton className={dar?'power-off a1':'power-off a2'}><SettingsPowerIcon className={dar?'a1':'a2'}/></IconButton>
        </div>
    </div>
  )
}
export default Side;