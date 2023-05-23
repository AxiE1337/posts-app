import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import styles from './index.module.scss'

function Menu({ open, setClose }: IMenu) {
  const handleOpen = () => {
    setClose(!open)
  }
  const handleClose = () => {
    setClose(false)
  }

  return (
    <div className={styles.menu}>
      <Button onClick={handleOpen} variant='light' size='sm'>
        <svg viewBox='0 0 100 80' width='40' height='40'>
          <rect width='100' height='10'></rect>
          <rect y='30' width='100' height='10'></rect>
          <rect y='60' width='100' height='10'></rect>
        </svg>
      </Button>
      {open && (
        <section className={styles.menuContent}>
          <div className={styles.user}>
            <img
              src='https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg'
              alt='avatar'
              className={styles.userAvatar}
            />
            <h3>Alex</h3>
          </div>
          <h3>example@gmail.com</h3>
          <Link onClick={handleClose} to='/'>
            Posts
          </Link>
          <Link onClick={handleClose} to='aboutme'>
            About me
          </Link>
        </section>
      )}
    </div>
  )
}

export default Menu

interface IMenu {
  open: boolean
  setClose: (value: boolean) => void
}
