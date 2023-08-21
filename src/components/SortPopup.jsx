import { initialState } from "../state"

const SortPopup = ({ activeSort, setActiveSort, visible, setVisible }) => {
  const { sortParams } = initialState

  function changeActive(name) {
    setActiveSort(name)
    setVisible(false)
  }

  return (
    <div
      className={`sort__popup ${
        visible ? "sort__popup-visible" : "sort__popup-hidden"
      }`}
    >
      <ul>
        {sortParams.map((sort) => (
          <li
            className={activeSort === sort.id ? "active" : null}
            onClick={() => changeActive(sort.type)}
            key={sort.id}
          >
            {sort.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default SortPopup
