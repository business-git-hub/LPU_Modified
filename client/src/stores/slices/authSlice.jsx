import { createSlice } from "@reduxjs/toolkit";
import {
    updateProfile,
    loginAsync,
    getSessionAsync,
    logoutAsync,
} from "../actions/authActions";

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Utils
import { setToken, clearAuthData } from "../../utils/authUtils";

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Initial State
const initialState = {
    isLoggedIn: false,
    user: {}, // No user data in local storage
    token: "",
    roles: [],
    serverError: null,
    isAdmin: false,
    session: null,
    successMessage: null,
    isSessionLoading: false,
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }

// Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetAuthState: (state) => {
            clearAuthData();
            Object.assign(state, initialState);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateProfile.pending, (state) => {
                state.isLoading = true;
                state.serverError = null;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.serverError = null;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.serverError = "Server error";
            });
        builder
            // **Login**
            .addCase(loginAsync.pending, (state) => {
                state.isLoading = true;
                state.serverError = null;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                const { token, user, roles } = action.payload;
                state.isLoading = false;
                state.isLoggedIn = true;
                state.token = token;
                state.user = user || {};
                state.roles = roles;
                setToken(token); // Only save token locally
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.serverError = "Login failed.";
            });
        builder
            // **Session Reducer**
            .addCase(getSessionAsync.pending, (state) => {
                state.isSessionLoading = true; // Fixed typo
            })
            .addCase(getSessionAsync.fulfilled, (state, action) => {
                const { token, user } = action.payload;
                state.isSessionLoading = false;
                state.isLoggedIn = true;
                state.token = token,
                    state.user = user || {};
            })
            .addCase(getSessionAsync.rejected, (state) => {
                state.isSessionLoading = false;
                clearAuthData();
            });
        builder
            // **Logout**
            .addCase(logoutAsync.pending, (state) => {
                state.isLoading = true; // Show loading indicator
                state.serverError = null; // Clear previous errors
            })
            .addCase(logoutAsync.fulfilled, (state) => {
                state.isLoading = false; // Hide loading indicator
                clearAuthData();
                Object.assign(state, initialState); // Reset state
            })
            .addCase(logoutAsync.rejected, (state, action) => {
                state.isLoading = false; // Hide loading indicator
                state.serverError = action.payload || "Logout failed."; // Set error message
            });
    },
});

// Export actions
export const { resetAuthState } = authSlice.actions;

// Export reducer
export default authSlice.reducer;

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }