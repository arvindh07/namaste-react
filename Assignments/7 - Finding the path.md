# Theory

## console.log(useState())

- it will return a array[val, function] 

## how will useEffect behave if we dont hav a dep array

- it will run on every render

## wht is SPA

- spa is single page application
- all app code will be fetched and it just replaces the wanted part for navigation

## client side routing and server side rendering

- in csr, we will fetch the entire app from server at one time
- in csr, navigation between different pages or views is handled by JavaScript running in the user's browser
- in csr, it provides a smoother and more responsive user experience as it doesn't require full page reloads
- in ssr, whnevr we need a resource, it always makes a request to server
- in ssr, navigation involves requesting new pages from the server, which responds with entirely new HTML pages
- in ssr, this can be slower and less interactive compared to client-side routing