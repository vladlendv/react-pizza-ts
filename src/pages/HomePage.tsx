import { useEffect } from "react"
import PizzaLoader from "../components/PizzaLoader"
import PizzaBlock from "../components/PizzaBlock"
import Categories from "../components/Categories"
import Sort from "../components/Sort"
import Search from "../components/Search/Search"
import ErrorPage from "./ErrorPage"
import { fetchPizza } from "../redux/pizzaSlice"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"

const HomePage: React.FC = () => {
  const { activeCategory, activeSort, searchText } = useAppSelector(
    (state) => state.search
  )
  const { pizzaList, status } = useAppSelector((state) => state.pizza)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      fetchPizza({
        activeSort,
        activeCategory,
      })
    )
  }, [activeCategory, activeSort, dispatch])

  return (
    <div className="content">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <div className="content__search">
        <h2 className="content__search--title">Все пиццы</h2>
        <Search />
      </div>

      {status === "failed" ? (
        <ErrorPage />
      ) : (
        <div className="content__items">
          {status === "loading"
            ? [...new Array(3)].map((el, index) => <PizzaLoader key={index} />)
            : pizzaList
                .filter((item) =>
                  item.title.toLowerCase().includes(searchText.toLowerCase())
                )
                .map((item) => (
                  <PizzaBlock
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    types={item.types}
                    sizes={item.sizes}
                    price={item.price}
                    imageUrl={item.imageUrl}
                  />
                ))}
        </div>
      )}
    </div>
  )
}
export default HomePage
