import { createContext, useState } from 'react'

export const EditContext = createContext({
  isEdit: false,
  setIsEdit: () => {},
  comment: {},
  setComment: () => {},
  editcomment: false,
  seteditComment: () => {}
})

export const EditProvider = ({ children }) => {
  const [isEdit, setIsEdit] = useState()
  const [comment, setComment] = useState()
  const [editcomment, seteditComment] = useState()
  const value = {
    isEdit,
    setIsEdit,
    comment,
    setComment,
    editcomment,
    seteditComment
  }

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>
}
