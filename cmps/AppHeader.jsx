import { UserMsg } from './UserMsg.jsx'
import { LoginSignup } from './LoginSignup.jsx'
import { userService } from '../services/user.service.js'
import { showErrorMsg } from '../services/event-bus.service.js'
import { SET_CART_IS_SHOWN, SET_USER } from '../store/store.js'

const { useState } = React
const { useSelector, useDispatch } = ReactRedux
const { Link, NavLink } = ReactRouterDOM
const { useNavigate } = ReactRouter

export function AppHeader() {
  return (
    <header className='app-header full main-layout'>
      <section className='header-container'>
        <h1>React TO-DO App</h1>
        <nav className='app-nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/todos'>Todos</NavLink>
        </nav>
      </section>

      {/* <UserMsg /> */}
    </header>
  )
}
