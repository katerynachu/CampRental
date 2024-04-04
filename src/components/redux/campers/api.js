import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCampers = createAsyncThunk(
    'campers/fetchCampers', // Новий назва дії
    async () => {
        try {
            const response = await axios.get('https://65fc90ee9fc4425c65306aba.mockapi.io/campers/campers');
            const camperData = response.data;
            console.log(camperData);
            return camperData; // Повертаємо дані, щоб вони потрапили у поле payload дії
        } catch (error) {
            console.error('Error fetching camper data:', error);
            throw error; // Передаємо помилку назад, щоб вона оброблялась на рівні компоненту
        }
    }
);
