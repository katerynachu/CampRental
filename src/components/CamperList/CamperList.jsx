import { CamperCard } from "../CamperCard/CamperCard"
import { ButtonItem } from "../parts/Button/Button"
import { CamperDiv, CamperListFlex } from "./CamperList.styled"


export const CamperList = ({ items, onLoadMore, defaultData }) => {


    return (
        <CamperDiv>
            <CamperListFlex>
                {items.map(item => (
                    <CamperCard key={item._id} item={item} />
                ))}
            </CamperListFlex>
            {items.length !== defaultData.length && (
                <ButtonItem onLoadMore={onLoadMore} text='Load more' type='button' style='white'></ButtonItem>
            )}        </CamperDiv>
    )
}


