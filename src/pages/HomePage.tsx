import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PizzaLoader from "../components/PizzaLoader"
import PizzaBlock from "../components/PizzaBlock"
import Categories from "../components/Categories"
import Sort from "../components/Sort"
import Search from "../components/Search/Search"
import ErrorPage from "./ErrorPage"
import { fetchPizza } from "../redux/pizzaSlice"
import { AppDispatch, RootState } from "../redux/store"

const HomePage: React.FC = () => {
  const { activeCategory, activeSort, searchText } = useSelector(
    (state: RootState) => state.search
  )
  const { pizzaList, status } = useSelector((state: RootState) => state.pizza)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(
      fetchPizza({
        activeSort,
        activeCategory,
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, dispatch])

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
