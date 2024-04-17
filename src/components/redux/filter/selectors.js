import { createSelector } from '@reduxjs/toolkit';

import { camperData } from '../campers/selectors'

export const filterData = (state) => state.filters.items;



export const filteredCampers = createSelector(
    [camperData, filterData],
    (campers, filter) => {
        const equipmentFilter = filter.equipment;

        if (!filter) {
            return campers
        }
        let filteredCampers = campers;

        if (filter.location !== '' && filter.location) {
            filteredCampers = filteredCampers.filter(camp => camp.location.toLowerCase().includes(filter.location.toLowerCase()));
        }

        if (filter.type && filter.type) {

            filteredCampers = filteredCampers.filter(camp => camp.form.toLowerCase().includes(filter.type.toLowerCase()));
        }

        if (filter && filter.equipment) {
            filteredCampers = filteredCampers.filter(camp => {
                if (equipmentFilter === "automatic") {
                    return camp.transmission.toLowerCase() === "automatic";
                } else {
                    if (camp.details) {
                        if (equipmentFilter in camp.details) {
                            const equipmentValue = camp.details[equipmentFilter];
                            if (equipmentValue !== undefined && equipmentValue > 0) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            });
        }
        return filteredCampers;
    }
)

