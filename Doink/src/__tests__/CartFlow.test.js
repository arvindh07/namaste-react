import { act, fireEvent, render, renderHook, screen } from "@testing-library/react"
import Restaurant from "../components/Restaurant"
import useFetchMenu from "../utils/hooks/useFetchMenu"
import mockSingleRes from "../../mocks/singleResMock.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import store from "../store/store"
import Selector from "../components/Selector"
import Header from "../components/Header"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(mockSingleRes)
    })
})
describe("test the cart flow", () => {
    it("should display biryani accordion", async () => {
        await act(async () => {
            renderHook(useFetchMenu)
            render(<Restaurant />)
        })

        const biryaniAccordion = screen.getByRole("heading", { name: "Biryani (13)" })
        expect(biryaniAccordion).toBeInTheDocument()
    })

    it("should display 13 biryani varieties under biryani accordion", async () => {
        await act(async () => {
            renderHook(useFetchMenu)
            render(<Provider store={store}><Restaurant /></Provider>)
        })

        const biryaniAccordion = screen.getAllByTestId("accHeader");
        fireEvent.click(biryaniAccordion[1]);
        const biryaniVarieties = screen.getAllByTestId("foodMenu");
        expect(biryaniVarieties.length).toBe(13);
    })

    it("should display cart items as one in header aftr clicking first biryani item", async () => {
        await act(async () => {
            renderHook(useFetchMenu)
            render(
                <BrowserRouter>
                    <Provider store={store}>
                        <Header />
                        <Restaurant />
                        <Selector />
                    </Provider>
                </BrowserRouter>)
        })

        const biryaniAccordion = screen.getAllByTestId("accHeader");
        fireEvent.click(biryaniAccordion[1]);
        // const biryaniVarieties = screen.getAllByTestId("foodMenu");
        const addBtns = screen.getAllByTestId("addItem");
        fireEvent.click(addBtns[0]);
        const cartHeader = screen.getByRole("link", { name: /Cart - 1/ })
        expect(cartHeader).toBeInTheDocument();
    })

    it("should display cart items as two in header aftr clicking 1st and 2nd biryani item", async () => {
        await act(async () => {
            renderHook(useFetchMenu)
            render(
                <BrowserRouter>
                    <Provider store={store}>
                        <Header />
                        <Restaurant />
                        <Selector />
                    </Provider>
                </BrowserRouter>)
        })

        const biryaniAccordion = screen.getByRole("heading", { name: "Biryani (13)" })
        fireEvent.click(biryaniAccordion);
        const addBtns = screen.getAllByTestId("addItem");
        fireEvent.click(addBtns[0]);
        fireEvent.click(addBtns[1]);
        const cartHeader = screen.getByRole("link", { name: /Cart - 2/ })
        expect(cartHeader).toBeInTheDocument();
    })

    it("should display cart items as one in header aftr adding 2 items and reducing it to zero", async () => {
        await act(async () => {
            renderHook(useFetchMenu)
            render(
                <BrowserRouter>
                    <Provider store={store}>
                        <Header />
                        <Restaurant />
                        {/* <Selector /> */}
                    </Provider>
                </BrowserRouter>)
        })

        const biryaniAccordion = screen.getAllByTestId("accHeader");
        fireEvent.click(biryaniAccordion[1]);
        const addBtns = screen.getAllByTestId("addItem");
        fireEvent.click(addBtns[0]);
        fireEvent.click(addBtns[1]);
        const cartHeader = screen.getByRole("link", { name: /Cart - 2/ })
        expect(cartHeader).toBeInTheDocument();
        const removeBtn = screen.getAllByTestId("removeItem");
        console.log(removeBtn[0]);
        fireEvent.click(removeBtn[0]);
        // fireEvent.click(removeBtn[1]);
        const cartHeaderAfrOne = screen.getByRole("link", { name: /Cart - 1/ })
        expect(cartHeaderAfrOne).toBeInTheDocument();
    })
})