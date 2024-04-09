import { setActiveCategory } from "../redux/searchSlice"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { memo } from "react"

const Categories: React.FC = memo(() => {
  const categories = useAppSelector((state) => state.search.categories)
  const activeCategory = useAppSelector((state) => state.search.activeCategory)
  const dispatch = useAppDispatch()

  return (
    <div className="categories">
      <ul>
        {categories.map((item) => (
          <li
            className={activeCategory === item.id ? "active" : ""}
            onClick={() => dispatch(setActiveCategory(item.id))}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
})
export default Categories
