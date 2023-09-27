import { useDispatch, useSelector } from "react-redux"
import { setActiveCategory } from "../redux/searchSlice"

const Categories = () => {
  const state = useSelector((state) => state.search)
  const dispatch = useDispatch()

  return (
    <div className="categories">
      <ul>
        {state.categories.map((category) => (
          <li
            className={state.active === category.id ? "active" : null}
            onClick={() => dispatch(setActiveCategory(category.id))}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Categories
