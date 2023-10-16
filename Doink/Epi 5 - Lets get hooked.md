# Epi 5 - Lets get hooked🚀🤞

- all the things that we do using these libraries or framework can be done with html, css and js😜

### but why react or any other library/framework?

- to make dev life easier and for much more productivity, we use these pre-written code(library)✌

## why react is fast?

- react does fast and efficient DOM manipulation.

## cleanup our code

- move individual components into separate file. eg: Header.jsx
- structure
  🔸 src
    🔸 App.js
    🔸 components
        🔸 Header.jsx
- there is no pre defined folder structure. you can do anything u want, but try to avoid too much
  nested folders.
- never keep the hard coded value or mock data in the components folder❌
- keep it in
  🔸 src
    🔸 App.js
    🔸 components
    🔸 utils
        🔸 constants.js
        🔸 mockData.js

## Feature one - build a btn and onclick it filters restaurants having > ratings🚀🚀

- we can write onclick for that btn and using filter method, we can filter the restaurants having
  rating >.
- but after filter, the ui didnt update to the latest listofrestaurant??🤔🤔

## why it doesnt update?

- almost all libraries tries to solve this update, which is making ui layer and data layer work together
  (or) ui layer should respond to the changes made in the data layer🚀🚀

## hooks🔥🔥

- we have a special variable in react, that is created by hook(provided by react)
