import { Link } from "react-router-dom"
import logo from "../assets/img/pizza-svgrepo-com.svg"

const Logo = () => {
  return (
    <Link to="/">
      <div className="header__logo">
        <img width="38" src={logo} alt="Pizza logo" />
        <div>
          <h1>Two Pizza</h1>
          <p>Одна по цене двух, успей заказать!</p>
        </div>
      </div>
    </Link>
  )
}
export default Logo
