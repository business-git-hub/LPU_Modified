import { createSlice } from "@reduxjs/toolkit";
import {
  deleteBlog,
  fetchBlog,
  updateBlog,
  postBlog,
  fetchBlogID
} from "../actions/blogActions";

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Initial state structure
const initialState = {
  isBlogLoading: false,
  blogs: {
    posts: [],
    categories: [],
    pagination: {
      currentPage: 1,
      totalPages: 0,
      totalPosts: 0,
      limit: 10,
      hasNextPage: false,
      hasPrevPage: false,
    }
  },
  allBlogs: [], // This stores the full set of blogs
  blogError: null,
  isBlogError: false,
  blog: {},
  isBlogPosting: false,
  isBlogUpdating: false,
  isBlogDeleting: false,
  isBlogFetching: false,
  isBlogFetchingID: false,
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Helper functions for pending and rejected states
const handlePending = (state) => {
  state.isBlogLoading = true;
  state.blogError = null;
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const handleRejected = (state, action) => {
  state.isBlogLoading = false;
  state.blogError = action.error.message || "An error occurred";
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.blogError = null;
    },
    resetState: (state) => {
      state.isBlogLoading = false;
      state.blogs.posts = [] || [];
      state.blogs.pagination = { ...initialState.blogs.pagination };
      state.allBlogs = [] || [];
      state.blogError = null;
    },
    updatePagination: (state, action) => {
      const { currentPage, totalPages, totalPosts, hasNextPage, hasPrevPage } = action.payload;
      state.blogs.pagination = { currentPage, totalPages, totalPosts, hasNextPage, hasPrevPage };
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Blogs
      .addCase(fetchBlog.pending, handlePending)
      .addCase(fetchBlog.fulfilled, (state, action) => {
        const { posts, pagination, categories } = action.payload.data;
        state.isBlogLoading = false;
        state.isBlogFetching = false;
        state.blogs.posts = posts || [];
        state.blogs.pagination = pagination || [];
        state.blogs.categories = categories || [];
        state.allBlogs = action.payload.data.allBlog || [];
        state.blogError = null;
      })
      .addCase(fetchBlog.rejected, handleRejected)

      // Fetch Single Blog
      .addCase(fetchBlogID.pending, handlePending)
      .addCase(fetchBlogID.fulfilled, (state, action) => {
        const { allBlog, data } = action.payload;
        state.blog = data || {};
        state.allBlogs = allBlog || [];
        const exists = state.blogs.posts.some(post => post._id === data._id) || false;
        if (!exists) {
          state.blogs.posts = [...state.blogs.posts, data] || [];
        }
        state.isBlogFetchingID = false;
        state.blogError = null;
      })
      .addCase(fetchBlogID.rejected, handleRejected)

      // Post New Blog
      .addCase(postBlog.pending, (state) => {
        state.isBlogPosting = true;
        state.blogError = null;
      })
      .addCase(postBlog.fulfilled, (state, action) => {
        state.isBlogPosting = false;
        const newBlog = action.payload.data || {};
        state.blogs.posts = [newBlog, ...state.blogs.posts] || [];
        state.allBlogs = action.payload.data.allBlog || [];
        state.blogError = null;
      })
      .addCase(postBlog.rejected, (state, action) => {
        state.isBlogPosting = false;
        state.blogError = action.error.message || "Failed to post blog";
      })

      // Update Blog
      .addCase(updateBlog.pending, (state) => {
        state.isBlogUpdating = true;
        state.blogError = null;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.isBlogUpdating = false;
        const updatedBlog = action.payload.data || [];
        state.blogs.posts = state.blogs.posts.map((blog) =>
          blog._id === updatedBlog._id ? updatedBlog : blog
        ) || [];

        // Assign allBlogs properly to avoid redundant updates
        state.allBlogs = action.payload.data.allBlog || state.allBlogs || [];
        state.blogError = null;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isBlogUpdating = false;
        state.blogError = action.error.message || "Failed to update blog";
      })

      // Delete Blog
      .addCase(deleteBlog.pending, (state) => {
        state.isBlogDeleting = true;
        state.blogError = null;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.isBlogDeleting = false;
        state.allBlogs = action.payload.allBlog || [];
        state.blogError = null;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.isBlogDeleting = false;
        state.blogError = action.error.message || "Failed to delete blog";
      });
  },
});

export const { clearErrors, resetState, updatePagination } = blogSlice.actions;
export default blogSlice.reducer;

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }