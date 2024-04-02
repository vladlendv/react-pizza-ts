import { useDispatch, useSelector } from "react-redux"
import { setActiveCategory } from "../redux/searchSlice"

const Categories = () => {
  const { categories, activeCategory } = useSelector((state) => state.search)
  const dispatch = useDispatch()

  return (
    <div className="categories">
      <ul>
        {categories.map((item) => (
          <li
            className={activeCategory === item.id ? "active" : null}
            onClick={() => dispatch(setActiveCategory(item.id))}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Categories
