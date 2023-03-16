import { Home } from "./Home/Home"
import { Cart } from "./Cart/Cart"
import { Navbar } from "./Navbar/Navbar"
import { Checkout } from "./Cart/Checkout"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { useContext } from "react"
import { productsContext } from "./App"
export function AnimationRouter() {
  const { isOrderPlaced } = useContext(productsContext)
  const location = useLocation()
  return (
    <AnimatePresence>
      {!isOrderPlaced && <Navbar />}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </AnimatePresence>
  )
}
