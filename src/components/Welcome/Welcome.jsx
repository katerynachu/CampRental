import { Banner, BannerThee, BannerTwo, WelcomeTitle, WelcomeWrapp } from "./Welcome.styled"

export const Welcome = () => {

    return (
        <WelcomeWrapp>
            <Banner />
            <WelcomeTitle>Explore Ukraine: Rent Campervans for an Unforgettable Journey!</WelcomeTitle>
            <BannerTwo />
            <BannerThee />
        </WelcomeWrapp>


    )
}