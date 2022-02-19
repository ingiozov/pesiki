import styles from '../styles/PetCards.module.css'

export default function PetCards({ children }) {
  return <div className={styles.cards}>{children}</div>
}
