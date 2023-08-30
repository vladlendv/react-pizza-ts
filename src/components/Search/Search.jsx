const Search = ({ text, setText }) => {
  return (
    <>
      <input
        onChange={(e) => setText(e.target.value.toLowerCase())}
        value={text}
        placeholder="Введите название"
      />
      {text && <span onClick={() => setText("")}>X</span>}
    </>
  )
}
export default Search
