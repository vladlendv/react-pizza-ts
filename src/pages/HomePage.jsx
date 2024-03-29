import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PizzaLoader from "../components/PizzaLoader"
import PizzaBlock from "../components/PizzaBlock"
import Categories from "../components/Categories"
import Sort from "../components/Sort"
import Search from "../components/Search/Search"
import ErrorPage from "./ErrorPage"
import { fetchPizza } from "../redux/pizzaSlice"

const HomePage = ({ setOrderQuantity }) => {
  const activeCategory = useSelector((state) => state.search.active)
  const activeSort = useSelector((state) => state.search.activeSort)
  const { pizzaList, status } = useSelector((state) => state.pizza)
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState("")

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
        <Search searchText={searchText} setSearchText={setSearchText} />
      </div>

      {status === "failed" ? (
        <ErrorPage />
      ) : (
        <div className="content__items">
          {status === "loading"
            ? [...new Array(3)].map((el, index) => <PizzaLoader key={index} />)
            : pizzaList
                .filter((el) =>
                  el.title.toLowerCase().includes(searchText.toLowerCase())
                )
                .map((item) => (
                  <PizzaBlock
                    setOrderQuantity={setOrderQuantity}
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
