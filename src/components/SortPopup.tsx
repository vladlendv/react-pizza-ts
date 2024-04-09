import { setActiveSort } from "../redux/searchSlice"
import { Sort } from "../redux/pizzaSlice"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { memo } from "react"

type Props = {
  visible: boolean
  setVisible: (arg: false) => void
}

const SortPopup: React.FC<Props> = memo(({ visible, setVisible }) => {
  const dispatch = useAppDispatch()
  const activeSort = useAppSelector((state) => state.search.activeSort)
  const sortParams = useAppSelector((state) => state.search.sortParams)

  function changeActive(sortType: Sort) {
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
        {sortParams.map((sort) => {
          return (
            <li
              className={activeSort.id === sort.id ? "active" : undefined}
              onClick={() => changeActive(sort)}
              key={sort.id}
            >
              {sort.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
})
export default SortPopup
