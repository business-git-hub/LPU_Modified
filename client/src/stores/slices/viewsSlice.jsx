import { createSlice } from "@reduxjs/toolkit";
import { trackVisit, getMonthlyViews, getVisitorIPs } from "../actions/viewsActions"

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// 🌐 View Slice
const viewSlice = createSlice({
    name: "view",
    initialState: {
        monthlyViews: 0,
        visitorIPs: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Track Visit
        builder
            .addCase(trackVisit.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(trackVisit.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(trackVisit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        // Get Monthly Views
        builder
            .addCase(getMonthlyViews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMonthlyViews.fulfilled, (state, action) => {
                state.loading = false;
                state.monthlyViews = action.payload.monthlyViews;
            })
            .addCase(getMonthlyViews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        // Get Visitor IPs
        builder
            .addCase(getVisitorIPs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getVisitorIPs.fulfilled, (state, action) => {
                state.loading = false;
                state.visitorIPs = action.payload;
            })
            .addCase(getVisitorIPs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export default viewSlice.reducer;
