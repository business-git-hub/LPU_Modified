import { createSlice } from '@reduxjs/toolkit';

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Initial state interface
const initialState = {
    isLoading: false,
    globalError: null,
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Create app slice
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload; // Update loading state
        },
        setGlobalError: (state, action) => {
            state.globalError = action.payload;
        },
        clearGlobalError: (state) => {
            state.globalError = null;
        },
    },
});

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Export actions and reducer
export const { setLoading, setGlobalError, clearGlobalError } = appSlice.actions;
export default appSlice.reducer;
