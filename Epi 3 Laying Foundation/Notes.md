# Epi 3 - Laying foundation🚀

## Writing scripts in pkg.json file

- start -- parcel index.html(dev)
- build -- parcel build index.html(prod)

## Shortcut for start script

- npm run start or npm start is same
- both will work
- but whereas for other scripts it wont work
  eg: npm build wont work
- start is reserved keyword for npm so thats why it works✌

## 🧨Key points from Epi 2

- React.createElement() is just an object.
- it gets converted into html only when it renders on the DOM.

## Myth breaker🎊 -- JSX is not part of react

- both are separate, it is just a convention where we can write js and html-like syntax (or) xml-like syntax.

## Myth breaker🎊 -- JSX is not html

- it is just html like syntax.

## JSX

- it makes our life easier, dev friendly

## Can browser understand JSX??

- Nope😮
- Js engine understands only js code.
- Parcel conversts jsx into js which is executed by js engine.

## Does parcel does this alone?

- Nope. Parcel does this with help of BABEL🚀

## Babel

- it is commonly called as a transpiler
- it converts jsx into js
- it converts before it reaches the js engine
- as soon as i hit save it starts transpiling and building our app.

## Path of react element and jsx

### Normal react element vs JSX element

-> React.createElement() -> react element -> it is a js object -> react-dom renders js to html
-> JSX element -> React.createElement() -> react element -> it is a js object -> react-dom renders js to html

🧨Babel also converts modern es6 into old js code to support old browsers.

## React element and React Component

- element is just a jsx code which is js object.
- component is normal js function that returns react elements.
- component starts with capital letter.

## Jargon - Component composition😮

- it is nthing a component inside another component

## Super power of jsx

- we can write any piece of js code inside {}

## Brainstorm -- Suppose u r calling an API that is sending some malicious data, using {} in JSX

- JSX will sanitize the js for u🔥🔥🔥
- and this type of attack is cross site scripting
