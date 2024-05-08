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
        favorites: [],
        isLoading: false,
        error: null
    },
    reducers: {
        setCamperData: (state, action) => {
            state.items = action.payload.map(item => ({ ...item, id: item._id, isFavorite: false }));
        },
        setFavoritesData: (state, action) => {
            // console.log(action.payload)
            state.favorites = action.payload.map(item => ({ ...item, id: item._id, isFavorite: true }));
        },
        addFavoriteCamp: (state, action) => {
            const { id } = action.payload;
            // console.log(id)

            const camper = state.items.find(item => item.id === id);
            if (camper) {
                camper.isFavorite = true;
                state.favorites.push(camper);
            }
        },
        removeFavoritesCamp: (state, action) => {
            const { id } = action.payload;
            // console.log(id)
            const index = state.favorites.findIndex(item => item.id === id);
            if (index !== -1) {
                state.favorites.splice(index, 1);
            }
            const camper = state.items.find(item => item.id === id);
            if (camper) {
                camper.isFavorite = false;
            }
        }
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
export const { setCamperData, setFavoritesData, removeFavoritesCamp, addFavoriteCamp } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;