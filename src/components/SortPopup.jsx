import { useContext } from "react"
import { initialState } from "../state"
import { SortContext } from "../pages/HomePage"

const SortPopup = ({ visible, setVisible }) => {
  const { activeSort, setActiveSort } = useContext(SortContext)
  const { sortParams } = initialState

  function changeActive(name) {
    setActiveSort(name)
    setVisible(false)
  }

  return (
    <div
      className={`sort__popup ${
        visible ? "sort__popup-visible" : "sort__popup-hidden"
      }`}
    >
      <ul>
        {sortParams.map((sort) => (
          <li
            className={activeSort === sort.id ? "active" : null}
            onClick={() => changeActive(sort.type)}
            key={sort.id}
          >
            {sort.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default SortPopup
