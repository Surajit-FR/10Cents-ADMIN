import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../../../types/common";

const initialState: DataState = {
    userData: {},
    error: null,
    type: '',
    singleUserData: {},
};

const UserSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        // GetAllUser
        GetAllUserRequest: (state, { payload, type }) => {
            state.type = type;
        },
        GetAllUserSuccess: (state, { payload, type }) => {
            state.type = type;
            state.userData = payload?.data;
        },
        GetAllUserFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
        // Get Single User
        GetSingleUserRequest: (state, { payload, type }) => {
            state.type = type;
        },
        GetSingleUserSuccess: (state, { payload, type }) => {
            state.type = type;
            state.singleUserData = payload?.data;
        },
        GetSingleUserFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
    }
});

export const {
    GetAllUserRequest,
    GetAllUserSuccess,
    GetAllUserFailure,

    GetSingleUserRequest,
    GetSingleUserSuccess,
    GetSingleUserFailure,

} = UserSlice.actions;

export default UserSlice.reducer;