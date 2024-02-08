import { render, screen } from "@testing-library/react"
import RestaurantCard, { withHighRatedRestaurantCard } from "../components/RestaurantCard"
import singleResMock from "../../mocks/singleResMock.json"
import "@testing-library/jest-dom";


it("should render restaurant card with hotel name", () => {
    render(<RestaurantCard restaurant={singleResMock?.data.cards?.[0]?.card?.card} />)

    const hotelName = screen.getByText("Salem RR Biriyani Unavagam");
    expect(hotelName).toBeInTheDocument();
})

it("should render hoc of restaurant card with its label", () => {
    const RestaurantBestSeller = withHighRatedRestaurantCard(RestaurantCard);
    render(<RestaurantBestSeller restaurant={singleResMock?.data.cards?.[0]?.card?.card}/>)

    const label = screen.getByText("Best Seller");
    expect(label).toBeInTheDocument();
})