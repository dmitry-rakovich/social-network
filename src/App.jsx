import { Link, Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { Home } from './pages/Home'
import { News } from './pages/News'
import { Notfound } from './pages/Notfound'
import { Profile } from './pages/Profile'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
