const Search = ({ text, setText }) => {
  return (
    <>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Введите название"
      />
      <span>{text}</span>
    </>
  )
}
export default Search
