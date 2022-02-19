import Link from 'next/link'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import styles from '../../styles/Header.module.css'

export default function NavLinks({ isMobile, closeMenu }) {
  const { user, logout } = useContext(AuthContext)

  return (
    <ul>
      {user ? (
        // If logged in
        <>
          <li onClick={() => isMobile && closeMenu()}>
            <Link href='/dogs/add'>Добавить</Link>
          </li>

          <li onClick={() => isMobile && closeMenu()}>
            <Link href='/account/dashboard'>Мои Пёсики</Link>
          </li>

          <li onClick={() => isMobile && closeMenu()}>
            <button className={styles.navbutton} onClick={() => logout()}>
              Выйти
            </button>
          </li>
        </>
      ) : (
        // If logged out
        <>
          <li onClick={() => isMobile && closeMenu()}>
            <Link href='/dogs'>
              <a>Все пёсики</a>
            </Link>
          </li>

          <li onClick={() => isMobile && closeMenu()}>
            <Link href='/account/login'>Войти</Link>
          </li>
        </>
      )}

      <li onClick={() => isMobile && closeMenu()}>
        <Link href='/about'>Контакты</Link>
      </li>
    </ul>
  )
}
