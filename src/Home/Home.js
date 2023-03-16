import { Product } from "./Product"
import { useContext, useState } from "react"
import { productsContext } from "../App"
import { SearchBar } from "./SearchBar"
import { SortingProducts } from "./SortingProducts"
import "./Home.css"
import { motion } from "framer-motion"

export const Home = () => {
  const { products } = useContext(productsContext)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortState, setSortState] = useState("Default")

  // filtering for searched items
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // sorting
  if (sortState === "Low to high") {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortState === "High to low") {
    filteredProducts.sort((a, b) => a.price - b.price).reverse()
  }

  // animation
  const animationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.3 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  }

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="header">Buy in your way</h1>
      <SearchBar
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      ></SearchBar>
      <SortingProducts setSortState={setSortState} />
      <Product filteredProducts={filteredProducts} />
    </motion.div>
  )
}
