import { useState } from "react"

const Categories = ({ categories }) => {
  const [active, setActive] = useState(0)

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            className={active === category.id ? "active" : null}
            onClick={() => setActive(category.id)}
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
