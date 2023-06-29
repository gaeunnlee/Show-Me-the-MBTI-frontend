import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

export default function Router() {
  const [intro, setIntro] = useState(true);
  useEffect(() => {
      setTimeout(() => {
        setIntro(false);
      }, 3000);
  }, []);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={intro ? <Main /> : <Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
