import { useContext, useState } from "react"
import SortPopup from "./SortPopup"
import arrowTop from "../assets/img/arrow-top.svg"
import arrowDown from "../assets/img/drop-down-arrow.svg"
import { SortContext } from "../pages/HomePage"

const Sort = () => {
  const [visible, setVisible] = useState(false)
  const { activeSort, setActiveSort } = useContext(SortContext)
  let sortType =
    activeSort === "title"
      ? "алфавиту"
      : activeSort === "price"
      ? "цене"
      : "популярности"

  return (
    <div className="sort">
      <div onClick={() => setVisible(!visible)} className="sort__label">
        <img src={visible ? arrowTop : arrowDown} alt="arrow" />
        <b>Сортировка по:</b>
        <span>{sortType}</span>
      </div>
      <SortPopup
        visible={visible}
        activeSort={activeSort}
        setActiveSort={setActiveSort}
        setVisible={setVisible}
      />
    </div>
  )
}
export default Sort
