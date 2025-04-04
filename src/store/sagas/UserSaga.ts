import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse, SagaGenerator } from "../../../types/common";
import { GETALLUSERS, GETSINGLEUSERDETAILS } from "../api/Api";
import {
    GetAllUserFailure,
    GetAllUserSuccess,
    GetSingleUserFailure,
    GetSingleUserSuccess
} from "../reducers/UserReducers";
import { GetAllUsersResponse, GetSingleUserResponse } from "../../../types/userTypes";


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
// getAllUserSaga generator function
export function* getSingleUserSaga({ payload,type }: { payload:{userId: string},type: string }): SagaGenerator<{ data: ApiResponse<GetSingleUserResponse> }> {
    try {
        console.log({payload})
        const resp = yield call(GETSINGLEUSERDETAILS, payload?.userId);

        const result: ApiResponse<GetSingleUserResponse> = resp?.data;
        if (result?.success) {
            yield put(GetSingleUserSuccess(result));
        };
    } catch (error: any) {
        yield put(GetSingleUserFailure(error?.response?.data?.message));
    };
};


// Watcher generator function
export default function* watchUser() {
    yield takeLatest('userSlice/GetAllUserRequest', getAllUserSaga);
    yield takeLatest('userSlice/GetSingleUserRequest', getSingleUserSaga);
};