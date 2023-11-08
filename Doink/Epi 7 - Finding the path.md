# Epi 7 - Finding the path

## deep dive into react🚀

- if thr is no dep arr -> callback is called on every render
- if it is empty dep arr -> called only on initial render
- if thr is a dep arr -> it will be called on initial render and whn the value in the dep
  arr changes.

## good practice🔥

- always declare state variables at the top level of a component
- dont declare state variables inside function, if condition, for loop.

## react router dom

- used to navigate between pages in react

## createBrowserRouter⭕

- we will configure the browser router using createBrowserRouter, like, what should happen
  on what route?
- eg: /about should redirect to about you page.
- import { createBrowserRouter } from "react-router-dom"
  const appRouter = createBrowserRouter([
    {
        path: "/about",
        element: <About />
    },
    {},
    {}
  ])
- there are different kinds of router like hashRouter, but createBrowserRouter is recommended😜

## RouterProvider⭕

- now we need to provide the config created by createBrowserRouter.
- RouterProvider will do the job for us🚀
- Instead of directly rendering the AppLayout, now we will render the RouterProvider and provide a
  prop called router={appRouter}
- eg: <RouterProvider router={appRouter} />

## errorElement in createBrowserRouter⭕

- we also have a errorElement in createBrowserRouter
- if we dont have error we can render app else render errorElement
- eg:
  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
  ])

## useRouterError⭕

- it provides more details abt the err, which we can use in the error page to display more info🔥

## childrenRoute⭕

- if u wanna hav nested routes, we can use children inside the createBrowserRouter
- eg:
  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/contact",
                element: <Contact />
            },
            {}
        ]
    },
  ])

## now, how to render the children based on the path?🚀

- eg: /about should render <About />
- we have Outlet component, which renders the component based on the path
- eg: <Outlet /> 🚀🚀

## link component🔥

- we do have a link component from react-router-dom
- it prevents the page from refresh for loading a new content. Instead it just replaces the 
content in the dom in that respectivce place.
- it leads us to the single page applications🚀🔥
- where it is rendered as a single app and replaces the dom whnevr the route changes🔥

## two types of routing

1. server-side-rendering - we make a network call for a page to server will respond
(eg: about.html) and then browser will render.
2. client-side-rendering - we got the whole app from server and on client side based on routes,
we r rendering the component/page.
- this makes it as a single page applications.

## dynamic routing

- based on path we will change the content of the page.
- eg: /restaurant/ccd, /restaurant/kfc etc.