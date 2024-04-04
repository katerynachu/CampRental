import { CategorieName, FilterWrapper } from "../Search/Search.styled"
import { RadioButton } from "../parts/RadioButton/RadioButton"

const equipment = [
    { id: '1', value: 'AC', label: 'ac' },
    { id: '2', value: 'Automatic', label: 'automatic' },
    { id: '3', value: 'Kitchen', label: 'kitchen' },
    { id: '4', value: 'TV', label: 'TV' },
    { id: '5', value: 'Shower/WC', label: 'shower' },
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