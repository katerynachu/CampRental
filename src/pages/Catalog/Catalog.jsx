import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCamperData } from '../../components/redux/campers/camperSlice';
import axios from 'axios';
import { CamperList } from '../../components/CamperList/CamperList'
import { filteredCampers } from '../../components/redux/filter/selectors'
import { favoritesData } from '../../components/redux/campers/selectors'
import { SideBar } from '../../components/SideBar/SideBar';
import { HomeWrapper } from './Catalog.styled';
const ITEMS_PER_PAGE = 4;

export default function Home() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedCamperData, setDisplayedCamperData] = useState([]);

    const res = useSelector(filteredCampers);

    const favorites = useSelector(favoritesData);

    useEffect(() => {
        const fetchCamperData = async () => {
            try {
                const response = await axios.get('https://65fc90ee9fc4425c65306aba.mockapi.io/campers/campers');
                dispatch(setCamperData(response.data));
            } catch (error) {
                console.error('Error fetching camper data:', error);
            }
        };

        fetchCamperData();
    }, [dispatch]);

    useEffect(() => {

        const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
        const updatedCamperData = res.map(camper => ({
            ...camper,
            isFavorite: favoritesFromLocalStorage.some(favorite => favorite.id === camper.id)
        }));
        setDisplayedCamperData(updatedCamperData.slice(0, currentPage * ITEMS_PER_PAGE));

    }, [res, currentPage, favorites]);


    const handleLoadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <HomeWrapper>
            <SideBar />
            {displayedCamperData && displayedCamperData.length > 0 ? (
                <CamperList onLoadMore={handleLoadMore} defaultData={res} items={displayedCamperData} />
            ) : (
                <p>Not found </p>

            )}
        </HomeWrapper>
    );

}
