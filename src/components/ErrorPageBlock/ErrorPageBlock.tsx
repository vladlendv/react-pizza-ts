import styles from "./ErrorPageBlock.module.scss"
import errorImg from "../../assets/img/error-page.png"
import { useAppSelector } from "../../hooks/hooks"

const ErrorPageBlock: React.FC = () => {
  const { errorMessage } = useAppSelector((state) => state.pizza)

  return (
    <div className={styles.title}>
      <h1>Не удалось загрузить список пицц</h1>
      <img src={errorImg} alt="error page" />
      <p>{errorMessage}</p>
    </div>
  )
}
export default ErrorPageBlock
