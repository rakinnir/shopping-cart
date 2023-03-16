import { Link } from "react-router-dom"
import "./Cart.css"
import { useContext } from "react"
import { productsContext } from "../App"

export const Checkout = () => {
  const { dispatch } = useContext(productsContext)

  return (
    <div className="checkout">
      <h1 className="checkout_text">Your order has been placed</h1>
      <Link
        to="/"
        className="checkout_continue"
        onClick={() => {
          dispatch({ type: "reset_on_checkout" })
        }}
      >
        Continue Shopping
      </Link>
    </div>
  )
}
