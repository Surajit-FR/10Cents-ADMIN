import { all } from "redux-saga/effects";

import watchAuth from "./sagas/AuthSaga";

export default function* rootSaga() {
    yield all([
        watchAuth(),
    ])
}