import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { UserSliceTypes } from "./UserSliceTypes";

const initialState: UserSliceTypes = {
    _id: "",
    name: "",
    email: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserSliceTypes>) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        removeUser: (state) => {
            state._id = "";
            state.name = "";
            state.email = "";
        }
    },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;