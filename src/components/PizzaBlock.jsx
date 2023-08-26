import { memo, useState } from "react"
import plusImg from "../assets/img/plus.svg"

const PizzaBlock = memo(
  ({ title, types, sizes, price, imageUrl, setOrderQuantity }) => {
    const [amount, setAmount] = useState(0)
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
              setAmount(amount + 1)
              setOrderQuantity((prev) => prev + 1)
            }}
          >
            <img src={plusImg} alt="add pizza" />
            <span>Добавить</span>
            <i>{amount}</i>
          </button>
        </div>
      </div>
    )
  }
)
export default PizzaBlock
