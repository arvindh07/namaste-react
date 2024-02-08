import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../components/Header"
import { Provider } from "react-redux"
import store from "../store/store"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";


it("should change login to logout btn in Header component", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>)
    
    const loginBtn = screen.getByRole("button", { name: "Login" })
    expect(loginBtn).toBeInTheDocument();
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole("button", { name: "Logout" })
    expect(logoutBtn).toBeInTheDocument();
})

it("should render header with cart items zero", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>)
    
    const cart = screen.getByText("Cart - 0");
    expect(cart).toBeInTheDocument();
})

it("should render header with cart", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>)
    
    const cart = screen.getByText(/cart/i);
    expect(cart).toBeInTheDocument();
})