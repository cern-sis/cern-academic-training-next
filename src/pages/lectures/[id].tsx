import { useRouter } from 'next/router'

const Lectures = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Lectures: {id}</p>
}

export default Lectures