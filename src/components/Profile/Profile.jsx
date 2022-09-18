import style from './Profile.module.css'
import React from 'react'

const Profile = () => {
  return (
    <div className={style.profile_wrapper}>
    <div className={style.profile}>
        <img className={style.avatar} src="/social-network/images/avatar.jpg" width='200' alt="avatar" />
        <div className={style.info}>
            <h1>Dmitry Rakovich</h1>
            <p>City: Minsk</p>
            <p>Birthday: 1 September 1995 г.</p>
        </div>
    </div>
    </div>
  )
}

export {Profile}