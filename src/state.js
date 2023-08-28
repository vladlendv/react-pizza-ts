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
    { type: "rating", title: "По рейтингу", id: 0 },
    { type: "price", desc: "desc", id: 1, title: "По убыванию цены" },
    { type: "price", desc: "asc", id: 2, title: "По возрастанию цены" },
    { type: "title", id: 3, title: "По названию" },
  ],
}
