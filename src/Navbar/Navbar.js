import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { CgShoppingBag } from "react-icons/cg"
import { productsContext } from "../App"
import "./Navbar.css"

export const Navbar = () => {
  const { products } = useContext(productsContext)

  // total products number on cart icon
  let totalOnCart = 0
  products.map((product) => (totalOnCart += product.onCart))

  return (
    <div className="navbar">
      <Link to="/" className="navbar_logo">
        <CgShoppingBag />
      </Link>
      <div className="navbar_main">
        <Link className="navbar_main_home" to="/">
          Home
        </Link>
        <Link to="/cart" className="navbar_main_cart">
          <FaShoppingCart className="navbar_cart_logo" />
          {totalOnCart > 0 && (
            <span className="number_on_cart">{totalOnCart}</span>
          )}
        </Link>
      </div>
    </div>
  )
}
