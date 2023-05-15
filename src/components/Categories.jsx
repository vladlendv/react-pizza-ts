const Categories = ({ categories }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  )
}
export default Categories
