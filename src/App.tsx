import Header from "./components/Header"
import "react-loading-skeleton/dist/skeleton.css"
import HomePage from "./pages/HomePage"
import Wrapper from "./components/Wrapper"
import { Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
const CartPage = lazy(() => import("./pages/CartPage"))
const ErrorPage = lazy(() => import("./pages/ErrorPage"))

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Загрузка корзины...</div>}>
              <CartPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ErrorPage />
            </Suspense>
          }
        />
      </Routes>
    </Wrapper>
  )
}

export default App
