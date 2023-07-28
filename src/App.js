import Header from "./components/Header"
import { useState } from "react"
import "react-loading-skeleton/dist/skeleton.css"
import HomePage from "./pages/HomePage"
import Wrapper from "./components/Wrapper"

const App = () => {
  const [orderQuantity, setOrderQuantity] = useState(0)

  return (
    <Wrapper>
      <Header orderQuantity={orderQuantity} />
      <HomePage setOrderQuantity={setOrderQuantity} />
    </Wrapper>
  )
}

export default App
