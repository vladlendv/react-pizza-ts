import { clearItems } from "../redux/cartSlice"
import clearBtn from "../assets/img/clear-btn.svg"
import { useAppDispatch } from "../hooks/hooks"

const СlearCart: React.FC = () => {
  const dispatch = useAppDispatch()

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
