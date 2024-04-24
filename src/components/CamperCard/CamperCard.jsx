import { ButtonItem } from "../parts/Button/Button"
import { CategoriesItem } from "../parts/CategoriesItem/CategoriesItem"
import { CamperDescription, CamperImage, CamperWrapper, CategoriesWrapp, ContentFlex, ImageWrapper } from "./CamperCard.styled"
import sprite from '../../assets/images/sprite.svg'
import { useDispatch } from 'react-redux';
import { setFavoritesData, removeFavoritesData } from '../redux/campers/camperSlice';
import { useEffect, useState } from 'react';
import { ModalWindow } from "../ModalWindow/ModalWindow";

export const CamperCard = ({ item, }) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoritesData(favorites);
    }, []);

    const addToLocalStorage = (key, value) => {
        const favorites = JSON.parse(localStorage.getItem(key)) || [];
        favorites.push(value);
        localStorage.setItem(key, JSON.stringify(favorites));
    };

    const removeFromLocalStorage = (key, value) => {
        const favorites = JSON.parse(localStorage.getItem(key)) || [];
        const updatedFavorites = favorites.filter(camper => camper.id !== value.id);
        localStorage.setItem(key, JSON.stringify(updatedFavorites));
    };

    const handleFavoriteClick = () => {
        if (item.isFavorite) {
            removeFromLocalStorage('favorites', item);
            dispatch(removeFavoritesData(item));
        } else {
            addToLocalStorage('favorites', item);

            dispatch(setFavoritesData(item));
        }
    };

    const reviewsRat = item.reviews.map(reviews => (
        reviews.reviewer_rating
    ));
    const sum = reviewsRat.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const averageRating = sum / reviewsRat.length;
    const handleModalOpen = () => {
        setIsOpen(true);
    }


    return (
        <CamperWrapper>
            <ImageWrapper><CamperImage src={item.gallery[0]}></CamperImage></ImageWrapper>
            <ContentFlex>
                <div>
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.price} <span>€</span></p>
                        <a href='/' onClick={(e) => {
                            e.preventDefault();
                            handleFavoriteClick();
                        }}>
                            <svg width={16} height={16}>
                                <use xlinkHref={`${sprite}#icon-heart`} width={16} height={16} fill={item.isFavorite ? 'red' : 'black'}></use>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <p>
                            {[...Array(Math.floor(averageRating))].map((_, index) => (
                                <svg key={index} width={16} height={16}>
                                    <use xlinkHref={`${sprite}#icon-rating`} width={16} height={16}></use>
                                </svg>
                            ))}
                            {averageRating} <span>({item.reviews.length} Reviews ) </span></p>
                        <p>{item.location}</p>
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
                <ButtonItem type='button' onLoadMore={handleModalOpen} text='Show more' style='red' />
            </ContentFlex>
            {isOpen && <ModalWindow selectedItem={item} onClose={() => setIsOpen(false)} />}
        </CamperWrapper>
    )
}

