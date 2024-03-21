import { memo, useState } from "react"
import plusImg from "../assets/img/plus.svg"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../redux/cartSlice"
import { setCurrentPizzaCount } from "../redux/pizzaSlice"
import uniqid from 'uniqid'

const PizzaBlock = memo(({ title, types, sizes, price, imageUrl, id }) => {
  const dispatch = useDispatch()
  const currentPizzaCount = useSelector(
    (state) => state.pizza.currentPizzaCount
  )
  const isCount = currentPizzaCount.findIndex((item) => item.title === title)
  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(40)
  let currentId = uniqid()

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type) => (
            <li
              className={activeType === type ? "active" : null}
              onClick={() => setActiveType(type)}
              key={type}
            >
              {type === 0 ? "Традиционное" : "Тонкое"}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <li
              className={activeSize === size ? "active" : null}
              onClick={() => setActiveSize(size)}
              key={size}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button
          className="button button--outline button--add"
          onClick={() => {
            dispatch(
              setCurrentPizzaCount({
                id: currentId,
                type: "increase",
                title,
              })
            )
            dispatch(
              addItem({
                title,
                type: activeType,
                size: activeSize,
                price,
                imageUrl,
                id: currentId,
              })
            )
          }}
        >
          <img src={plusImg} alt="add pizza" />
          <span>Добавить</span>
          <i>{isCount === -1 ? 0 : currentPizzaCount[isCount].count}</i>
        </button>
      </div>
    </div>
  )
})
export default PizzaBlock
