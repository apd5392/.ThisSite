import './App.css'
import Navigation from './component/Navigation/Navigation.component'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.component'
import Authentication from './pages/Authentication.component'
import LocationDetail from './pages/LocationDetails/Location-details.component'
import HostLocation from './pages/Host-location/Host-location.component'
import AccountDetail from './pages/Account/Account.component'
import HostedLocation from './pages/HostedLocation/HostedLocation.component'
import ConfirmationPage from './pages/ConfirmationPage/Confirmation.component'
import { useState, useEffect, useContext } from 'react'
import SearchResults from './pages/SearchResults/SearchResults.component'
import { CheckSession } from '../src/services/Auth'
import { UserContext } from './contexts/user.context'

function App() {
  const { user, setUser, toggleAuthenticated } = useContext(UserContext)

  const checkToken = async () => {
    const user = await CheckSession()
    setTimeout(() => {
      console.log(user)
    }, 500)

    setUser(user)
    toggleAuthenticated(true)
  }

  console.log(user)
  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      checkToken()
    }
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/account" />
        <Route path="/host" element={<HostLocation />} />
        <Route path="/location/details/:id" element={<LocationDetail />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/accountdetail" element={<AccountDetail />} />
        <Route path="/hostedlocations" element={<HostedLocation />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/searchresults" element={<SearchResults />} />
      </Route>
    </Routes>
  )
}

export default App
