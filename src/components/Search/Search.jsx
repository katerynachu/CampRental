import { useFormik } from 'formik';
import { FilterTitle } from './Search.styled';
import { ButtonItem } from '../parts/Button/Button';
import { LocationItem } from '../parts/LocationItem/LocationItem';
import { VehicleType } from '../VehicleType/VehicleType';
import { VehicleEquipment } from '../VehicleEquipment/VehicleEquipment';
import { setFilterData } from '../redux/filter/filterSlice'
import { useDispatch, useSelector } from 'react-redux';
import { filterData } from '../redux/filter/selectors'
import { useEffect } from 'react';


export const Search = () => {
    const dispatch = useDispatch();
    const filtersData = useSelector(filterData);

    const formik = useFormik({
        initialValues: {
            location: filtersData.location || '',
            type: filtersData.type || null,
            equipment: filtersData.equipment || null
        },
        onSubmit: values => {
            dispatch(setFilterData(values));
            localStorage.setItem('filtersData', JSON.stringify(values));

            console.log(values)
            // alert(JSON.stringify(values, null, 2));
        },
    });

    useEffect(() => {
        const storedFiltersData = localStorage.getItem('filtersData');
        if (storedFiltersData) {
            const parsedFiltersData = JSON.parse(storedFiltersData);
            formik.setValues(parsedFiltersData);
            dispatch(setFilterData(parsedFiltersData));

        }
    }, []);
    const handleLocationChange = event => {
        formik.handleChange(event);
        formik.handleSubmit();
    };

    const handleTypeChange = event => {
        formik.handleChange(event);
        formik.handleSubmit();
    };

    const handleEquipmentChange = event => {
        console.log(event)
        formik.handleChange(event);
        formik.handleSubmit();
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <LocationItem formik={{ ...formik, handleChange: handleLocationChange }} />
            <FilterTitle>filters</FilterTitle>
            <VehicleEquipment formik={{ ...formik, handleChange: handleEquipmentChange }} />
            <VehicleType formik={{ ...formik, handleChange: handleTypeChange }} />
            <ButtonItem text='Submit' type="submit" style='red' />
        </form>
    );
}