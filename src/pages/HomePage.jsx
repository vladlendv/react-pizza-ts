import { initialState } from "../state"
import { createContext, useEffect, useState } from "react"
import PizzaLoader from "../components/PizzaLoader"
import PizzaBlock from "../components/PizzaBlock"
import Sort from "../components/Sort"
import Categories from "../components/Categories"

export const SortContext = createContext(null)

const HomePage = ({ setOrderQuantity }) => {
  const { categories } = initialState
  const [activeCategory, setActiveCategory] = useState(0)
  const [pizzaList, setPizzaList] = useState([])
  const [activeSort, setActiveSort] = useState("популярности")

  useEffect(() => {
    if (activeCategory > 0) {
      fetch(
        `https://64ba3cb25e0670a501d5d86e.mockapi.io/pizza?sortBy=${activeSort}&category=${activeCategory}`
      )
        .then((data) => data.json())
        .then((res) => setPizzaList(res))
    } else {
      fetch(
        `https://64ba3cb25e0670a501d5d86e.mockapi.io/pizza?sortBy=${activeSort}`
      )
        .then((data) => data.json())
        .then((res) => setPizzaList(res))
    }
  }, [activeCategory, activeSort])

  return (
    <div className="content">
      <div className="content__top">
        <SortContext.Provider
          value={{
            activeCategory,
            activeSort,
            setActiveCategory,
            setActiveSort,
          }}
        >
          <Categories categories={categories} />
          <Sort />
        </SortContext.Provider>
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
