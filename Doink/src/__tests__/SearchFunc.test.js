import {act, fireEvent, render, renderHook, screen} from "@testing-library/react";
import AppBody from "../components/AppBody";
import mockData from "../../mocks/allResMock.json";
import useFetchRestaurant from "../utils/hooks/useFetchRestaurant";
import { BrowserRouter } from "react-router-dom";

// mimic fetch function
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(mockData)
        }
    })
})

it("should test search", async () => {
    await act(async () => {
        renderHook(useFetchRestaurant);
        render(<BrowserRouter><AppBody /></BrowserRouter>)
    })

    const resElems = screen.getAllByTestId("restro");
    expect(resElems.length).toBe(20);
    const searchBtn = screen.getByRole("button", { name: "Search" })
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target : { value: "pizza" }});
    fireEvent.click(searchBtn);
    const resElemsAftr = screen.getAllByTestId("restro");
    expect(resElemsAftr.length).toBe(2);
})

it("should test top rated restaurants", async () => {
    await act(async () => {
        renderHook(useFetchRestaurant);
        render(<BrowserRouter><AppBody /></BrowserRouter>)
    })

    const resElems = screen.getAllByTestId("restro");
    expect(resElems.length).toBe(20);
    const trBtn = screen.getByRole("button", { name: "Top Rated Restaurants" })
    fireEvent.click(trBtn);
    const resElemsAftr = screen.getAllByTestId("restro");
    expect(resElemsAftr.length).toBe(12);
})