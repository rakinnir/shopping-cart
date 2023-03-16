import { AnimationRouter } from "./AnimationRouter"
import { reducer } from "./common/reducer"
import { createContext, useReducer } from "react"
import { BrowserRouter } from "react-router-dom"
import "./common/index.css"

import macbook from "./Assets/macbook.jpg"
import tablet from "./Assets/tablet.jpg"
import camera from "./Assets/camera.jpg"
import xbox_controller from "./Assets/xbox_controller.jpg"
import headphone from "./Assets/headphone.jpg"
import keyboard from "./Assets/keyboard.jpg"
import mouse from "./Assets/mouse.jpg"
import nintendo from "./Assets/nintendo.jpg"
import ps5 from "./Assets/ps5.jpg"
import smarttv from "./Assets/smarttv.jpg"
import speaker from "./Assets/speaker.jpg"
import xbox from "./Assets/xbox.jpg"
import ds4 from "./Assets/playstation_controller.jpg"
import surface_book from "./Assets/surfact_book.jpg"
import mousepad from "./Assets/mousepad.jpg"
import monitor from "./Assets/monitor.jpg"

export const productsContext = createContext(null)

function App() {
  const [products, dispatch] = useReducer(reducer, items)

  return (
    <productsContext.Provider value={{ products, dispatch }}>
      <BrowserRouter>
        <AnimationRouter />
      </BrowserRouter>
    </productsContext.Provider>
  )
}

export default App

// dummy datas
const items = [
  {
    id: 0,
    productName: "PS5",
    onCart: 0,
    image: ps5,
    price: 500,
  },
  {
    id: 1,
    productName: "Xbox",
    onCart: 0,
    image: xbox,
    price: 450,
  },
  {
    id: 2,
    productName: "Xbox Controller",
    onCart: 0,
    image: xbox_controller,
    price: 100,
  },
  {
    id: 3,
    productName: "Smart Tv",
    onCart: 0,
    image: smarttv,
    price: 1499,
  },
  {
    id: 4,
    productName: "Macbook",
    onCart: 0,
    image: macbook,
    price: 1599,
  },
  {
    id: 5,
    productName: "Camera",
    onCart: 0,
    image: camera,
    price: 1299,
  },
  {
    id: 6,
    productName: "Mouse",
    onCart: 0,
    image: mouse,
    price: 120,
  },
  {
    id: 7,
    productName: "Keyboard",
    onCart: 0,
    image: keyboard,
    price: 150,
  },
  {
    id: 8,
    productName: "Nintendo",
    onCart: 0,
    image: nintendo,
    price: 300,
  },
  {
    id: 9,
    productName: "Speaker",
    onCart: 0,
    image: speaker,
    price: 250,
  },
  {
    id: 10,
    productName: "Headphone",
    onCart: 0,
    image: headphone,
    price: 150,
  },
  {
    id: 11,
    productName: "Tablet",
    onCart: 0,
    image: tablet,
    price: 600,
  },
  {
    id: 12,
    productName: "Monitor",
    onCart: 0,
    image: monitor,
    price: 200,
  },
  {
    id: 13,
    productName: "Surface Book",
    onCart: 0,
    image: surface_book,
    price: 600,
  },
  {
    id: 14,
    productName: "Dualshock 4",
    onCart: 0,
    image: ds4,
    price: 50,
  },
  {
    id: 15,
    productName: "Mousepad",
    onCart: 0,
    image: mousepad,
    price: 50,
  },
]
