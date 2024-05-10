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
        return campers.filter(camp => {
            if (filter.location && filter.location !== '' && !camp.location.toLowerCase().includes(filter.location.toLowerCase())) {
                return false;
            }

            if (filter.type && filter.type !== 'All' && !camp.form.toLowerCase().includes(filter.type.toLowerCase())) {
                return false;
            }

            if (equipmentFilter) {
                if (equipmentFilter === "automatic" && camp.transmission.toLowerCase() !== "automatic") {
                    return false;
                }

                if (camp.details && equipmentFilter in camp.details) {
                    const equipmentValue = camp.details[equipmentFilter];
                    if (equipmentValue === undefined || equipmentValue <= 0) {
                        return false;
                    }
                } else {
                    return false;
                }
            }

            return true;
        });
    }
)

