import { useSelector } from "react-redux"
import styles from "./ErrorPageBlock.module.scss"
import errorImg from "../../assets/img/error-page.png"
import { RootState } from "../../redux/store"

const ErrorPageBlock: React.FC = () => {
  const { errorMessage } = useSelector((state: RootState) => state.pizza)

  return (
    <div className={styles.title}>
      <h1>Не удалось загрузить список пицц</h1>
      <img src={errorImg} alt="error page" />
      <p>{errorMessage}</p>
    </div>
  )
}
export default ErrorPageBlock
