import { createContext, useState } from 'react'

export const EditContext = createContext({
  isEdit: false,
  setIsEdit: () => {},
  comment: {},
  setComment: () => {}
})

export const EditProvider = ({ children }) => {
  const [isEdit, setIsEdit] = useState()
  const [comment, setComment] = useState()
  const value = { isEdit, setIsEdit, comment, setComment }

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>
}
