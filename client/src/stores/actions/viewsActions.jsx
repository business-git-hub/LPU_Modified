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
// Fetch monthly views
export const getMonthlyViews = createAsyncThunk(
    "views/fetchMonthlyViews", async (id, { rejectWithValue }) => {
        try {
            const { response, json } = await request.GET("/view/monthlyviews", "json");
            if (response.status === 200) {
                return json;
            }
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    });
    
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }

// Fetch visitor IPs
export const getVisitorIPs = createAsyncThunk(
    "views/fetchVisitorIPs", async (id, { rejectWithValue }) => {
        try {
            const { response, json } = await request.GET("/view/visitorips", "json");
            if (response.status === 200) {
                return json;
            }
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    });


{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Track visit (this can be called when the site loads)
export const trackVisit = createAsyncThunk(
    "/views/trackVisit", async (id, { rejectWithValue }) => {
        try {
            const { response, json } = await request.GET("/view/trackvisit", "json");
            if (response.status === 200) {
                return json;
            }
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    });
