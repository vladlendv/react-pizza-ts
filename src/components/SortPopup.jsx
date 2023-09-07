import { useDispatch, useSelector } from "react-redux"
import { setActiveSort } from "../store/sortSlice"

const SortPopup = ({ visible, setVisible }) => {
  const dispatch = useDispatch()
  const { activeSort, sortParams } = useSelector((state) => state.sort)

  function changeActive(sortType) {
    dispatch(setActiveSort(sortType))
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
