import { useDispatch, useSelector } from "react-redux"
import { setActiveCategory } from "../redux/searchSlice"
import { AppDispatch, RootState } from "../redux/store"

const Categories: React.FC = () => {
  const { categories, activeCategory } = useSelector((state: RootState) => state.search)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="categories">
      <ul>
        {categories.map((item) => (
          <li
            className={activeCategory === item.id ? "active" : ''}
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
