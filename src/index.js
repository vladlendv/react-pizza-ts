import ReactDOM from "react-dom/client"
import App from "./App"
import "./scss/index.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CartPage from "./pages/CartPage"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="cart" element={<CartPage />} />
    </Routes>
  </BrowserRouter>
)
