import { useSelector, useDispatch } from "react-redux"

const User = () => {

    const state = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    return (
        <div>
            {
                state.map(({ id, name, status }) => (
                    <div key={id}>
                        <h3>{id} - {name} - {status}
                            <button onClick={()=> dispatch({type:'DELETE', payload: {id}})}>delete</button>
                        </h3>
                    </div>
                ))
            }
        </div>
    )
}

export default User