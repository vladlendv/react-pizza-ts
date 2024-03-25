import { useDispatch } from "react-redux"
import { clearItems } from "../redux/cartSlice"
import clearBtn from "../assets/img/clear-btn.svg"

const СlearCart = () => {
  const dispatch = useDispatch()

  const clearCart = () => {
    dispatch(clearItems())
  }

  return (
    <div onClick={clearCart} className="cart__clear">
      <img src={clearBtn} alt="clear button" />
      <span>Очистить корзину</span>
    </div>
  )
}
export default СlearCart
