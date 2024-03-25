import { useDispatch } from "react-redux"
import { addItem, removeByType, removeItem } from "../redux/cartSlice"
import minus from "../assets/img/minus.svg"
import plus from "../assets/img/plus.svg"
import remove from "../assets/img/remove.svg"

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const removePizza = () => {
    dispatch(removeItem(item))
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "10px",
      }}
      className="cart__items-block"
    >
      <div style={{ display: "flex" }}>
        <img width={80} height={80} src={item.imageUrl} alt="test"></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "15px",
            justifyContent: 'center'
          }}
        >
          <h2 style={{fontSize: '1.3rem'}}>{item.title}</h2>
          <p style={{color: 'GrayText'}}>
            {item.type === 0 ? "традиционное" : "тонкое"} тесто, {item.size} см
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <button
          style={{
            cursor: "pointer",
            border: "2px solid #EB5A1E",
            borderRadius: "50%",
            padding: "3px 5px 1px",
            backgroundColor: "#fff",
          }}
          onClick={() => removePizza()}
        >
          <img src={minus} alt="remove pizza" />
        </button>
        <p style={{ fontSize: "20px", padding: "0 10px", fontWeight: "bold" }}>
          {item.currentPizzaCount}
        </p>
        <button
          style={{
            cursor: "pointer",
            border: "2px solid #EB5A1E",
            borderRadius: "50%",
            padding: "3px 5px 1px",
            backgroundColor: "#fff",
          }}
          onClick={() =>
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
        >
          <img src={plus} alt="add pizza" />
        </button>
      </div>
      <div>
        <p style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{item.price * item.currentPizzaCount} ₽</p>
      </div>
      <button
        onClick={() => dispatch(removeByType(item.id))}
        style={{
          rotate: "45deg",
          cursor: "pointer",
          border: "2px solid lightgrey",
          borderRadius: "50%",
          padding: "3px 5px 1px",
          backgroundColor: "#fff",
        }}
      >
        <img src={remove} alt="remove all current pizza type" />
      </button>
    </div>
  )
}
export default CartItem
