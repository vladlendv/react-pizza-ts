import { useDispatch } from "react-redux"
import { removeItem } from "../redux/cartSlice"
import { removeCurrentPizzaCount } from "../redux/pizzaSlice"

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const removePizza = () => {
    dispatch(removeItem(item))
    dispatch(removeCurrentPizzaCount(item.title))
  }

  return (
    <div className="cart__items-block">
      <div>
        <img width={80} height={80} src={item.imageUrl} alt="test"></img>
      </div>
      <div>
        <h2>{item.title}</h2>
        <p>{item.type === 0 ? "традиционное" : "тонкое"} тесто</p>
        <p>Размер: {item.size} см</p>
        <p>Цена: {item.price} ₽</p>
      </div>
      <button onClick={() => removePizza()}>Удалить</button>
    </div>
  )
}
export default CartItem
