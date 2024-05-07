import sprite from '../../../assets/images/sprite.svg'





export const Rating = ({ averageRating }) => {
    return (
        <>
            {[...Array(Math.floor(averageRating))].map((_, index) => (
                <svg key={index} width={16} height={16}>
                    <use xlinkHref={`${sprite}#icon-rating`} width={16} height={16}></use>
                </svg>
            ))}
        </>
    )
}