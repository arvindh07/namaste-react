# Theory

## Wht is a microservice

- it is software architectural style to develop applications. Earlier everything was monolith architecture, whr all everything is developed and deployed in a single place
- microservice is a pattern whr individual services are developed and deployed individually
- that individual services can be diff tech stacks
- eg, db, sms, ui all these can be separted into individual services

## monolith architecture

- it is software architectural style whr all things are tightly integrated into a single codebase. The entire application is developed and deployed as a single unit.

## diff bw monolith and microservice

- monolith -- deployed in a single server🔥
- microservice -- deployed individually as a separate service🚀
- Monoliths may have slower development cycles, while Microservices enable faster, independent development and deployment of services

## useEffect hook

- it is hook provided by react to handle side effects in react
- it performs some api calls aftr render, for dependency in that list
- It allows you to perform tasks like data fetching, DOM manipulation, or subscriptions after the component has rendered

## optional chaining

- ?. kind of provides safe method of accessing data
- if data is not thr, it wont throw error

## shimmer ui

- earlier we use loader to wait until the data comes
- shimmer is a design pattern and is the new way of waiting
- shimmer kind of mimics the actual ui, it provides a better ux🚀🔥

## js expression and js statement

- an expression is a piece of code that evaluates to a value
- for eg,
    - 1 → produces 1
    - "hello" → produces "hello"
    - 5 * 10 → produces 50
    - num > 100 → produces either true or false
    - isHappy ? "🙂" : "🙁" → produces an emoji
    - [1, 2, 3].pop() → produces the number 3
- statement is an instruction for the computer to do something and it will not produce a value
- For example, x = 5; is a statement that assigns the value 5 to the variable x

## conditional rendering

- it is rendering the ui based on some conditions
- if data is thr, render the actual ui else display the shimmer ui

## cors

- it is security that browser provides to block cross origin requests
- cors -- cross origin request sharing

## async and await

- it is a way of handling promises
- earlier thn and catch is used to resolve promises
- async await provides less code and better way of handling promises by avoiding promise chains
- await will pause the execution until a promise is resolved or rejected, allowing asynchronous code to be written in a more synchronous style

## use of "const json = await data.json()"

- in this, await is used to handle the promise of converting readable stream of data to json