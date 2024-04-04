import { useDispatch } from "react-redux"
import { clearItems } from "../redux/cartSlice"
import clearBtn from "../assets/img/clear-btn.svg"
import { AppDispatch } from "../redux/store"

const СlearCart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

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
