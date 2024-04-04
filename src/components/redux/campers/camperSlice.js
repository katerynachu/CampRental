import { createSlice } from '@reduxjs/toolkit';

import { fetchCampers } from './api'

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};


const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    reducers: {
        setCamperData: (state, action) => {
            state.items = action.payload;

        },
        // setBirthdate: (state, action) => {
        //     state.items.bodyData.birthday = action.payload;
        // },
        // setLoading: (state, action) => {
        //     state.isLoading = action.payload;
        // },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCampers.pending, handlePending)
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchCampers.rejected, handleRejected)
    }
})
export const { setCamperData } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;