export const initialState = {
  categories: [
    { name: "Все", id: 0 },
    { name: "Мясные", id: 1 },
    { name: "Вегитарианские", id: 2 },
    { name: "Гриль", id: 3 },
    { name: "Острые", id: 4 },
    { name: "Закрытые", id: 5 },
  ],
  sortParams: [
    { type: "rating", title: "популярности", id: 0 },
    { type: "price", id: 1, title: "цене" },
    { type: "title", id: 2, title: "алфавиту" },
  ],
}
