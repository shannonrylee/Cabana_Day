import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>
        <Link to="/">Home</Link>
      </h4>
      <div>
        <Link to="/cabanas">Cabana List</Link>
      </div>
    </nav>
  )
}

export default Nav