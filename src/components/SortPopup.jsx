import { useContext } from "react"
import { SortContext } from "../pages/HomePage"

const SortPopup = ({ visible, setVisible }) => {
  const { activeSort, setActiveSort, sortParams } = useContext(SortContext)

  function changeActive(sortType) {
    setActiveSort(sortType)
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
            className={activeSort.id === sort.id ? "active" : null}
            onClick={() => changeActive(sort)}
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
