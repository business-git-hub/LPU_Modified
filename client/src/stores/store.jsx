import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice'; // Ensure this path is correct
import authReducer from './slices/authSlice';
import blogReducer from './slices/blogSlice';
import universityReducer from './slices/universitySlice';
import contactReducer from './slices/contactSlice';
import viewsReducer from './slices/viewsSlice';
// Create a Redux store containing our reducers.
export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer,
        blog: blogReducer,
        university: universityReducer,
        contact: contactReducer,
        views: viewsReducer
    },
});

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Define RootState and AppDispatch for usage in your components
export const RootState = () => store.getState();
export const AppDispatch = () => store.dispatch();

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }