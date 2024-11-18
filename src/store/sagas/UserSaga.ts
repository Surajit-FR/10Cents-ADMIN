import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse, SagaGenerator } from "../../../types/common";
import { GETALLUSERS } from "../api/Api";
import {
    GetAllUserFailure,
    GetAllUserSuccess
} from "../reducers/UserReducers";
import { GetAllUsersResponse } from "../../../types/userTypes";


// getAllUserSaga generator function
export function* getAllUserSaga({ type }: { type: string }): SagaGenerator<{ data: ApiResponse<GetAllUsersResponse> }> {
    try {
        const resp = yield call(GETALLUSERS);
        const result: ApiResponse<GetAllUsersResponse> = resp?.data;
        if (result?.success) {
            yield put(GetAllUserSuccess(result));
        };
    } catch (error: any) {
        yield put(GetAllUserFailure(error?.response?.data?.message));
    };
};


// Watcher generator function
export default function* watchUser() {
    yield takeLatest('userSlice/GetAllUserRequest', getAllUserSaga);
};