import Spinner from 'react-bootstrap/Spinner'
import styles from './index.module.scss'

function LoadingScreen() {
  return (
    <div className={styles.loadingScreen}>
      <Spinner animation='border' />
    </div>
  )
}

export default LoadingScreen
