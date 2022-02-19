import { useState } from 'react'
import NavLinks from './NavLinks'
import { CgMenuRound, CgCloseO } from 'react-icons/cg'
import styles from '../../styles/Header.module.css'

export default function MobileNavigation() {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = (
    <CgMenuRound
      className={styles.Hamburger}
      size='40px'
      color='#343a40'
      onClick={() => setOpen(!open)}
    />
  )

  const closeIcon = (
    <CgCloseO
      className={styles.Hamburger}
      size='40px'
      color='#343a40'
      onClick={() => setOpen(!open)}
    />
  )

  const closeMenu = () => setOpen(false)

  return (
    <nav className={styles.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMenu={closeMenu} />}
    </nav>
  )
}
