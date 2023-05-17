import { memo } from "react"
import cartImg from "../assets/img/cart.svg"

const HeaderCart = memo(({ orderQuantity }) => {
  return (
    <div className="header__cart">
      <a href="/cart.html" className="button button--cart">
        <span>520 ₽</span>
        <div className="button__delimiter"></div>
        <img src={cartImg} alt="cart" />
        <span>{orderQuantity}</span>
      </a>
    </div>
  )
})
export default HeaderCart
