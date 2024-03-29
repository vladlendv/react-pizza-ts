import { useSelector } from "react-redux"
import styles from "./ErrorPageBlock.module.scss"
import errorImg from "../../assets/img/error-page.png"

const ErrorPageBlock = () => {
  const { errorMessage } = useSelector((state) => state.pizza)

  return (
    <div className={styles.title}>
      <h1>Не удалось загрузить список пицц</h1>
      <img src={errorImg} alt="error page" />
      <p>{errorMessage}</p>
    </div>
  )
}
export default ErrorPageBlock
