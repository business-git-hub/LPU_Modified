import { createAsyncThunk } from '@reduxjs/toolkit';
import request from "../../utils/http";
import { handleError } from "../../utils/error";
import { clearAuthData } from "../../utils/authUtils";
const handleAuthError = (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
        clearAuthData();
    }
    return handleError(error);
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Fetch all universities
export const fetchUniversities = createAsyncThunk(
    'university/fetchUniversities',
    async (queryParams, { rejectWithValue }) => {
        try {
            if (queryParams && typeof queryParams !== 'object') {
                throw new Error('Query parameters must be an object');
            }

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
            const params = new URLSearchParams();
            if (queryParams) {
                Object.entries(queryParams).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== '') {
                        params.append(key, String(value));
                    }
                });
            }

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
            const url = `/universities${params.toString() ? `?${params.toString()}` : ''}`;
            const { response, json } = await request.GET(url, 'json');
            if (response.statusText === 'OK') {
                return json;
            }
            return rejectWithValue(handleAuthError(json));
        } catch (error) {
            return rejectWithValue(handleAuthError(error));
        }
    }
);

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Fetch an existing university by ID
export const fetchUniversityById = createAsyncThunk('university/fetchUniversityById', async (id, { rejectWithValue }) => {
    try {
        const { response, json } = await request.GET(`/universities/${id}`, 'json');
        if (response.statusText === 'OK') {
            return json;
        }
        return rejectWithValue(handleAuthError(json));
    } catch (error) {
        return rejectWithValue(handleAuthError(error));
    }
});

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Create a new university
export const createUniversity = createAsyncThunk('university/createUniversity', async (formData, { rejectWithValue }) => {
    try {
        const { response, json } = await request.POST("/universities", formData, 'formData');
        if (response.statusText === 'OK') {
            return json;
        }
        return json;
    } catch (error) {
        return rejectWithValue(handleAuthError(error));
    }
});

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Update an existing university by ID
export const updateUniversity = createAsyncThunk('university/updateUniversity',
    async ({ universityid, formData }, { rejectWithValue }) => {
        try {
            const { response, json } = await request.PUT(`/universities/${universityid}`, formData, 'formData');

            if (response.statusText === 'OK') {
                return json;
            }
            return rejectWithValue(handleAuthError(json));
        } catch (error) {
            return rejectWithValue(handleAuthError(error));
        }
    });

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Delete a university by ID
export const deleteUniversity = createAsyncThunk('university/deleteUniversity', async (id, { rejectWithValue }) => {
    try {
        const { response, json } = await request.DELETE(`/universities/${id}`, 'json');
        return response.status === 200 ? json : rejectWithValue(handleAuthError(json));
    } catch (error) {
        return rejectWithValue(handleAuthError(error));
    }
});
