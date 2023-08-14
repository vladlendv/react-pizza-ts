import { Link } from "react-router-dom"
import basketImg from "../assets/img/content-title.svg"
import backBtn from "../assets/img/back-btn.svg"
import clearBtn from "../assets/img/clear-btn.svg"

const CartPage = () => {
  return (
    <div className="container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <img src={basketImg} alt="basket" />
            Корзина
          </h2>
          <div className="cart__clear">
            <img src={clearBtn} alt="clear button" />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="content__items">
          {/* {items.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))} */}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {" "}
              Всего пицц: <b>{0} шт.</b>{" "}
            </span>
            <span>
              {" "}
              Сумма заказа: <b>{0} ₽</b>{" "}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <img style={{paddingRight: 20}} src={backBtn} alt="button" />
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
