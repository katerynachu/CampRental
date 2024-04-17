import sprite from '../../../assets/images/sprite.svg'
import { RadioInput, RadioLabel } from './RadioButton.styled'


export const RadioButton = ({ item, size, formik, fieldName }) => {


    return (
        <>
            <RadioInput
                id={item.id}
                type='radio'
                value={item.value}
                checked={formik.values[fieldName] === item.value}
                onChange={() => formik.handleChange({ target: { name: fieldName, value: item.value } })}
            />
            <RadioLabel htmlFor={item.id}>
                <svg width={size} height={size}>
                    <use href={`${sprite}#icon-${item.label}`}></use>
                </svg>
                <span>{item.value}</span>
            </RadioLabel>
        </>
    );
}