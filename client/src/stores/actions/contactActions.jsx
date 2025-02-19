import { createAsyncThunk } from '@reduxjs/toolkit';
import request from "../../utils/http";
import { handleError } from "../../utils/error";
import { clearAuthData } from "../../utils/authUtils";

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Fetch all contacts with pagination and filters
export const fetchContacts = createAsyncThunk(
    'contact/fetchContacts',
    async (queryParams, { rejectWithValue }) => {
        try {
            const params = new URLSearchParams();
            if (queryParams) {
                Object.entries(queryParams).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== '') {
                        params.append(key, value);
                    }
                });
            }

            const url = `/contacts${params.toString() ? `?${params.toString()}` : ''}`;
            const { response, json } = await request.GET(url, "json");
            if (response.status === 200) {
                return json;
            }
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    }
);

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Create new contact
export const createContact = createAsyncThunk(
    'contact/createContact',
    async (contactData, { rejectWithValue }) => {
        try {
            const { response, json } = await request.POST("/contacts", contactData, "json");
            if (response.status === 201) {
                return json;
            }
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    }
);

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Update contact status
export const updateContactStatus = createAsyncThunk(
    'contact/updateStatus',
    async ({ contactId, status }, { rejectWithValue }) => {

        try {
            const { response, json } = await request.PATCH(`/contacts/${contactId}/status`, {
                status
            }, "json");
            if (response.status === 200) {
                return json;
            }
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    }
);

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Delete contact
export const deleteContact = createAsyncThunk(
    'contact/deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
            const { response, json } = await request.DELETE(`/contacts/${contactId}`, "json");
            if (response.status === 200) {
                return json;
            }
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    }
);
