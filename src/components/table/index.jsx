import TableItem from "../tableItem"
import './table.css'
import { useDispatch } from 'react-redux'
import { useState } from "react";


const Table = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState(1)
    const [idEdit, setIdEdit] = useState(0)
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        setId(id + 1)
        if (email !== '' && name !== '' && status !== '' ) {
            if (!edit) {
                dispatch({ type: 'ADD_STUDENT', payload: { id, name, email, status } })
            }
            else {
                dispatch({ type: 'EDIT_STUDENT', payload: { idEdit, name, email, status } })
            }
        }
        setEdit(false);
        setEmail('')
        setName('')
        setStatus('')
    }

    return (
        <div>
            <div className="form">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="enter your name" type="text" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" type="email" />
                <input value={status} onChange={(e) => setStatus(e.target.value)} placeholder="enter your status" type="text" />

                <button type="submit" onClick={(e) => handleClick(e)}>Submit</button>
            </div>

            <table className="table" border='1'>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <TableItem
                        setEmail={setEmail}
                        setName={setName}
                        setStatus={setStatus}
                        setEdit={setEdit}
                        setIdEdit={setIdEdit}
                    />
                </tbody>
            </table>
        </div>
    )
}

export default Table