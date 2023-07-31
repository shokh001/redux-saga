import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* asyncUser(state) {
    yield delay(2000)
    yield put({ type: "DELETE_ASYNC", payload: state.payload })
}

function* asyncIncrement() {
    yield put({ type: "INCREMENT_ASYNC" })
}

function* asyncDecrement() {
    yield put({ type: "DECREMENT_ASYNC" })
}

function* deleteStudent(state) {
    yield delay(2000)
    yield put({ type: "DELETE_STUDENT_ASYNC", payload: state.payload })
}

function* addStudent(state) {
    yield delay(2000)
    yield put({ type: "ADD_STUDENT_ASYNC", payload: state.payload })
}

function* editStudent(state) {
    yield delay(2000)
    yield put({ type: "EDIT_STUDENT_ASYNC", payload: state.payload })
}

export function* userSaga() {
    yield takeEvery('DELETE', asyncUser);
    yield takeEvery('INCREMENT', asyncIncrement);
    yield takeLatest('DECREMENT', asyncDecrement);
    yield takeEvery('DELETE_STUDENT', deleteStudent);
    yield takeEvery('ADD_STUDENT', addStudent);
    yield takeEvery('EDIT_STUDENT', editStudent);
}