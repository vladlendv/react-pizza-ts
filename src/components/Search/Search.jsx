import { useRef } from "react"
import styles from "./Search.module.scss"

const Search = ({ searchText, setSearchText }) => {
  let inputRef = useRef()

  return (
    <>
      <input
        className={styles.input}
        onChange={(e) => setSearchText(e.target.value)}
        ref={inputRef}
        value={searchText}
        placeholder="Введите название"
      />
      {searchText && (
        <span className={styles.removeBtn} onClick={() => {
          setSearchText("")
          inputRef.current.focus()
        }}>
          X
        </span>
      )}
    </>
  )
}
export default Search
