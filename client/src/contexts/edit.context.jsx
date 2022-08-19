import { createContext, useState } from 'react'

export const EditContext = createContext({
  isEdit: false,
  setIsEdit: () => {},
  comment: {},
  setComment: () => {},
  editcomment: false,
  seteditComment: () => {},
  commentIndex: '',
  setCommentIndex: () => {},
  isLeavingCommont: false,
  setIsLeavingCommont: () => {}
})

export const EditProvider = ({ children }) => {
  const [isEdit, setIsEdit] = useState()
  const [comment, setComment] = useState()
  const [editcomment, seteditComment] = useState()
  const [commentIndex, setCommentIndex] = useState()
  const [isLeavingCommont, setIsLeavingCommont] = useState()
  const value = {
    isEdit,
    setIsEdit,
    comment,
    setComment,
    editcomment,
    seteditComment,
    commentIndex,
    setCommentIndex,
    isLeavingCommont,
    setIsLeavingCommont
  }

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>
}
