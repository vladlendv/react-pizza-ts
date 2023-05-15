import HeaderCart from "./HeaderCart"
import Logo from "./Logo"

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <HeaderCart />
      </div>
    </div>
  )
}
export default Header
