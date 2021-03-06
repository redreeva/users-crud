import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterUsers } from '../../redux/actions'
import './users-filter.css'

export const UsersFilter = () => {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('')

  const onFilter = e => {
    setFilter(e.target.value)

    dispatch(filterUsers(e.target.value))
  }
  
  return (
    <form className="filter-form">
      <div className="form-group">
        <label htmlFor="filter">Filter users: </label>
        <input type="text" name="filter" 
          value={filter}
          onChange={onFilter} />
      </div>
    </form>    
  )
}