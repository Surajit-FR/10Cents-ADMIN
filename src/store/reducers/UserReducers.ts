import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../../../types/common";

const initialState: DataState = {
    userData: {},
    error: null,
    type: ''
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
    }
});

export const {
    GetAllUserRequest,
    GetAllUserSuccess,
    GetAllUserFailure,
} = UserSlice.actions;

export default UserSlice.reducer;