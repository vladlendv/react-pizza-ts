import { useState } from "react"
import SortPopup from "./SortPopup"
import arrowTop from "../assets/img/arrow-top.svg"
import arrowDown from "../assets/img/drop-down-arrow.svg"

const Sort = ({activeSort, setActiveSort}) => {
  const [visible, setVisible] = useState(false)
  activeSort = activeSort === 'title' ? 'алфавиту' : activeSort === 'price' ? 'цене' : 'популярности'

  return (
    <div className="sort">
      <div onClick={() => setVisible(!visible)} className="sort__label">
        <img src={visible ? arrowTop : arrowDown} alt="arrow" />
        <b>Сортировка по:</b>
        <span>{activeSort}</span>
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
