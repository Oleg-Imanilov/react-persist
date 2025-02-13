import { AppContext } from '../context/AppContext'
import { useContext } from 'react'

function usePersistedState(key) {
  const { data, update } = useContext(AppContext)
  return [data[key], (doc) => { update({[key]: doc}) }]
}

export default usePersistedState
