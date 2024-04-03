import { useDispatch, useSelector } from "react-redux"
import { setActiveSort } from "../redux/searchSlice"
import { RootState } from "../redux/store"

type Props = {
  visible: boolean
  setVisible: (arg: false) => void
}

interface ISort {
  type: string
  title: string
  id: number
}

const SortPopup: React.FC<Props> = ({ visible, setVisible }) => {
  const dispatch = useDispatch()
  const { activeSort, sortParams } = useSelector(
    (state: RootState) => state.search
  )

  function changeActive(sortType: ISort) {
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
