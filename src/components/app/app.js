import { useSelector } from 'react-redux'
import { Header } from '../header/header'
import { UsersTable } from '../users-table/users-table'
import { Modal } from '../modal/modal'
import { Alert } from '../alert/alert'
import './app.css'

export const App = () => {
  const modal = useSelector(state => state.app.modal)
  const alert = useSelector(state => state.app.alert)

  return (
    <div className="container-fluid">
      
      <Header/>
      
      {alert && <Alert mes={alert} />}
      
      <UsersTable />

      {modal && <Modal />}
    </div>
  )
}