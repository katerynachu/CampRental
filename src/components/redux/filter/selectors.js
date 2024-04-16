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
        let filteredCampers = campers;
        console.log(filter)

        if (filter && filter.location) {
            filteredCampers = filteredCampers.filter(camp => camp.location.toLowerCase().includes(filter.location.toLowerCase()));
        }

        if (filter && filter.type) {
            console.log(filter.type)


            filteredCampers = filteredCampers.filter(camp => camp.form.toLowerCase().includes(filter.type.toLowerCase()));
        }

        if (filter && filter.equipment) {
            const equipmentFilter = filter.equipment.toLowerCase();
            
            console.log(equipmentFilter)
            filteredCampers = filteredCampers.filter(camp => {
                if (camp.details) {
                    const detailsKeys = Object.keys(camp.details).map(key => key.toLowerCase()); // Получаем ключи объекта details в нижнем регистре
console.log(detailsKeys)
                    return detailsKeys.includes(equipmentFilter) && camp.details[equipmentFilter] > 0;
                }
                return false;
            });
        }


        console.log(filteredCampers);
        return filteredCampers;
    }
)

