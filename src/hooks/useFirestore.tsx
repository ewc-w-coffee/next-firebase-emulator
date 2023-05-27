import { createContext, useContext, useEffect, useState } from 'react'
import { firestore } from '../services/firebase'

type FirestoreContextType = {
  data: any[]
  loading: boolean
  error: Error | null
}

const FirestoreContext = createContext<FirestoreContextType>({
  data: [],
  loading: false,
  error: null
})

export const useFirestore = () => useContext(FirestoreContext)

type FirestoreProviderProps = {
  children: React.ReactNode
}

export const FirestoreProvider = ({ children }: FirestoreProviderProps) => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firestore.collection('example').get()
        const data = snapshot.docs.map((doc: any) => doc.data())

        setData(data)
        setLoading(false)
      } catch (error: any) {

        console.log("****", error)

        setError(error)
        setLoading(false)
        return
      }
    }

    fetchData()
  }, [])

  return (
    <FirestoreContext.Provider value={{ data, loading, error }}>
      {children}
    </FirestoreContext.Provider>
  )
}
