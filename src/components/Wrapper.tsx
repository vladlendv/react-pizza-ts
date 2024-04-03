import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="container">{children}</div>
    </div>
  )
}
export default Wrapper
