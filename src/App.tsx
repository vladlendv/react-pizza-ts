import Header from "./components/Header"
import { useState } from "react"
import "react-loading-skeleton/dist/skeleton.css"
import HomePage from "./pages/HomePage"
import Wrapper from "./components/Wrapper"
import { Route, Routes } from "react-router-dom"
import ErrorPageBlock from "./components/ErrorPageBlock/ErrorPageBlock"
import CartPage from "./pages/CartPage"

const App = () => {
  const [orderQuantity, setOrderQuantity] = useState(0)

  return (
    <Wrapper>
      <Header orderQuantity={orderQuantity} />
      <Routes>
        <Route
          path="/"
          element={<HomePage setOrderQuantity={setOrderQuantity} />}
        />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPageBlock />} />
      </Routes>
    </Wrapper>
  )
}

export default App
