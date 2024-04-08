import { setActiveSort } from "../redux/searchSlice"
import { Sort } from "../redux/pizzaSlice"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"

type Props = {
  visible: boolean
  setVisible: (arg: false) => void
}

const SortPopup: React.FC<Props> = ({ visible, setVisible }) => {
  const dispatch = useAppDispatch()
  const { activeSort, sortParams } = useAppSelector((state) => state.search)

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
}
export default SortPopup
