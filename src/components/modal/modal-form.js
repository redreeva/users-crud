import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, hideModal, updateUser } from '../../redux/actions'

export const ModalForm = () => {
  const dispatch = useDispatch()
  
  const selectedUser = useSelector(state => state.app.selectedId || null)

  const [username, setUsername] = useState(selectedUser?.username || '')
  const [email, setEmail] = useState(selectedUser?.email || '')
  const [city, setCity] = useState(selectedUser?.address?.city || '')
  const [street, setStreet] = useState(selectedUser?.address?.street || '')
  const [suite, setSuite] = useState(selectedUser?.address?.suite || '')

  const [formError, setFormError] = useState(false)

  const checkEmail = email => {
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      return false
    }
    
    return true
  }

  const submitHandler = e => {
    e.preventDefault()

    if (!username.trim() || !email.trim() || !checkEmail(email)) {
      setFormError(true)
      return
    }

    const userObj = {
      username, email,
      address: { city, street, suite }
    }

    if (selectedUser) {
      dispatch(updateUser({
        id: selectedUser.id,
        data: userObj
      }))
    } else {
      dispatch(createUser(userObj))
    }

    setUsername('')
    setEmail('')
    setCity('')
    setStreet('')
    setSuite('')
    setFormError(false)

    dispatch(hideModal())
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="form-group col-md-6">
          <small className="form-text text-muted">Username</small>
          <input type="text" 
            className="form-control" 
            name="name" 
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <small className="form-text text-muted">Email</small>
          <input type="text" 
            className="form-control" 
            name="surname" 
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </div>
      </div>

      <div className="form-group">
        <small className="form-text text-muted">City</small>
        <input type="text" 
          className="form-control" 
          name="city" 
          placeholder="City"
          value={city}
          onChange={e => setCity(e.target.value)} />
      </div>

      
      <div className="row">
        <div className="form-group col-md-6">
          <small className="form-text text-muted">Street</small>
          <input type="text" 
            className="form-control" 
            name="street" 
            placeholder="Street"
            value={street}
            onChange={e => setStreet(e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <small className="form-text text-muted">Suite</small>
          <input type="text" 
            className="form-control" 
            name="suite" 
            placeholder="Suite"
            value={suite}
            onChange={e => setSuite(e.target.value)} />
        </div>
      </div>

      { formError && <small className="form-text danger">Fields were filled incorrectly.</small> }

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}