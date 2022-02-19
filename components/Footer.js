import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copiright &copy; PetFriender</p>
      <p>
        <Link href='/about'>Обо мне</Link>
      </p>
    </footer>
  )
}
