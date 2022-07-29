import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>
        <Link to="/">Home</Link>
      </h4>
      <div>
        <Link to="/cabanas">Cabana List</Link>
        <Link to="/booking">Book Today!</Link>
      </div>
    </nav>
  )
}

export default Nav