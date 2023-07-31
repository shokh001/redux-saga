const initialState = [
    { id: 1, name: 'Shohjahon', status: 'dev' },
    { id: 2, name: 'Samandar', status: 'dev' },
    { id: 3, name: 'Muhriddin', status: 'dev' },
    { id: 4, name: 'Hoshim', status: 'dev' }
]

const initialStateStudent = [];

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_ASYNC':
            const newState = state.filter(value => value.id !== action.payload.id)
            return newState
        default: return state
    }
}

export const studentReducer = (state = initialStateStudent, action) => {
    switch (action.type) {
        case 'DELETE_STUDENT_ASYNC':
            const newState = state.filter(value => value.id !== action.payload.id)
            return newState
        case 'ADD_STUDENT_ASYNC':
            console.log('add');
            return [...state, action.payload]
        case 'EDIT_STUDENT_ASYNC':
            console.log('edit', action.payload);
            const newState2 = state.filter(value => (value.id === action.payload.idEdit) ? (
                value.name = action.payload.name,
                value.email = action.payload.email,
                value.status = action.payload.status
            ) :
                (
                    value.name = value.name,
                    value.email = value.email,
                    value.status = value.status
                ))
            return newState2
        default: return state
    }
}

export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT_ASYNC': return state + 1;
        case 'DECREMENT_ASYNC': return state - 1;
        default: return state
    }
}
