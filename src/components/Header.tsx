import { useState } from 'react'
import styles from './index.module.scss'
import Menu from './Menu'

function Header() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <header className={styles.header}>
      <Menu open={open} setClose={setOpen} />
    </header>
  )
}

export default Header
