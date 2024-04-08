import { setActiveCategory } from "../redux/searchSlice"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"

const Categories: React.FC = () => {
  const { categories, activeCategory } = useAppSelector((state) => state.search)
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
}
export default Categories
