import { Link } from "react-router-dom"
import basketImg from "../assets/img/content-title.svg"
import backBtn from "../assets/img/back-btn.svg"
import { useSelector } from "react-redux"
import CartItem from "../components/CartItem"
import СlearCart from "../components/СlearCart"
import EmptyCart from "../components/EmptyCart"

const CartPage = () => {
  const { totalPrice, totalPizzaCount, orderList } = useSelector(
    (state) => state.cart
  )

  return (
    <div className="container--cart">
      {orderList.length > 0 ? (
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <img className="basket-test" src={basketImg} alt="basket" />
              Корзина
            </h2>
            <СlearCart />
          </div>
          <div style={{ paddingTop: "15px" }} className="cart__items">
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
      ) : (
        <EmptyCart />
      )}
    </div>
  )
}
export default CartPage
