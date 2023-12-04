# Theory

## whn and why do we need lazy?

- lazy is needed whnevr the code is large and takes time to load
- lazy is needed bcoz we can split the code into files as per their functionalities
- so it will import only whn it is needed🚀

## suspense

- whn using lazy, it takes some time to fetch, in the meanwhile react tries to render the component, which
is not available. So to cover that time we can wrap our lazy component using <Suspense>
- so this <Suspense> will suspend the execution of that component until an async operation is completed such as data fetching and instead we can show a fallback🚀🔥

## Why do we get this error: "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition"? How does suspense fix this error?

- it occurs whn react responds to a sync user input(in our case, consider abt u route page)

## advantages and disadvantages of code splitting

- advantage is that it reduces the initial loading time, reduced bundle size leading to faster page loads🚀 
- cons are might increase complexity of our code, over splitting leads to additional HTTP requests

## why and whn do we need suspense

- Suspense is needed when you have asynchronous operations (like data fetching or code splitting) in your components that might take some time to complete🚀
- it is needed whn we need to wait for something and to suspend the execution we need suspense🚀