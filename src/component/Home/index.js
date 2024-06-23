import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect path="/ebank/login" />
  }
  return (
    <>
      <Header />
      <div className="homeContainer">
        <h1 className="headingYour">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="card"
        />
      </div>
    </>
  )
}
export default Home
