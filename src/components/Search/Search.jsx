import { useContext, useRef } from "react"
import styles from "./Search.module.scss"
import { useDispatch } from "react-redux"
import { removeSearchText, setSearchText } from "../../redux/searchSlice"

const Search = () => {
  const dispatch = useDispatch()
  const searchText = useContext((state) => state.search.searchText)
  let inputRef = useRef()

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
            inputRef.current.focus()
          }}
        >
          X
        </span>
      )}
    </>
  )
}
export default Search
