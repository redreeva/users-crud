import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../redux/actions'
import { ModalForm } from './modal-form'
import './modal.css'

export const Modal = () => {
  const dispatch = useDispatch()
  const selectedUser = useSelector(state => state.app.selectedId || null)

  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {selectedUser ? 'Update' : 'Create'} User
            </h5>
            <button
              type="button"
              className="close"
              onClick={() => dispatch(hideModal())}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">

            <ModalForm />
            
          </div>
        </div>
      </div>
    </div>
  )
}