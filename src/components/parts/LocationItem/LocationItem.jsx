import { LocationInput, LocationLabel, LocationSvg } from "./LocationItem.styled"
import sprite from '../../../assets/images/sprite.svg'



export const LocationItem = ({ formik }) => {
    return (
        <LocationLabel>location
            <LocationInput
                name="location"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.location}
                placeholder='City'
            />
            <LocationSvg width={18} height={20}>
                <use href={`${sprite}#icon-location`}></use>
            </LocationSvg></LocationLabel>
    )
}