import { memo, useRef } from "react"
import styles from "./Search.module.scss"
import { removeSearchText, setSearchText } from "../../redux/searchSlice"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"

const Search: React.FC = memo(() => {
  const dispatch = useAppDispatch()
  const searchText = useAppSelector((state) => state.search.searchText)
  let inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <input
        name="search"
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
})
export default Search
