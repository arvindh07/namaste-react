import { act, fireEvent, render, renderHook, screen } from "@testing-library/react"
import Restaurant from "../components/Restaurant"
import useFetchMenu from "../utils/hooks/useFetchMenu"
import singleResMock from "../../mocks/singleResMock.json"
import { Provider } from "react-redux"
import store from "../store/store"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(singleResMock)
        }
    })
})

describe("test the toggle function of accordion", () => {
    it("should display food items on clicking accordion header", async() => {
        await act(async () => {
            renderHook(useFetchMenu);
            render(<Provider store={store}><Restaurant /></Provider>);
        })

        const biryaniAccordion = screen.getAllByTestId("accHeader");
        fireEvent.click(biryaniAccordion[1]);
        const biryaniVarieties = screen.getAllByTestId("foodMenu");
        expect(biryaniVarieties.length).toBe(13);
        fireEvent.click(biryaniAccordion[1]);
        // const biryaniVarietiesAftr = screen.getAllByTestId("foodMenu");
        // expect(biryaniVarietiesAftr.length).toBe(0);
    })
})