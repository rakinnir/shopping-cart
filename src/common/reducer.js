export function reducer(products, action) {
  switch (action.type) {
    case "add_to_cart": {
      return products.map((product) => {
        if (product.id === action.id) {
          return { ...product, onCart: action.onCart }
        }

        return product
      })
    }
    case "remove_from_cart": {
      return products.map((product) => {
        if (product.id === action.id && action.onCart >= 0) {
          return { ...product, onCart: action.onCart }
        }

        return product
      })
    }
    case "manual_input": {
      return products.map((product) => {
        if (product.id === action.id) {
          return { ...product, onCart: action.onCart }
        }
        return product
      })
    }
    case "items_clear": {
      return products.map((product) => {
        if (product.id === action.id) {
          return { ...product, onCart: action.onCart }
        }
        return product
      })
    }
    case "reset_on_checkout": {
      return products.map((product) => {
        return { ...product, onCart: 0 }
      })
    }
    default: {
      return products
    }
  }
}
