import NavLinks from './NavLinks'
import styles from '../../styles/Header.module.css'

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLinks />
    </nav>
  )
}
