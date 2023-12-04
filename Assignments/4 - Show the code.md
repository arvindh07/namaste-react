# Theory

## is jsx mandatory for react?

- nope😉 we can write react without jsx, but having jsx makes the developer life easier and
faster to develop applications.

## is es6 mandatory for react?

- again it is not a mandoatory but it helps in building fast.

## what is virtual dom?

- represents a lightweight copy of the actual DOM🔥
- it is similar to dom in browser but it is made up of js objects, which is easier manipulate and find the 
difference between prev and current virtual dom🔥
- React uses the Virtual DOM to efficiently update only the parts of the actual DOM that have changed, optimizing performance🚀

## what is reconciliation in react?

- it is a process that react uses to render the ui by comparing the prev virtual dom and current virtual dom🚀
- Reconciliation is the process in React where it compares the Virtual DOM with the previous Virtual DOM snapshot to determine the minimum number of DOM updates needed to keep the UI in sync with the application state

## what is react fiber?

- React Fiber is an internal reimplementation of the React core algorithm
- It is designed to improve the performance and responsiveness of React applications by enabling asynchronous rendering and better handling of component priorities🚀🔥
- it is more optimized way of rendering that react uses in their latest version

## why do we need to use keys and whn do we need keys?

- we use keys to make that element unique bcoz whn reacts compares, it compares with the parent element like
ul > li. All these li will be same bcoz they have a common parent ul. So to distinguish li we use key🔥

## can we index as keys?

- yeah but react docs says it is not advisable

## props in react?

- it is kind of arg to a functional component
- it is a way to pass to data from parent to child component🚀🔥

## config driver ui?

- ui layer is completely based on data🔥🚀
- A Config Driven UI is an approach where the user interface of an application is defined and configured through external configuration files or data rather than hardcoding UI elements