import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Housing from "./pages/Housing"
import NoMatch from "./pages/404"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './sass/app.scss'

const Router = (props) => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="housing/:idHousing" element={<Housing />} />
            <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="/" element={<Footer />}>

        </Route>
      </Routes>
    </div>
  )
}

export default Router