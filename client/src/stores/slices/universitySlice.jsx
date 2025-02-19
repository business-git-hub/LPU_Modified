import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUniversities,
  createUniversity,
  fetchUniversityById,
  updateUniversity,
  deleteUniversity,
} from "../actions/universityActions";

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Initial State
const initialState = {
  isUniversityLoading: false,
  universities: {
    data: [],
    pagination: {
      currentPage: 1,
      totalPages: 0,
      totalUniversities: 0,
      limit: 10,
      hasNextPage: false,
      hasPrevPage: false,
    },
  },
  allUniversities: [],
  universityError: null,
  isUniversityPosting: false,
  isUniversityUpdating: false,
  isUniversityDeleting: false,
  isUniversityFetching: false,
  isUniversityFetchingID: false,
  university: null,
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Helper function for pending states
const handlePending = (state) => {
  state.isUniversityLoading = true;
  state.universityError = null;
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Helper function for rejected states
const handleRejected = (state, action) => {
  state.isUniversityLoading = false;
  state.universityError = action.error.message || "An error occurred";
};

const universitySlice = createSlice({
  name: "university",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.universityError = null;
    },
    resetState: (state) => {
      state.isUniversityLoading = false;
      state.universities.data = [];
      state.universities.pagination = { ...initialState.universities.pagination };
      state.allUniversities = [];
      state.universityError = null;
      state.university = {};
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Universities
      .addCase(fetchUniversities.pending, handlePending)
      .addCase(fetchUniversities.fulfilled, (state, action) => {
        state.isUniversityLoading = false;
        state.universities.data = action.payload.data.universities || [];
        state.universities.pagination = action.payload.data.pagination || [];
        state.allUniversities = action.payload.data.allUniversity || [];
        state.universityError = null;
      })
      .addCase(fetchUniversities.rejected, handleRejected);
    builder
      // Create University
      .addCase(createUniversity.pending, handlePending)
      .addCase(createUniversity.fulfilled, (state, action) => {
        state.isUniversityPosting = false;
        state.universities.data = [...state.universities.data, action.payload.data] || [];
        state.allUniversities = [...state.allUniversities, action.payload.data.allUniversities] || [];
        state.universityError = null;
      })
      .addCase(createUniversity.rejected, handleRejected);
    builder
      // Fetch Single University
      .addCase(fetchUniversityById.pending, handlePending)
      .addCase(fetchUniversityById.fulfilled, (state, action) => {
        state.isUniversityLoading = false;
        state.university = action.payload.data || {};
        state.allUniversities = action.payload.allUniversity || [];
        state.universityError = null;
      })
      .addCase(fetchUniversityById.rejected, handleRejected);
    builder
      // Update University
      .addCase(updateUniversity.pending, handlePending)
      .addCase(updateUniversity.fulfilled, (state, action) => {
        state.isUniversityLoading = false;
        const updatedUniversity = action.payload.data || {};
        state.universities.data = state.universities.data.map((uni) =>
          uni._id === updatedUniversity._id ? updatedUniversity : uni
        ) || [];
        state.allUniversities = state.allUniversities.map((uni) =>
          uni._id === updatedUniversity._id ? updatedUniversity : uni
        ) || [];
        state.universityError = null;
      })
      .addCase(updateUniversity.rejected, handleRejected);

    builder
      .addCase(deleteUniversity.pending, (state) => {
        state.isUniversityLoading = true;
        state.error = null;
      })
      .addCase(deleteUniversity.fulfilled, (state, action) => {
        state.isUniversityLoading = false;

      })
      .addCase(deleteUniversity.rejected, (state, action) => {
        state.isUniversityLoading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const { clearErrors, resetState } = universitySlice.actions;

export default universitySlice.reducer;

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }