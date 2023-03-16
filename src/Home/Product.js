import React, { useContext } from "react"
import { FaCartPlus } from "react-icons/fa"
import { productsContext } from "../App"
import { motion } from "framer-motion"

export function Product({ filteredProducts }) {
  const { dispatch } = useContext(productsContext)

  // animation
  const animationVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

  return (
    <div className="product-area">
      {/* mapping to show products on homepage */}
      {filteredProducts.map((product) => (
        <motion.div
          variants={animationVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          key={product.id}
          className="product"
        >
          <img
            src={product.image}
            alt={product.productName}
            className="product_images"
          />
          <div className="product_description">
            <h3>{product.productName}</h3>
            <p>{product.price}$</p>
            <p
              className="add_to_cart"
              onClick={() => {
                dispatch({
                  type: "add_to_cart",
                  onCart: product.onCart + 1,
                  id: product.id,
                })
              }}
            >
              Add to cart <FaCartPlus />
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
