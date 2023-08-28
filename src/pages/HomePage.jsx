import { initialState } from "../state"
import { createContext, useEffect, useState } from "react"
import PizzaLoader from "../components/PizzaLoader"
import PizzaBlock from "../components/PizzaBlock"
import Categories from "../components/Categories"
import Sort from "../components/Sort"

export const SortContext = createContext(null)

const HomePage = ({ setOrderQuantity }) => {
  const API_URL = "https://64ba3cb25e0670a501d5d86e.mockapi.io/pizza"
  const { categories, sortParams } = initialState
  const [pizzaList, setPizzaList] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeSort, setActiveSort] = useState(sortParams[0])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(
      `${API_URL}?sortBy=${activeSort.type}${
        activeSort.desc === "asc"
          ? "&order=asc"
          : activeSort.desc === "desc"
          ? "&order=desc"
          : ""
      }${activeCategory > 0 ? "&category=" + activeCategory : ""}`
    )
      .then((data) => data.json())
      .then((res) => {
        setPizzaList(res)
        setIsLoading(false)
      })
  }, [activeCategory, activeSort])

  return (
    <div className="content">
      <div className="content__top">
        <SortContext.Provider
          value={{
            activeCategory,
            activeSort,
            sortParams,
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
        {isLoading
          ? [...new Array(3)].map((el, index) => <PizzaLoader key={index} />)
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
