import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, showModal, deleteUser } from '../../redux/actions'
import { UsersFilter } from '../users-filter/users-filter'
import './users-table.css'

export const UsersTable = () => {

  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  const filter = useSelector(state => state.app.filter)
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  useEffect(() => {
    setFilteredUsers([...users])
  }, [users])

  useEffect(() => {    
    setFilteredUsers(users.filter(user => user.username.toLowerCase().includes(filter.toLowerCase())))
  }, [users, filter])

  const deleteItem = id => {
    const selected = users.filter(user => user.id === id)[0]

    if (window.confirm(`Are you sure you want to delete ${selected.username} from list?`)) {
      dispatch(deleteUser(id))
    }
  }

  return (
    <div className="container-md">

      <h2>Users Table</h2>
      
      <UsersFilter/>

      <div className="view-table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => {
              const address = user.address && 
                `${(user.address.street || '')} 
                ${(user.address.suite || '')}
                ${(user.address.city || '')}` 

              return (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{address || ''}</td>
                  <td>
                    <button onClick={() => dispatch(showModal(user))}>
                      <i className="material-icons">edit</i>
                    </button>
                    <button onClick={() => deleteItem(user.id)}>
                      <i className="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}