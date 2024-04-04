import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        items: {
            location: '',
            type: null,
            equipment: null
        },
        isLoading: false,
        error: null
    },
    reducers: {
        setFilterData: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const { setFilterData } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
