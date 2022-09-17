import { NavLink, Outlet } from "react-router-dom"
import style from './Layout.module.css'

const setActive = ({ isActive }) => isActive ? style.active : ""

const Layout = () => {
  return (
    <>
    <header className={style.header}>
        <NavLink className={setActive} to="/news">News</NavLink>
        <NavLink className={setActive} to="/profile">Profile</NavLink>
    </header>
    <main className={style.container}>
        <Outlet />
    </main>
    </>
  )
}

export {Layout}