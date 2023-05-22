import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import styles from './index.module.scss'
import avatar from '../assets/react.svg'

function Menu({ open, setClose }: IMenu) {
  const handleOpen = () => {
    setClose(!open)
  }

  return (
    <div className={styles.menu}>
      <Button onClick={handleOpen} variant='light' size='sm'>
        <svg viewBox='0 0 100 80' width='40' height='40'>
          <rect width='100' height='20'></rect>
          <rect y='30' width='100' height='20'></rect>
          <rect y='60' width='100' height='20'></rect>
        </svg>
      </Button>
      {open && (
        <section className={styles.menuContent}>
          <img src={avatar} alt='avatar' />
          <h3>Alex</h3>
          <h3>example@gmail.com</h3>
          <Link to='/'>Posts</Link>
          <Link to='aboutme'>About me</Link>
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
