import { memo } from "react"
import cartImg from "../assets/img/cart.svg"
import { Link } from "react-router-dom"

const HeaderCart = memo(({ orderQuantity }) => {
  return (
    <div className="header__cart">
      <Link to="/cart" className="button button--cart">
        <span>520 ₽</span>
        <div className="button__delimiter"></div>
        <img src={cartImg} alt="cart" />
        <span>{orderQuantity}</span>
      </Link>
    </div>
  )
})
export default HeaderCart
