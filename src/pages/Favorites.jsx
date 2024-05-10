import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoritesData } from '../components/redux/campers/selectors';
import { CamperList } from '../components/CamperList/CamperList'
import { setFavoritesData, removeFavoritesCamp, addFavoriteCamp } from '../components/redux/campers/camperSlice';

const ITEMS_PER_PAGE = 4;

export default function Favorites() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedCamperData, setDisplayedCamperData] = useState([]);

    const res = useSelector(favoritesData);

    const favorites = useSelector(favoritesData);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavorites && storedFavorites.length > 0) {
            dispatch(setFavoritesData(storedFavorites));
        }
    }, [dispatch]);
    const handleLoadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };
    const handleAddFavorite = (item) => {
        dispatch(addFavoriteCamp(item));
        setDisplayedCamperData(res.slice(0, currentPage * ITEMS_PER_PAGE));
    }

    const handleRemoveFavorite = (item) => {
        dispatch(removeFavoritesCamp(item));
        setDisplayedCamperData(res.filter(camper => camper.id !== item.id).slice(0, currentPage * ITEMS_PER_PAGE));
    }

    useEffect(() => {

        setDisplayedCamperData(res.slice(0, currentPage * ITEMS_PER_PAGE));
    }, [res, currentPage]);
    return (
        <>
            {displayedCamperData && displayedCamperData.length > 0 ? (
                <CamperList onLoadMore={handleLoadMore} onRemoveFavorite={handleRemoveFavorite} onAddFavorite={handleAddFavorite} defaultData={favorites} items={displayedCamperData} />
            ) : (
                <p>Not found </p>

            )}
        </>)
}
