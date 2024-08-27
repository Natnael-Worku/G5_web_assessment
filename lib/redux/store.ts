// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import allblogsReducer from '@/lib/redux/slice/AllBlogs';
import searchQueryReducer from '@/lib/redux/slice/SearchQuerySlice';
const store = configureStore({
  reducer: {
    allblogs: allblogsReducer, // Add your reducers here
    searchQuery: searchQueryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


