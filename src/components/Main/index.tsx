import { useFirestoreData } from '../../store'

export const Example = () => {
  const { data, loading, error } = useFirestoreData()

  console.log("")

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }



  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
