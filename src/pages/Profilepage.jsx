import { Posts } from "../components/Posts/Posts"
import style from '../components/Posts/Posts.module.css'
import { Profile } from "../components/Profile/Profile"
const Profilepage = () => {
  return (
    <>
    <Profile/>
    <div className={style.posts}>
      <Posts/>
    </div>
    </>
  )
}

export {Profilepage}