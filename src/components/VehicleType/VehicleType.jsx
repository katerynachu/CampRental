import { CategorieName, FilterWrapper } from "../Search/Search.styled"
import { RadioButton } from "../parts/RadioButton/RadioButton"



const vehicleType = [
    { id: '1-vehicle', value: 'Van', label: 'van' },
    { id: '2-vehicle', value: 'Fully Integrated', label: 'fully' },
    { id: '3-vehicle', value: 'Alcove', label: 'alcove' },

]
export const VehicleType = ({ formik }) => {
    return (
        <>
            <CategorieName>Vehicle type</CategorieName>
            <FilterWrapper>

                {vehicleType.map(item => (
                    <RadioButton fieldName='type' key={item.id} item={item} size={40} formik={formik} />
                ))}
            </FilterWrapper>
        </>

    )
}