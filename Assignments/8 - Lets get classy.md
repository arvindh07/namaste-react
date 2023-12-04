# Theory

## how do u created nested routes by react-router-dom configuration

- lets say we have a parent component <App> in "/" and we have to create nested routes for <RestaurantCard>
- this is how it will be,
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/restaurant",
                element: <RestaurantCard>
            }
        ]
    }
])
- we can display using <Outlet />

## createHashRouter, createMemoryRouter

- createHashRouter uses URL hashes for routing, while createMemoryRouter doesn't rely on the browser's URL and keeps routing in memory

## order of life cycle method calls in class based components

- componentDidMount(), componentDidUpdate(), componentWillUnmount()
- constructor -> thn it will render === render phase
- react updates dom -> componentDidMount, componentDidUpdate, componentWillUnmount === commit phase

## why do we use componentDidUpdate

- used for performing side effects in a class-based component
- It is called after the component has been added to the DOM

## why do we use componentWillUnmount

- used to cleanup the things like event listeners or timers before the component is removed from the dom

## super(props) in constructor

- it is used to call the parent constructor
- it is necessary to correctly initialize the component's state and props

## why cant we have the callback function of useEffect async?

- bcoz it is expected that async will return a promise but wht the useEffect expects either nothing or a cleanup function by default🚀 
- So, whnevr we put async it throws error