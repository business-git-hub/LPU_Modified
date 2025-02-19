import { createAsyncThunk } from '@reduxjs/toolkit';
import request from "../../utils/http";
import { handleError } from "../../utils/error";
import { clearAuthData } from "../../utils/authUtils";
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
/**
 * Handles authentication errors by clearing auth data on 401.
 */
const handleAuthError = (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
        clearAuthData();
        return handleError(error);
    };
}
// ✅ Fetch all blogs with pagination & filters
export const fetchBlog = createAsyncThunk(
    'blog/fetchBlog',
    async (params, { rejectWithValue }) => {
        try {
            const queryString = params ? `?${new URLSearchParams(params)}` : '';
            const { response, json } = await request.GET(`/blogs${queryString}`, "json");

            return response.status === 200 ? json : rejectWithValue(handleAuthError(json));
        } catch (error) {
            return rejectWithValue(handleAuthError(error));
        }
    }
);
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// ✅ Fetch a single blog by ID
export const fetchBlogID = createAsyncThunk(
    'blog/fetchBlogID',
    async (blogId, { rejectWithValue }) => {
        try {
            const { response, json } = await request.GET(`/blogs/:${blogId}`, "json");

            return response.status === 200 ? json : rejectWithValue(handleAuthError(json));
        } catch (error) {
            return rejectWithValue(handleAuthError(error));
        }
    }
);
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// ✅ Create a new blog
export const postBlog = createAsyncThunk(
    'blog/postBlog',
    async ({ formData }, { rejectWithValue }) => {
        try {
            const { response, json } = await request.POST("/blogs/", formData, "formData");

            return response.status === 201 ? json : rejectWithValue(json?.message || "Something went wrong.");
        } catch (error) {
            return rejectWithValue(handleAuthError(error));
        }
    }
);
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// ✅ Update an existing blog
export const updateBlog = createAsyncThunk(
    "blog/updateBlog",
    async ({ id, blogData }, { rejectWithValue }) => {
        try {
            const { response, json } = await request.PUT(`/blogs/${id}`, blogData, "formData");

            return response.status === 200 ? json : rejectWithValue(handleAuthError(json));
        } catch (error) {
            return rejectWithValue(handleAuthError(error));
        }
    }
);
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// ✅ Delete a blog
export const deleteBlog = createAsyncThunk(
    'blog/deleteBlog',
    async (id, { rejectWithValue }) => {
        try {
            const { response, json } = await request.DELETE(`/blogs/${id}`, "json");

            return response.status === 200 ? json : rejectWithValue(handleAuthError(json));
        } catch (error) {
            return rejectWithValue(handleAuthError(error));
        }
    }
);
