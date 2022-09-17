import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { Newspage } from "./pages/Newspage"
import { Notfoundpage } from "./pages/Notfoundpage"
import { Profilepage } from "./pages/Profilepage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/news" replace/>}/>
        <Route path="/news" element={<Newspage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
