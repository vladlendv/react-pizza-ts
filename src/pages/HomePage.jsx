import { initialState } from "../state"
import { useEffect, useState } from "react"
import PizzaLoader from "../components/PizzaLoader"
import PizzaBlock from "../components/PizzaBlock"
import Sort from "../components/Sort"
import Categories from "../components/Categories"

const HomePage = ({ setOrderQuantity }) => {
  const { categories } = initialState
  const [pizzaList, setPizzaList] = useState([])

  useEffect(() => {
    fetch("https://64ba3cb25e0670a501d5d86e.mockapi.io/pizza")
      .then((data) => data.json())
      .then((res) => setPizzaList(res))
  }, [])

  return (
    <div className="content">
      <div className="content__top">
        <Categories categories={categories} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!pizzaList.length
          ? [...new Array(6)].map((el, index) => <PizzaLoader key={index} />)
          : pizzaList.map((item) => (
              <PizzaBlock
                setOrderQuantity={setOrderQuantity}
                key={item.id}
                title={item.title}
                types={item.types}
                sizes={item.sizes}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            ))}
      </div>
    </div>
  )
}
export default HomePage
