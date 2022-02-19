import Link from 'next/link'
import Navigation from './NavBar/Navigation'
import MobileNavigation from './NavBar/MobileNavigation'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href='/'>
          <a className={styles.logo}>Пёсики</a>
        </Link>
      </div>

      <div className={styles.Navbar}>
        <Navigation />
        <MobileNavigation />
      </div>
    </header>
  )
}
