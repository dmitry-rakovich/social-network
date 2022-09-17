import style from './Profile.module.css'
import React from 'react'

const Profile = () => {
  return (
    <div className={style.profile}>
        <img className={style.avatar} src="./images/avatar.jpg" width='200' alt="avatar" />
        <div className={style.info}>
            <h1>Dmitry Rakovich</h1>
            <p>City: Minsk</p>
            <p>День рождения: 1 сентября 1995 г.</p>
            
        </div>
    </div>
  )
}

export {Profile}