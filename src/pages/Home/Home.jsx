import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCamperData } from '../../components/redux/campers/camperSlice';
import { favoritesData } from '../../components/redux/campers/selectors';
import axios from 'axios';
import { CamperList } from '../../components/CamperList/CamperList'
import { filteredCampers } from '../../components/redux/filter/selectors'
import { SideBar } from '../../components/SideBar/SideBar';
import { HomeWrapper } from './HomePage.styled';
const ITEMS_PER_PAGE = 4;

export default function Home() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedCamperData, setDisplayedCamperData] = useState([]);

    const res = useSelector(filteredCampers);
    useEffect(() => {
        console.log(4)
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

        setDisplayedCamperData(res.slice(0, currentPage * ITEMS_PER_PAGE));
    }, [res, currentPage]);
    console.log(favoritesData)
    const handleLoadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };
    // const handleAddFavorite = (item) => {
    //     console.log('yay', item)
    //     dispatch(setFavoritesData(item))
    // }
    // const handleRemoveFavorite = (item) => {
    //     console.log('ops', item)
    //     dispatch(removeFavoritesData(item))

    // }
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
