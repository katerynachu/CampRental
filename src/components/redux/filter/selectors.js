import { createSelector } from '@reduxjs/toolkit';

import {camperData} from '../campers/selectors'

export const filterData = (state) => state.filters.items;



export const  filteredCampers = createSelector(
    [camperData,filterData],
    (campers,filter)=>{
        console.log(campers)
        if(!filter ){
            return campers
        }
        console.log(filter.location)
       const res =  campers.filter(camp => camp.location.toLowerCase().includes(filter.location.toLowerCase()))
       console.log(res)
       return res;
    }
)

