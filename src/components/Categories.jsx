// import { useState } from "react"

import { useContext } from "react"
import { SortContext } from "../pages/HomePage"

const Categories = ({ categories }) => {
  const { activeCategory, setActiveCategory } = useContext(SortContext)

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            className={activeCategory === category.id ? "active" : null}
            onClick={() => setActiveCategory(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Categories
