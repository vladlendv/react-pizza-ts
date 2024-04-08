import { memo, useState } from "react"
import plusImg from "../assets/img/plus.svg"
import { addItem } from "../redux/cartSlice"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"

type Props = {
  id: any
  title: string
  types: number[]
  sizes: number[]
  price: number
  imageUrl: string
}

const PizzaBlock: React.FC<Props> = memo(
  ({ title, types, sizes, price, imageUrl, id }) => {
    const dispatch = useAppDispatch()
    const orderList = useAppSelector((state) => state.cart.orderList)
    const isCount = orderList.findIndex((item) => item.title === title)
    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(40)

    return (
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type) => (
              <li
                className={activeType === type ? "active" : ""}
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
                className={activeSize === size ? "active" : ""}
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
                addItem({
                  title,
                  type: activeType,
                  size: activeSize,
                  price,
                  imageUrl,
                  id: id + activeSize + activeType + title,
                })
              )
            }}
          >
            <img src={plusImg} alt="add pizza" />
            <span>Добавить</span>
            {isCount === -1 ? (
              ""
            ) : (
              <i>
                {orderList
                  .filter((item) => item.title === title)
                  .reduce((acc, i) => acc + i.currentPizzaCount, 0)}
              </i>
            )}
          </button>
        </div>
      </div>
    )
  }
)
export default PizzaBlock
