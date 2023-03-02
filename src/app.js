import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Housing from "./pages/Housing"
import Header from "./components/Header"
import NoMatch from "./pages/404"

const Router = (props) => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="housing" element={<Housing />} />
            <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Router