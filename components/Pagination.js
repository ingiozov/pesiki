import Link from 'next/link'
import { PER_PAGE } from '../config'

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE)

  return (
    <div>
      {page > 1 && (
        <div>
          <Link href={`/dogs?page=${page - 1}`}>
            <button>Prev</button>
          </Link>
        </div>
      )}

      {page < lastPage && (
        <div>
          <Link href={`/dogs?page=${page + 1}`}>
            <button floated="right">Next</button>
          </Link>
        </div>
      )}
    </div>
  )
}
