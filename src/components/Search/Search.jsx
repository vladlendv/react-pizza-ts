import { useContext } from "react"
import { SortContext } from "../../pages/HomePage"
import styles from "./Search.module.scss"

const Search = () => {
  const { searchText, setSearchText } = useContext(SortContext)

  return (
    <>
      <input
        className={styles.input}
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        placeholder="Введите название"
      />
      {searchText && (
        <span className={styles.removeBtn} onClick={() => setSearchText("")}>
          X
        </span>
      )}
    </>
  )
}
export default Search
