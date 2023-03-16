import { CartList } from "./CartList"
import { useContext } from "react"
import { productsContext } from "../App"
import { Link } from "react-router-dom"
import "./Cart.css"
import { motion } from "framer-motion"

export const Cart = () => {
  const { products, dispatch } = useContext(productsContext)
  let totalPrice = 0
  products.map((product) => (totalPrice += product.onCart * product.price))

  // animation
  const animationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.3 },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  }
  return (
    <motion.div
      variants={animationVariants}
      intial="hidden"
      animate="visible"
      exit="exit"
    >
      {totalPrice > 0 ? (
        <div>
          <h1 className="cart_header">Your cart</h1>
          <CartList products={products} dispatch={dispatch} />

          <div className="cart_footer">
            <Link to="/" className="cart_footer_continue">
              Continue shopping
            </Link>
            <Link to="/checkout" className="cart_footer_checkout">
              Checkout
            </Link>
            <div>
              <span>
                <b>Total: </b>
              </span>
              {totalPrice} <b>$</b>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart_empty">
          <h1 className="cart_empty_text">Your cart is empty</h1>
          <Link to="/" className="cart_empty_btn">
            Back to home
          </Link>
        </div>
      )}
    </motion.div>
  )
}
