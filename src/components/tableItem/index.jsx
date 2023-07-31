import { useDispatch, useSelector } from 'react-redux'

const TableItem = ({
    setEmail,
    setName,
    setStatus,
    setEdit,
    setIdEdit
}) => {

    const state = useSelector(state => state.studentReducer);
    const dispatch = useDispatch();

    const edit = (id, name, email, status) => {
        setEmail(email)
        setName(name)
        setStatus(status)
        setEdit(true)
        setIdEdit(id)
    }

    return (
        state.map(({ id, name, email, status }, index) => {
            return (
                <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{status}</td>
                    <td>
                        <button onClick={() => edit(id, name, email, status)} type="button">Edit</button>
                        <button onClick={() => dispatch({ type: 'DELETE_STUDENT', payload: { id } })} type="button">Delete</button>
                    </td>
                </tr>
            )
        })

    )
}

export default TableItem