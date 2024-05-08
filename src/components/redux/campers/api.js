import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCampers = createAsyncThunk(
    'campers/fetchCampers',
    async () => {
        try {
            const response = await axios.get('https://65fc90ee9fc4425c65306aba.mockapi.io/campers/campers');
            const camperData = response.data;
            console.log(camperData);
            return camperData;
        } catch (error) {
            console.error('Error fetching camper data:', error);
            throw error;
        }
    }
);
