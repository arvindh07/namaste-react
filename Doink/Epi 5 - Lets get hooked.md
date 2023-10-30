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

## default import and named import

- default ->

     - export default Component;
     - import Component from path;

- named ->
     - export const Component;
     - import {Component} from path;

## can we have both default and named export for same component?

- Yes😮 it works

## Feature one - build a btn and onclick it filters restaurants having > ratings🚀🚀

- we can write onclick for that btn and using filter method, we can filter the restaurants having
  rating >.
- but after filter, the ui didnt update to the latest listofrestaurant??🤔🤔

## why it doesnt update?

- almost all libraries tries to solve this update, which is making ui layer and data layer work together
  (or) ui layer should respond to the changes made in the data layer🚀🚀

## hooks🔥🔥

- we have a special variable in react, that is created by hook(provided by react)
- hooks r just normal js utility functions

## useState hook

- it is just a normal js utility function
- const [list, setList] = useState()
- it maintains the state of the varibale
- in our case, it maintains the updated/filtered list of restaurants,
  in a way, it keeps ui ad data layer in sync.🚀
- AppBody -> contains this state variable
  -> on setList, react will replace the AppBody with new list. i.e., it re-renders🔥🔥

## how our app is fast?

- if u say, it bundles fast blah blah blah...it is wrng bcoz it is not done by react😜
- react is fast and efficient in DOM manipulation🚀

## diff algo, react fiber, reconciliation algo

- from react 16, react fiber is a way of manipulation virtual dom.
- consider,
  resContainer(has 6 res cards) -> filter⭕ -> resContainer(has 3 res cards)
- react has a concept of virtual dom
- virtual dom is actual representation of actual dom
- actual dom is nthing bt the html tag
  eg:
       <html>
         <head></head>
         <body></body>
       </html>
- virtual dom is the actual js objects.
- we knw, react element is an js object, so our virtual dom will be just nested objects🚀🚀
- this diff algo will find the difference bw the previous dom and changed dom
- react is fast in dom manipulation bcoz it works on the js object level. Finding the diff
  b/w html tag(actual dom) is difficult and costly operation🤦‍♂️

## why useState provides a function to update its variable??😎

- this method/function acts like a trigger to start the diff algo and update the ui🚀🚀🔥🔥
- the second method that useState provides, is a way to start the diff algo, that is where
  the react compares the previous dom and the updated value to set and updates ui according to that🚀🚀

# React Docs

- This is a part of the process that React calls reconciliation which starts when you call ReactDOM.render() or setState()🚀🚀. By the end of the reconciliation, React knows the resulting DOM tree, and **a renderer like react-dom or react-native applies the minimal set of changes necessary to update the DOM nodes** (or the platform-specific views in case of React Native).

- An element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components.🔥🔥

- A component can be defined as a function. It takes props as an input, and returns an element tree
  as the output.🚀

- reconciliation - The algorithm React uses to diff one tree with another to determine which parts need to be changed.

- Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

- The reason it can support so many targets is because React is designed so that reconciliation and rendering are separate phases. The reconciler does the work of computing which parts of a tree have changed; the renderer then uses that information to actually update the rendered app.

- This separation means that React DOM and React Native can use their own renderers while sharing the same reconciler, provided by React core.

- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
- A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

-  requestIdleCallback schedules a low priority function to be called during an idle period, and requestAnimationFrame schedules a high priority function to be called on the next animation frame.