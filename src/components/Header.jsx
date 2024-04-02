import { useLocation } from "react-router-dom"
import HeaderCart from "./HeaderCart"
import Logo from "./Logo"

const Header = ({ orderQuantity }) => {
  const { pathname } = useLocation()

  return (
    <div className="header">
      <div className="container">
        <Logo />
        {pathname !== "/cart" && <HeaderCart orderQuantity={orderQuantity} />}
      </div>
    </div>
  )
}
export default Header
