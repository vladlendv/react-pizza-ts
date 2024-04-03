import { Link } from "react-router-dom"
import emptyCart from "../../assets/img/empty-cart.png"
import backBtn from "../../assets/img/back-btn.svg"

const EmptyCart: React.FC = () => {
  return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className="cart__bottom-buttons">
        <h2>Ваша корзина пуста</h2>
        <p style={{color: 'GrayText'}}>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
        <img style={{width: '300px'}} src={emptyCart} alt="cart is empty" />
        <Link to="/" className="button button--outline button--add go-back-btn">
          <img style={{ paddingRight: 20 }} src={backBtn} alt="button" />
          <span>Вернуться назад</span>
        </Link>
      </div>
  )
}
export default EmptyCart
