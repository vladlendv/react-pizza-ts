import HeaderCart from "./HeaderCart"
import Logo from "./Logo"

const Header = ({ orderQuantity }) => {
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <HeaderCart orderQuantity={orderQuantity} />
      </div>
    </div>
  )
}
export default Header
