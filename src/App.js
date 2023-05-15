import Categories from "./components/Categories"
import Header from "./components/Header"
import Sort from "./components/Sort"
import PizzaBlock from "./components/PizzaBlock"
import { initialState } from "./state"

const App = () => {
  const { pizzaList, categories } = initialState

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories categories={categories} />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzaList.map((item) => (
              <PizzaBlock
                key={item.id}
                title={item.title}
                types={item.types}
                sizes={item.sizes}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
