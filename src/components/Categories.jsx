// import { useState } from "react"

const Categories = ({ categories, activeCategory, setActiveCategory }) => {
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
