import { Link } from "react-router-dom"
import basketImg from "../assets/img/content-title.svg"
import backBtn from "../assets/img/back-btn.svg"
import clearBtn from "../assets/img/clear-btn.svg"
import { clearItems } from "../redux/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import CartItem from "../components/CartItem"

const CartPage = () => {
  const dispatch = useDispatch()
  const { totalPrice, totalPizzaCount, orderList } = useSelector(
    (state) => state.cart
  )

  const clearCart = () => {
    dispatch(clearItems())
  }

  return (
    <div className="container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <img className="basket-test" src={basketImg} alt="basket" />
            Корзина
          </h2>
          <div onClick={clearCart} className="cart__clear">
            <img src={clearBtn} alt="clear button" />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="cart__items">
          {orderList.length > 0
            ? orderList.map((item) => <CartItem key={item.id} item={item} />)
            : null}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{totalPizzaCount}</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <img style={{ paddingRight: 20 }} src={backBtn} alt="button" />
              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartPage
