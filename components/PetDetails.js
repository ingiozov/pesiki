import Image from 'next/image'
import styles from '../styles/PetDetails.module.css'
import classNames from 'classnames'
import {
  FaBolt,
  FaHome,
  FaCat,
  FaCity,
  FaDog,
  FaChild,
  FaLocationArrow,
  FaToilet,
  FaCheck,
  FaMinus,
} from 'react-icons/fa'
import { GiMeat } from 'react-icons/gi'

export default function PetDetails({ pet }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>{pet.name}</h1>
          <div>
            <span>{pet.breed}</span>
            <span>{pet.location}</span>
          </div>
        </div>
        {/* <div className={styles.image}>
          {pet.images[0] && (
            <Image
              src={pet.images[0]?.formats.thumbnail.url}
              layout='fill'
              objectFit='cover'
            />
          )}
        </div> */}
      </div>

      <div className={styles.cards}>
        {/* <div className={styles.card}>
          Activity <FaBolt className={styles.icon} />
          {pet.activity}
        </div> */}

        <div
          className={classNames(styles.card, {
            [styles.card_false]: !pet.isCatsFriendly,
          })}
        >
          С котами <FaCat className={styles.icon} />
          {pet.isCatsFriendly ? <FaCheck /> : <FaMinus />}
        </div>
        <div
          className={classNames(styles.card, {
            [styles.card_false]: !pet.isDogsFriendly,
          })}
        >
          С собаками <FaDog className={styles.icon} />
          {pet.isDogsFriendly ? <FaCheck /> : <FaMinus />}
        </div>
        <div
          className={classNames(styles.card, {
            [styles.card_false]: !pet.isKidsFriendly,
          })}
        >
          С детьми <FaChild className={styles.icon} />
          {pet.isKidsFriendly ? <FaCheck /> : <FaMinus />}
        </div>
        <div
          className={classNames(styles.card, {
            [styles.card_false]: !pet.isCityFriendly,
          })}
        >
          В городе <FaCity className={styles.icon} />
          {pet.isCityFriendly ? <FaCheck /> : <FaMinus />}
        </div>
        <div
          className={classNames(styles.card, {
            [styles.card_false]: !pet.isHomeFriendly,
          })}
        >
          Дома <FaHome className={styles.icon} />
          {pet.isHomeFriendly ? <FaCheck /> : <FaMinus />}
        </div>
        {/* <div className={styles.card}>
          Food <GiMeat className={styles.icon} />
          {pet.meal}
        </div> */}
        <div
          className={classNames(styles.card, {
            [styles.card_false]: !pet.isToiletFriendly,
          })}
        >
          Туалет <FaToilet className={styles.icon} />
          {pet.isToiletFriendly ? <FaCheck /> : <FaMinus />}
        </div>
      </div>

      <div className={styles.char}>
        <span>{pet.age}</span>
        <span>{pet.gender}</span>
        <span>{pet.size}</span>
        <span>{pet.color}</span>
      </div>
      <div className={styles.info}>
        <h2>Здоровье</h2>
        <p>{pet.health}</p>
      </div>
      <div className={styles.skills}>
        <h2>Навыки</h2>
        <p>{pet.skills}</p>
      </div>
      <div className={styles.skills}>
        <h2>Питание</h2>
        <p>{pet.food}</p>
      </div>
      {/* <div className={styles.reminder}>
        <i className="bell icon"></i>
        <span>
          PetFriender recommends that you should always take reasonable security
          steps before making online payments.
        </span>
      </div> */}
      <div className={styles.description}>
        <h1>Описание</h1>
        <p>{pet.description}</p>
      </div>
    </div>
  )
}
