import { all } from "redux-saga/effects";

import watchAuth from "./sagas/AuthSaga";
import watchUser from "./sagas/UserSaga";

export default function* rootSaga() {
    yield all([
        watchAuth(),
        watchUser(),
    ])
}