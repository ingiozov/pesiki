import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Showcase.module.css'
import { FaFacebook } from 'react-icons/fa'

export default function Showcase() {
  return (
    <div className={styles.hero}>
      <div className={styles.showcase}>
        <div className={styles.caption}>
          <h1>
            Помогая животным, ты меняешь <span>мир</span>
          </h1>
          <p>
            Все пёсики на этом сайте попали сюда с улиц и ждут своего человека
          </p>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image src={'/images/inna.jpg'} alt={'inna'} layout='fill' />
            </div>
            <div className={styles.cite}>
              <h3>
                Привет, меня зовут Инна,
                <br />я зооволонтер
              </h3>
              <div className={styles.square}>
                <Link href={'https://www.facebook.com/innastepes'}>
                  <a>
                    <FaFacebook />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
