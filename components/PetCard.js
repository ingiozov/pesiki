import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/PetCard.module.css'

export default function PetCard({ dog }) {
  return (
    <Link href={`/dogs/${dog.slug}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          {dog.images && (
            <Image
              alt={dog.name}
              src={dog.images[0].formats.small.url}
              layout='fill'
              objectFit='cover'
            />
          )}
        </div>

        <div className={styles.caption}>
          <h3>{dog.name}</h3>
        </div>
      </div>
    </Link>
  )
}
