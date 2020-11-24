import { useDispatch } from 'react-redux'
import { showModal } from '../../redux/actions'
import './header.css'

export const Header = () => {
  const dispatch = useDispatch()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-md">
        <div className="navbar-brand"><i className="medium material-icons">recent_actors</i></div>
      
        <button type="button" 
          className="btn btn-link"
          onClick={() => dispatch(showModal())}
        >+ New User</button>
      </div>
    </nav>
  )
}