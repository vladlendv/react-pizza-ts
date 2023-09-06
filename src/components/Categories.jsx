import { useDispatch, useSelector } from "react-redux"
import { setActive } from "../store/sliceCategories"

const Categories = () => {
  const state = useSelector((state) => state.categories)
  const dispatch = useDispatch()

  return (
    <div className="categories">
      <ul>
        {state.categories.map((category) => (
          <li
            className={state.active === category.id ? "active" : null}
            onClick={() => dispatch(setActive(category.id))}
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
