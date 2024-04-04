import { CategoriesWrapper } from "./CategoriesItem.styled"
import sprite from '../../../assets/images/sprite.svg'

const additionalTexts = {
    'adults': 'adults',
    'automatic': 'Automatic',
    'beds': 'beds',
    'airConditioner': 'AC',
    'CD': 'CD',
    'radio': 'Radio',
    'AC': 'AC',
    'Petrol': 'Petrol',
    'kitchen': 'Kitchen',
    'toilet': 'Toilet',
    'shower': 'Shower',
    'freezer': 'Freezer',
    'gas': 'Gas',
    'water': 'Water',
    'microwave': 'Microwave',
    'TV': 'TV',
    'hob': 'hob',
    'bathroom': 'Bathroom',
    'petrol': 'Petrol',
    'ac': 'AC'



}


export const CategoriesItem = ({ title, value }) => {

    const additionalText = additionalTexts[title] || null;

    return (
        <CategoriesWrapper>
            <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-${title}`} width={20} height={20}></use>
            </svg>
            {value > 1 && value} {additionalText}
        </CategoriesWrapper>
    )
}
