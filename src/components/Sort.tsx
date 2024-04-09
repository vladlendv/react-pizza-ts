import { memo, useEffect, useRef, useState } from "react"
import SortPopup from "./SortPopup"
import arrowTop from "../assets/img/arrow-top.svg"
import arrowDown from "../assets/img/drop-down-arrow.svg"
import { useAppSelector } from "../hooks/hooks"

const Sort: React.FC = memo(() => {
  const [visible, setVisible] = useState<boolean>(false)
  const activeSort = useAppSelector((state) => state.search.activeSort)
  const sortRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setVisible(false)
      }
    }
    document.body.addEventListener("click", handleClick)
    return () => document.body.removeEventListener("click", handleClick)
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
})
export default Sort
