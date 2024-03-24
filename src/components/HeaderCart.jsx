import { memo } from "react"
import cartImg from "../assets/img/cart.svg"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const HeaderCart = memo(() => {
  const {totalPizzaCount, totalPrice} = useSelector(state => state.cart)

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
