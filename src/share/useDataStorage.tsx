import { useEffect, useState } from 'react'

export const getSavedValue = (key:string, initValue:any) => {
  const savedValue = JSON.parse(localStorage.getItem(key) || '{}')
  if (savedValue) return savedValue
  return initValue
}

const useDataStorage = (key:string, initValue:any) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}

export default useDataStorage