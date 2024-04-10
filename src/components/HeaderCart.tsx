import { memo, useEffect } from "react"
import cartImg from "../assets/img/cart.svg"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { setDataFromLocalStorage } from "../redux/cartSlice"

const HeaderCart: React.FC = memo(() => {
  const { totalPizzaCount, totalPrice, orderList } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const storageItem: string | null = localStorage.getItem('cart-items')
    if (storageItem) {
      dispatch(setDataFromLocalStorage(JSON.parse(storageItem)))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart-items', JSON.stringify({count: totalPizzaCount, price: totalPrice, list: orderList}))
  }, [totalPizzaCount, totalPrice, orderList])

  return (
    <div className="header__cart">
      <Link to="cart" className="button button--cart">
        <span>{totalPrice} ₽</span>
        <div className="button__delimiter"></div>
        <img src={cartImg} alt="basket" />
        <span>{totalPizzaCount}</span>
      </Link>
    </div>
  )
})
export default HeaderCart
