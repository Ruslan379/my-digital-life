import { createSlice } from '@reduxjs/toolkit';
import {
    register,
    logIn,
    logOut,
    refreshUser,
    changeAvatar
} from './authOperations';




const initialState = {
    // user: { name: null, email: null },
    user: { name: null, email: null, avatarURL: null },
    token: null,
    isLoggedIn: false,
    isRegistrIn: false, //? for Kapu$ta
    isRefreshing: false,
    error: null,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        //! register
        [register.pending](state, { payload }) {
            // state.user = { name: null, email: null };
            state.user = { name: null, email: null, avatarURL: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRegistrIn = false; //? for Kapu$ta
            state.isRefreshing = false;
            state.error = null;
        },
        [register.fulfilled](state, { payload }) {
            state.user = payload.newUser;
            // state.token = payload.token; //? НЕ НАДО для Kapu$ta:
            state.token = null; //? for Kapu$ta
            // state.isLoggedIn = true; //? НЕ НАДО для Kapu$ta:
            state.isLoggedIn = false; //? for Kapu$ta
            state.isRegistrIn = true; //? for Kapu$ta
            state.error = null;
        },
        [register.rejected](state, { payload }) {
            // state.user = { name: null, email: null };
            state.user = { name: null, email: null, avatarURL: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRegistrIn = false; //? for Kapu$ta
            state.isRefreshing = false;
            state.error = payload;
        },

        //! logIn
        [logIn.pending](state, { payload }) {
            // state.user = { name: null, email: null };
            state.user = { name: null, email: null, avatarURL: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRegistrIn = true; //? for Kapu$ta
            state.isRefreshing = false;
            state.error = null;
        },
        [logIn.fulfilled](state, { payload }) {
            // console.log("logIn.fulfilled --> payload.user:", payload.user); //!
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.isRegistrIn = true; //? for Kapu$ta
            state.error = null;
        },
        [logIn.rejected](state, { payload }) {
            // state.user = { name: null, email: null };
            state.user = { name: null, email: null, avatarURL: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRefreshing = false;
            state.isRegistrIn = false; //? for Kapu$ta
            state.error = payload;
        },

        //! logOut
        [logOut.pending](state) {
            state.isLoggedIn = true;
            state.isRegistrIn = true; //? for Kapu$ta
            state.error = null;
        },
        [logOut.fulfilled](state) {
            // state.user = { name: null, email: null };
            state.user = { name: null, email: null, avatarURL: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRegistrIn = false; //? for Kapu$ta
            state.error = null;
        },
        [logOut.rejected](state, { payload }) {
            state.isLoggedIn = true;
            state.isRegistrIn = true; //? for Kapu$ta
            state.error = payload;
        },

        //! refreshUser
        [refreshUser.pending](state) {
            state.isRefreshing = true;
            state.error = null;
        },
        [refreshUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
            state.isRegistrIn = true; //? for Kapu$ta
            state.isRefreshing = false;
            state.error = null;
        },
        [refreshUser.rejected](state, { payload }) {
            state.isRefreshing = false;
            state.token = null; //??
            state.error = payload;
        },

        //! changeAvatar
        [changeAvatar.pending](state, { payload }) {
            state.user.avatarURL = null;
            // state.isLoggedIn = false;
            state.isRefreshing = false;
            state.error = null;
        },
        [changeAvatar.fulfilled](state, { payload }) {
            console.log("changeAvatar.fulfilled --> payload:", payload); //!
            state.user.avatarURL = payload;
            // state.token = payload.token;
            state.isLoggedIn = true;
            state.isRegistrIn = true; //? for Kapu$ta
            state.error = null;
        },
        [changeAvatar.rejected](state, { payload }) {
            // state.user = { name: null, email: null, avatarURL: null };
            // state.token = null;
            // state.isLoggedIn = false;
            state.isRefreshing = false;
            // state.error = payload;
        },
    },
});

export const authReducer = authSlice.reducer;
