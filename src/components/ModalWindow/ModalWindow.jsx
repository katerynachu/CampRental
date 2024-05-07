import { Rating } from "../parts/Rating/Rating"
import { ModalContainer, ModalMainDiv } from "./ModalWindow.styled"
import { averageRatingCalc } from '../../assets/helpers/helpers'

export const ModalWindow = ({ selectedItem, onClose }) => {
    console.log(selectedItem)


    const averageRating = averageRatingCalc(selectedItem);
    return (
        <ModalContainer>
            <ModalMainDiv>
                <div>
                    <p>{selectedItem.name}</p>
                    <span>  <Rating averageRating={1} />{averageRating}</span>
                    <button onClick={onClose}>x</button>
                </div>
            </ModalMainDiv>

        </ModalContainer>
    )
}