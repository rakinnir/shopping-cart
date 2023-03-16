import { RiDeleteBin5Line } from "react-icons/ri"
import { motion, AnimatePresence } from "framer-motion"

export function CartList({ products, dispatch }) {
  const animationVariants = {
    hidden: { y: -300, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: -300, opacity: 0 },
  }
  return (
    <div className="cart-area">
      <AnimatePresence>
        {products.map((product) => {
          if (product.onCart !== 0) {
            return (
              <motion.div
                key={product.id}
                className="cart"
                variants={animationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <img
                  src={product.image}
                  alt={product.productName}
                  className="cart_images"
                />
                <div className="cart_description">
                  <h3 className="cart_name">{product.productName}</h3>
                  <div className="cart_input">
                    <button onClick={handleRemoveItems(product)}>-</button>
                    <input
                      type="text"
                      value={product.onCart}
                      onChange={handleManualInput(product)}
                    />
                    <button onClick={handleAddItems(product)}>+</button>
                  </div>
                  {product.onCart > 0 ? (
                    <p className="cart_price">{`${product.price}$ * ${product.onCart}`}</p>
                  ) : (
                    <p className="cart_price">{product.price}</p>
                  )}
                  <RiDeleteBin5Line
                    onClick={handleClearItems(product)}
                    className="cart_delete"
                  />
                </div>
              </motion.div>
            )
          }
          return null
        })}
      </AnimatePresence>
    </div>
  )

  function handleAddItems(product) {
    return () => {
      dispatch({
        type: "add_to_cart",
        id: product.id,
        onCart: product.onCart + 1,
      })
    }
  }

  function handleManualInput(product) {
    return (e) => {
      dispatch({
        type: "manual_input",
        id: product.id,
        onCart: e.target.value,
      })
    }
  }

  function handleRemoveItems(product) {
    return () => {
      dispatch({
        type: "remove_from_cart",
        id: product.id,
        onCart: product.onCart - 1,
      })
    }
  }

  function handleClearItems(product) {
    return () => {
      dispatch({
        type: "items_clear",
        id: product.id,
        onCart: 0,
      })
    }
  }
}
