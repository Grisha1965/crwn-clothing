import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import HatsScreen from "./screens/HatsScreen"
import HomeScreen from "./screens/HomeScreen"
import ShopScreen from "./screens/shop/ShopScreen"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/shop/hats" element={<HatsScreen />} />
      </Routes>
    </>
  )
}

export default App
