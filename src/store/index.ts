import { configureStore } from '@reduxjs/toolkit'
import { useFirestore } from '../hooks/useFirestore'
import { useEffect } from 'react'

const initialState = {
  data: [],
  loading: true,
  error: null
}

export const store = configureStore({
  reducer: (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload }
      case 'SET_LOADING':
        return { ...state, loading: action.payload }
      case 'SET_ERROR':
        return { ...state, error: action.payload }
      default:
        return state
    }
  }
})

export const setData = (data: any[]) => ({
  type: 'SET_DATA',
  payload: data
})

export const setLoading = (loading: boolean) => ({
  type: 'SET_LOADING',
  payload: loading
})

export const setError = (error: Error | null) => ({
  type: 'SET_ERROR',
  payload: error
})

export const useFirestoreData = () => {
  const { data, loading, error } = useFirestore()

  useEffect(() => {
    store.dispatch(setData(data))
    store.dispatch(setLoading(loading))
    store.dispatch(setError(error))
  }, [data, loading, error])

  return { data, loading, error }
}
