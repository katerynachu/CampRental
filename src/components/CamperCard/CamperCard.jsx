import { ButtonItem } from "../parts/Button/Button"
import { CategoriesItem } from "../parts/CategoriesItem/CategoriesItem"
import { CamperDescription, CamperImage, CamperWrapper, CategoriesWrapp, ContentFlex, ImageWrapper } from "./CamperCard.styled"
import sprite from '../../assets/images/sprite.svg'

export const CamperCard = ({ item }) => {

    const reviewsRat = item.reviews.map(reviews => (
        reviews.reviewer_rating
    ));
    const sum = reviewsRat.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const averageRating = sum / reviewsRat.length;


    return (
        <CamperWrapper>
            <ImageWrapper><CamperImage src={item.gallery[0]}></CamperImage></ImageWrapper>
            <ContentFlex>
                <div>
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.price} <span>*</span></p>
                    </div>
                    <div>
                        <p> 
                        <svg width={16} height={16}>
                            <use xlinkHref={`${sprite}#icon-rating`} width={16} height={16}></use>
                        </svg>{averageRating} <span>({item.reviews.length} )Reviews </span></p>
                        <p>location</p>
                    </div>
                </div>
                <CamperDescription>{item.description}</CamperDescription>
                {/* <CategoriesWrapp>
                    {Object.entries(item.details).map(([key, value]) => (
                        <CategoriesItem key={key} title={key} value={value} />
                    ))}
                    {item && (
                        <CategoriesItem key="ac" title="ac" value='ac' />
                    )}
                    {item.transmission && (
                        <CategoriesItem key="automatic" title="automatic" value={item.automatic} />
                    )}
                    {item.adults && (
                        <CategoriesItem key="adults" title="adults" value={item.adults} />
                    )}
                    {item.engine && (
                        <CategoriesItem key="petrol" title="petrol" value={item.petrol} />
                    )}
                </CategoriesWrapp> */}
                <CategoriesWrapp>
                    {Object.entries(item.details).map(([key, value], index) => (
                        index < 5 && <CategoriesItem key={key} title={key} value={value} />
                    ))}
                </CategoriesWrapp>
                <ButtonItem type='button' text='Show more' style='red' />
            </ContentFlex>
        </CamperWrapper>
    )
}

