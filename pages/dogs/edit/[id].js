import { parseCookies } from '../../../helpers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegFile } from 'react-icons/fa'
import Layout from '../../../components/Layout'
import Modal from '../../../components/Modal'
import ImageUpload from '../../../components/ImageUpload'
import { API_URL } from '../../../config/index'
import styles from '../../../styles/Form.module.css'

export default function EditDogPage({ dog, token }) {
  const [values, setValues] = useState({
    name: dog.name,
    age: dog.age,
    breed: dog.breed,
    color: dog.color,
    description: dog.description,
    gender: dog.gender,
    health: dog.health,
    location: dog.location,
    size: dog.size,
    isCatsFriendly: dog.isCatsFriendly,
    isCityFriendly: dog.isCityFriendly,
    isDogsFriendly: dog.isDogsFriendly,
    isHomeFriendly: dog.isHomeFriendly,
    isKidsFriendly: dog.isKidsFriendly,
    isToiletFriendly: dog.isToiletFriendly,
    skills: dog.skills,
    food: dog.food,
  })

  const [imagePreview, setImagePreview] = useState(
    dog.images[0] ? dog.images[0].formats.thumbnail.url : null
  )

  const [showModal, setShowModal] = useState(false)

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

    const res = await fetch(`${API_URL}/dogs/${dog.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('Unauthorized')
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

  const imageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/dogs/${dog.id}`)
    const data = await res.json()
    setImagePreview(data.images[0].formats.thumbnail.url)
    setShowModal(false)
  }

  return (
    <Layout title="??????????????????????????">
      <Link href="/dogs">??????????</Link>
      <h2>??????????????????????????</h2>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">????????????</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="age">??????????????</label>
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
            <label htmlFor="breed">????????????</label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={values.breed}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="color">??????????????????</label>
            <input
              type="text"
              id="color"
              name="color"
              value={values.color}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="gender">??????</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="health">????????????????</label>
            <input
              type="text"
              id="health"
              name="health"
              value={values.health}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="size">??????????????</label>
            <input
              type="text"
              id="size"
              name="size"
              value={values.size}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="location">??????????????</label>
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
            <label htmlFor="isCatsFriendly">?????????? ?? ????????????</label>
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
            <label htmlFor="isDogsFriendly">?????????? ?? ????????????????</label>
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
            <label htmlFor="isKidsFriendly">?????????? ?? ????????????</label>
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
            <label htmlFor="isCityFriendly">???????????? ?? ????????????</label>
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
            <label htmlFor="isHomeFriendly">???????????????? ?? ????????</label>
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
            <label htmlFor="isToiletFriendly">???????????????? ?? ??????????????</label>
          </div>
        </div>

        <div>
          <label htmlFor="skills">????????????</label>
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
          <label htmlFor="food">??????????????</label>
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
          <label htmlFor="description">About</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <input type="submit" value="????????????????" className="btn" />
      </form>

      <h2>????????</h2>

      {imagePreview ? (
        <div>
          <Image src={imagePreview} width={250} height={250} />
        </div>
      ) : (
        <div>
          <p>?????? ????????</p>
        </div>
      )}

      <div>
        <button className="btn" onClick={() => setShowModal(true)}>
          <FaRegFile /> ?????????????????? ????????
        </button>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload
          petId={dog.id}
          imageUploaded={imageUploaded}
          token={token}
        />
      </Modal>
    </Layout>
  )
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req)

  const res = await fetch(`${API_URL}/dogs/${id}`)
  const dog = await res.json()

  return {
    props: { dog, token },
  }
}
