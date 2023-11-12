# Epi 9 - Optimizing our app🚀🔥

## single responsibility principle

- it is a principle in software design, that is to have a single responsibility for a particular thing.
- for eg, <RestaurantCard> purpose should be just to display Restaurant cards🚀🔥
- modularity = it is just breaking down our code into small modules🔥
- in that way, our code is easily maintainable and easily testable(we can just focus on writing test cases
for that particular component alone)🚀🔥

## custom hooks

- hooks are just normal utility functions🚀
- Currently, our <RestaurantMenu> is doing two main things-
    1. fetching data
    2. displaying data
- here comes the question, can we split theses two logic and make <RestaurantMenu> only for
displaying data🔥
- fetching -- move the logic into a custom hook🚀
- displaying -- display the restaurant menu🔥
- key to build custom hooks is finalize the contract🔥🚀(wht is given as input and wht we need to give
as output)🚀

## tasks

- move fetching logic into a separate hook
- build a hook to find online status
- incorporate useOnlineStatus in <Appbody> and <Header>
- if possible, make site interactive while they r offline(like chrome is providing us game to play)😁

## code splitting

- parcel bundles all our code into a signlt html, css and js file🚀🔥
- when we see network tab, we will be calling a index.js file(single js file)

### pros

- we need to bundle our app to make our app small in size🔥

### cons

- if we have 1000s of components in a large app, this single js file will be huge and it takes
much time to show us the home page😮😮

## solution is code splitting

- other names are Chunking, Code Splitting, Dynamic bundling, Lazy loading, On demand loading and many more🔥

## how to split our code??

- for frontend system design interview, we must know these things
- for eg, consider makemytrip, we can bundle our code logic wise🚀🔥
- like, we can make bundle for hotels, flights, homestays, trains, buses etc.
- in a similar way, we have our food delivery app. Lets say we do also have a grocery buying store
- now, we will split/load our app, into food delivery app and grocery buying app🔥🚀
- but how??
- instead of importing our <Grocery> like a regular import, we can lazy import that🔥🔥
- const Grocery = lazy(() => import("./components/Grocery))
- if u see network tab, we will see two bundles🔥🚀

## component suspend error

- now, browser will make a network call to fetch Grocery js
- in mean time, React will try to load Grocery component, which is not available(little time is required
for that network call). So, react will suspend the component😮😮

## suspension

- react provides a Suspense component, we can wrap our <Grocery /> using 
<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
- in this way, while browser is fetching the js, we can fallback to this Loading screen🚀🔥