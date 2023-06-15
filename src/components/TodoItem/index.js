import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {userDetails, onDeleteUser} = this.props
    const {title, id} = userDetails
    const onDelete = () => {
      onDeleteUser(id)
    }
    return (
      <li className="card">
        <p className="para">{title}</p>
        <button className="delete-button" type="button" onClick={onDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
