import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/http";
import { handleError } from "../../utils/error";
import { clearAuthData, getCookie, setToken } from "../../utils/authUtils";
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const handleAuthError = (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
        clearAuthData();
    }
    return handleError(error);
};
const token = getCookie('session-token')




// 🔹 Async Thunk for Updating Profile
export const updateProfile = createAsyncThunk(
    "profile/updateProfile",
    async ({ userId, formData }, { rejectWithValue }) => {
        console.log('Updating profile', userId, formData)
        formData.entries().forEach((entry) => {
            console.log(entry[0], entry[1]);
        });
        try {
            const response = await request.PUT(`/auth/:${userId}`, { formData }, "formData");
            return response.status === 201 ? json : rejectWithValue(json?.message || "Something went wrong.");
        } catch (error) {
            return rejectWithValue(handleAuthError(error));
        }
    }
);

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export const loginAsync = createAsyncThunk(
    "auth/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const { response, json } = await request.POST('auth/login', credentials, "json");
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
            if (response.status === 200 || response.status === 201) {
                if (json.token) {
                    setToken(json.token, json.refreshToken, json.expiresIn);
                    return {
                        ...json,
                        loginTime: Date.now()
                    };
                }
                return rejectWithValue({ message: "No token received from server" });
            }
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
            if (response.status === 401) {
                return rejectWithValue({
                    message: "Invalid email or password",
                    code: 'INVALID_CREDENTIALS'
                });
            }
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
            return rejectWithValue(handleAuthError(response));
        } catch (error) {
            return rejectWithValue(handleAuthError(error));
        }
    }
);
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export const getSessionAsync = createAsyncThunk(
    "auth/getSession",
    async (_, { rejectWithValue }) => {
        try {
            const { response, json } = await request.GET("auth/session", "json");
            if (response.status === 200) {
                if (json.token) {
                    setToken(json.token, json.refreshToken, json.expiresIn);
                }
                return json;
            } {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
            return rejectWithValue(handleAuthError(json));
        } catch (error) {
            if (error.response?.status === 401) {
                return rejectWithValue({ silent: true });
            }
            return rejectWithValue(handleAuthError(error));
        }
    }
);

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export const logoutAsync = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const { response, json } = await request.GET("auth/logout", "json");

            // Always clear auth data, even if the API call fails
            clearAuthData();
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
            if (response.status === 200) {
                return json;
            }
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
            return rejectWithValue({
                message: "Logout was not completed successfully on the server"
            });
        } catch (error) {
            // Clear auth data even if there's an error
            clearAuthData();
            return rejectWithValue(handleAuthError(error));
        }
    }
);
