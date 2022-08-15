import './App.css'
import Navigation from './component/Navigation/Navigation.component'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.component'
import Authentication from './pages/Authentication.component'
import LocationDetail from './pages/LocationDetails/Location-details.component'
import HostLocation from './pages/Host-location/Host-location.component'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* <Route
          path="locationdetails/:locationid"
          element={<LocationDetail />}
        /> */}
        {/* <Route path="/hostedlocations" />
       
        <Route path="/account" /> */}
        <Route path="/host" element={<HostLocation />} />
        <Route path="/location/details" element={<LocationDetail />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
