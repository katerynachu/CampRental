import { CategorieName, FilterWrapper } from "../Search/Search.styled"
import { RadioButton } from "../parts/RadioButton/RadioButton"

const equipment = [
    { id: '1', value: 'airConditioner', label: 'ac' },
    { id: '2', value: 'automatic', label: 'automatic' },
    { id: '3', value: 'kitchen', label: 'kitchen' },
    { id: '4', value: 'TV', label: 'TV' },
    { id: '5', value: 'bathroom', label: 'shower' },
]
export const VehicleEquipment = ({ formik }) => {
    return (
        <>
            <CategorieName>Vehicle equipment</CategorieName>

            <FilterWrapper>
                {equipment.map(item => (
                    <RadioButton fieldName='equipment' formik={formik} key={item.id} item={item} size={20} />
                ))}
            </FilterWrapper>
        </>

    )
}