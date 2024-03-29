import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import PizzaLoader from "../components/PizzaLoader"
import PizzaBlock from "../components/PizzaBlock"
import Categories from "../components/Categories"
import Sort from "../components/Sort"
import Search from "../components/Search/Search"
import axios from "axios"

const HomePage = ({ setOrderQuantity }) => {
  const API_URL = "https://64ba3cb25e0670a501d5d86e.mockapi.io/pizza"
  const activeCategory = useSelector((state) => state.search.active)
  const activeSort = useSelector((state) => state.search.activeSort)
  const [isLoading, setIsLoading] = useState(false)
  const [pizzaList, setPizzaList] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(
        `${API_URL}?sortBy=${activeSort.type}${
          activeSort.desc === "asc"
            ? "&order=asc"
            : activeSort.desc === "desc"
            ? "&order=desc"
            : ""
        }${activeCategory > 0 ? "&category=" + activeCategory : ""}`
      )
      .then((res) => {
        setPizzaList(res.data)
        setIsLoading(false)
      })
  }, [activeCategory, activeSort])

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

      <div className="content__items">
        {isLoading
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
    </div>
  )
}
export default HomePage
