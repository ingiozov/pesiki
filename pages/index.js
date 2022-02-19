import Layout from '../components/Layout'
import PetCards from '../components/PetCards'
import PetCard from '../components/PetCard'
import { API_URL } from '../config'

export default function HomePage({ dogs }) {
  return (
    <Layout>
      <h1>Пёсики</h1>

      {dogs.lendth === 0 && <h3>Добавьте пёсиков</h3>}

      <PetCards>
        {dogs.map((dog) => (
          <div key={dog.name} className='petcard'>
            <PetCard dog={dog} />
          </div>
        ))}
      </PetCards>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/dogs`)
  const dogs = await res.json()

  return {
    props: { dogs },
  }
}
