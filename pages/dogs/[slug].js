import { useRouter } from 'next/router'
import { API_URL } from '../../config'
import Layout from '../../components/Layout'
import PetDetails from '../../components/PetDetails'
import Slider from '../../components/Slider'
import { useContext } from 'react'
import Link from 'next/link'
import { FaEdit } from 'react-icons/fa'
import AuthContext from '../../context/AuthContext'

export default function DogPage({ dog }) {
  const router = useRouter()

  const { user } = useContext(AuthContext)

  return (
    <Layout title={dog.name}>
      {dog.images[0] && <Slider pet={dog} />}

      <PetDetails pet={dog} />

      <br />

      {user && (
        <div className='block'>
          <Link href={`/dogs/edit/${dog.id}`}>
            <a>
              <FaEdit /> Редактировать
            </a>
          </Link>
        </div>
      )}
    </Layout>
  )
}

export async function getServerSideProps({ req, query: { slug } }) {
  const res = await fetch(`${API_URL}/dogs?slug=${slug}`)
  const dogs = await res.json()

  return {
    props: { dog: dogs[0] },
  }
}
