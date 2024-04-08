import { useLocation } from "react-router-dom"
import HeaderCart from "./HeaderCart"
import Logo from "./Logo"

const Header: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <div className="header">
      <div className="container">
        <Logo />
        {pathname !== "/cart" && <HeaderCart />}
      </div>
    </div>
  )
}
export default Header
