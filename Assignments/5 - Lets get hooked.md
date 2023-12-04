# Theory

## diff bw named and default export

- named export -> export const Header = () => {}
- named import -> import {Header} from "";
- default export -> export default Header;
- default import -> import Header from "";

## wht are react hooks?

- hooks are just utility functions that react provides

## why do we need a useState hook?

- main thing in any framework or library is to maintain ui layer and data layer in sync🚀🔥
- whnevr data changes, react has to repaint/rerender the ui, for this purpose, react provides us useState hook, which react internally uses to rerender the dom by comparing the prev virtual dom and current virtual dom
- whnevr setState is called, react compares prev virtual dom and current virtual dom and updates only the changed part🔥
