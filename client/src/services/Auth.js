import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post(`/user/login`, data)
    console.log(res)
    console.log(`from services auth page res.data `, res.data.user)
    console.log(`from services auth page res.data.token ${res.data.token}`)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('payload', JSON.stringify(res.data.user))
    console.log('from auth', res.data.user)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post(`/user/signup`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/user/session')
    console.log(res)
    console.log(`from services auth page chekc session ${res.data}`)
    return res.data
  } catch (error) {
    throw error
  }
}
