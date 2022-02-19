import { useState } from 'react'
import { API_URL } from '../config'
import styles from '../styles/Form.module.css'
import axios from 'axios'
import { TailSpin } from 'react-loader-spinner'

const calcPercent = (value, total) => {
  return Math.round((value / total) * 100)
}

export default function ImageUpload({ petId, imageUploaded, token }) {
  const [images, setImages] = useState(null)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [submited, setSubmited] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmited(true)
    const formData = new FormData()
    formData.append('ref', 'dogs')
    formData.append('refId', petId)
    formData.append('field', 'images')
    images.forEach((image) => formData.append('files', image, image.name))

    const res = await axios({
      url: `${API_URL}/upload`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: formData,
      onUploadProgress: (progress) =>
        setProgress(calcPercent(progress.loaded, progress.total)),
    })

    if (res.status === 200) {
      imageUploaded()
    }

    setLoading(false)
  }

  const handleFileChange = (e) => {
    const images = Array.from(e.target.files)
    setImages(images)
    setSubmited(false)
  }

  return (
    <div className={styles.form}>
      <h1>Загрузить фото</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" multiple onChange={handleFileChange} />
        </div>
        <input type="submit" value="Загрузить" className="btn" />
      </form>

      {submited && (
        <div className="progressbar">
          <div className="progress">
            <div
              className="progress__seek"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {loading && <TailSpin color="#343a40" height={20} width={20} />}
        </div>
      )}
    </div>
  )
}
