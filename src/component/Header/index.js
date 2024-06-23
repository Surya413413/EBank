import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <div className="headerContainer">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="header-logo"
        />
      </Link>

      <button className="buttonLogut" type="button" onClick={onClickLogut}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(Header)
