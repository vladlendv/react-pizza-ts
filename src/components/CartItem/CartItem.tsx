import { useDispatch } from "react-redux"
import { addItem, removeByType, removeItem } from "../../redux/cartSlice"
import minus from "../../assets/img/minus.svg"
import plus from "../../assets/img/plus.svg"
import remove from "../../assets/img/remove.svg"
import styles from "./CartIem.module.scss"
import { AppDispatch } from "../../redux/store"

interface IProps {
  item: {
    title: string
    type: number
    size: number
    price: number
    imageUrl: string
    id: string | number
    currentPizzaCount?: any
  }
}

const CartItem: React.FC<IProps> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>()

  const removePizza = () => {
    dispatch(removeItem(item))
  }

  const addPizza = () => {
    dispatch(
      addItem({
        title: item.title,
        type: item.type,
        size: item.size,
        price: item.price,
        imageUrl: item.imageUrl,
        id: item.id,
      })
    )
  }

  return (
    <div className={styles.itemsBlock}>
      <div className={styles.description}>
        <img src={item.imageUrl} alt="test"></img>
        <div className={styles.description_info}>
          <h2>{item.title}</h2>
          <p>
            {item.type === 0 ? "традиционное" : "тонкое"} тесто, {item.size} см
          </p>
        </div>
      </div>
      <div className={styles.counter}>
        <button onClick={removePizza}>
          <img src={minus} alt="remove pizza" />
        </button>
        <p>{item.currentPizzaCount}</p>
        <button onClick={addPizza}>
          <img src={plus} alt="add pizza" />
        </button>
      </div>
      <div className={styles.price}>
        <p>{item.price * item.currentPizzaCount} ₽</p>
      </div>
      <button
        className={styles.closeBtn}
        onClick={() => dispatch(removeByType(item.id))}
      >
        <img src={remove} alt="remove all current pizza type" />
      </button>
    </div>
  )
}
export default CartItem
