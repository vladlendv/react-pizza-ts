import { useEffect, useRef, useState } from "react"
import SortPopup from "./SortPopup"
import arrowTop from "../assets/img/arrow-top.svg"
import arrowDown from "../assets/img/drop-down-arrow.svg"
import { useSelector } from "react-redux"

const Sort = () => {
  const [visible, setVisible] = useState(false)
  const activeSort = useSelector((state) => state.search.activeSort)
  const sortRef = useRef()

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (!e.composedPath().includes(sortRef.current)) setVisible(false)
    })
  }, [])

  return (
    <div ref={sortRef} className="sort">
      <div onClick={() => setVisible(!visible)} className="sort__label">
        <img src={visible ? arrowTop : arrowDown} alt="arrow" />
        <b>Сортировка:</b>
        <span>{activeSort.title}</span>
      </div>
      <SortPopup visible={visible} setVisible={setVisible} />
    </div>
  )
}
export default Sort
