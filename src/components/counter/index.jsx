import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const state = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
    
    return (
        <div>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <span>{state}</span>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        </div>
    )
}

export default Counter