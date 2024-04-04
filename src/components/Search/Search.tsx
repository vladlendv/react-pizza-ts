import { useRef } from "react"
import styles from "./Search.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { removeSearchText, setSearchText } from "../../redux/searchSlice"
import { AppDispatch, RootState } from "../../redux/store"

const Search: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { searchText } = useSelector((state: RootState) => state.search)
  let inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <input
        className={styles.input}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
        ref={inputRef}
        value={searchText}
        placeholder="Введите название"
      />
      {searchText && (
        <span
          className={styles.removeBtn}
          onClick={() => {
            dispatch(removeSearchText())
            if (inputRef.current) {
              inputRef.current.focus()
            }
          }}
        >
          X
        </span>
      )}
    </>
  )
}
export default Search
