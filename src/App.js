import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/header/Header"
import Contacts from "./screens/contacts/Contacts"
import HatsScreen from "./screens/HatsScreen"
import HomeScreen from "./screens/HomeScreen"
import ShopScreen from "./screens/shop/ShopScreen"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/shop/hats" element={<HatsScreen />} />
      </Routes>
    </>
  )
}

export default App
