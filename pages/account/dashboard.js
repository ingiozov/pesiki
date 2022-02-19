import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { parseCookies } from '../../helpers/index'
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import Layout from '../../components/Layout'
import PetCards from '../../components/PetCards'
import PetCard from '../../components/PetCard'
import { API_URL } from '../../config'
import styles from '../../styles/Dashboard.module.css'

export default function DashboardPage({ dogs, token }) {
  const router = useRouter()

  const deleteDog = async (id) => {
    if (confirm('Вы уверенны?')) {
      const res = await fetch(`${API_URL}/dogs/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.message)
      } else {
        router.reload()
      }
    }
  }

  return (
    <Layout title={'Мои пёсики'}>
      <h1>Мои пёсики</h1>
      <ToastContainer />
      <PetCards>
        {dogs.map((dog) => (
          <div key={dog.id} className='petcard'>
            <div className={styles.buttons}>
              <button>
                <Link href={`/dogs/edit/${dog.id}`}>
                  <span>
                    <FaEdit />
                  </span>
                </Link>
              </button>
              <button onClick={() => deleteDog(dog.id)}>
                <span>
                  <FaRegTrashAlt />
                </span>
              </button>
            </div>

            <PetCard dog={dog} handleDelete={deleteDog} />
          </div>
        ))}
      </PetCards>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  const res = await fetch(`${API_URL}/dogs/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const dogs = await res.json()

  return {
    props: { dogs, token },
  }
}
