import { parseCookies } from '../../helpers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'
import styles from '../../styles/Form.module.css'

export default function AddDogPage({ token }) {
  const [values, setValues] = useState({
    name: '',
    age: '',
    breed: '',
    color: '',
    description: '',
    gender: '',
    health: '',
    location: '',
    size: '',
    isCatsFriendly: false,
    isCityFriendly: false,
    isDogsFriendly: false,
    isHomeFriendly: false,
    isKidsFriendly: false,
    isToiletFriendly: false,
    skills: '',
    food: '',
  })

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    )

    if (hasEmptyFields) {
      toast.error('Please fill in all fields')
    }

    const res = await fetch(`${API_URL}/dogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('No token included')
        return
      }
      toast.error('Something went wrong')
    } else {
      const dog = await res.json()
      router.push(`/dogs/${dog.slug}`)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setValues({ ...values, [name]: value })
  }

  const handleBoolInputChange = (e) => {
    const { name, checked } = e.target
    setValues({ ...values, [name]: checked })
  }

  return (
    <Layout title="Добавить">
      <Link href="/dogs">Назад</Link>
      <h1>Добавить пёсика</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Кличка</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="age">Возраст</label>
            <input
              type="text"
              id="age"
              name="age"
              value={values.age}
              onChange={handleInputChange}
              placeholder="adult, senior, puppy"
            />
          </div>
          <div>
            <label htmlFor="breed">Порода</label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={values.breed}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="color">Окрас</label>
            <input
              type="text"
              id="color"
              name="color"
              value={values.color}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="gender">Пол</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="health">Здоровье</label>
            <input
              type="text"
              id="health"
              name="health"
              value={values.health}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="size">Размер</label>
            <input
              type="text"
              id="size"
              name="size"
              value={values.size}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="location">Локация</label>
            <input
              type="text"
              id="location"
              name="location"
              value={values.location}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <input
              className={styles.customCheckbox}
              defaultChecked={values.isCatsFriendly}
              type="checkbox"
              id="isCatsFriendly"
              name="isCatsFriendly"
              value={values.isCatsFriendly}
              onChange={handleBoolInputChange}
            />
            <label htmlFor="isCatsFriendly">Дружу с котами</label>
          </div>

          <div>
            <input
              className={styles.customCheckbox}
              defaultChecked={values.isDogsFriendly}
              type="checkbox"
              id="isDogsFriendly"
              name="isDogsFriendly"
              value={values.isDogsFriendly}
              onChange={handleBoolInputChange}
            />
            <label htmlFor="isDogsFriendly">Дружу с собаками</label>
          </div>

          <div>
            <input
              className={styles.customCheckbox}
              defaultChecked={values.isKidsFriendly}
              type="checkbox"
              id="isKidsFriendly"
              name="isKidsFriendly"
              value={values.isKidsFriendly}
              onChange={handleBoolInputChange}
            />
            <label htmlFor="isKidsFriendly">Дружу с детьми</label>
          </div>

          <div>
            <input
              className={styles.customCheckbox}
              defaultChecked={values.isCityFriendly}
              type="checkbox"
              id="isCityFriendly"
              name="isCityFriendly"
              value={values.isCityFriendly}
              onChange={handleBoolInputChange}
            />
            <label htmlFor="isCityFriendly">Хорошо в городе</label>
          </div>

          <div>
            <input
              className={styles.customCheckbox}
              defaultChecked={values.isHomeFriendly}
              type="checkbox"
              id="isHomeFriendly"
              name="isHomeFriendly"
              value={values.isHomeFriendly}
              onChange={handleBoolInputChange}
            />
            <label htmlFor="isHomeFriendly">Приучена к дому</label>
          </div>

          <div>
            <input
              className={styles.customCheckbox}
              defaultChecked={values.isToiletFriendly}
              type="checkbox"
              id="isToiletFriendly"
              name="isToiletFriendly"
              value={values.isToiletFriendly}
              onChange={handleBoolInputChange}
            />
            <label htmlFor="isToiletFriendly">Приучена к туалету</label>
          </div>
        </div>

        <div>
          <label htmlFor="skills">Навыки / Команды</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={values.skills}
            onChange={handleInputChange}
          />
        </div>

        <br />

        <div>
          <label htmlFor="food">Питание</label>
          <input
            type="text"
            id="food"
            name="food"
            value={values.food}
            onChange={handleInputChange}
          />
        </div>

        <br />

        <div>
          <label htmlFor="description">Описание</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <input type="submit" value="Добавить" className="btn" />
      </form>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  return {
    props: {
      token,
    },
  }
}
