import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/detail/index";
import Home from "./pages/home/index";
import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:code" element={<Detail />} />
        <Route path="*" element={"<NotFound />"} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
