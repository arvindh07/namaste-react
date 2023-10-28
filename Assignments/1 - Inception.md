# Theory🚀

## What is emmet?

It is shortcut for long codes. Instead of writing long and lengthy code we can use the
emmet shortcuts to create that code. eg: ! and tab -> will give html boilerplate code.

## Diff b/w library and framework?

- Library is just a collection of util functions that can be used in our app.
- Framework comes with lots of rules and syntax of its own. It is more of dictative on how to write code.

## What is cdn and why do we use it?

- cdn is content delivery network. It provides the content such as web pages, images and all other
  web contents to nearby users from a cached server, instead of fetching it from original server that
  is located somewhr else. To reduce the distance, the cached files are hosted in cdn and provided
  via network calls.

## What is crossorigin in script tag?

- generally browsers wont allow the resource to share from one domain to another. By having this attribute,
  we are saying browsers to allow to share resource from another domain.

## What is diff b/w react and reactdom?

- React is core code base of react.
- ReactDOM is kind of connecting bridge b/w react and the browsers dom.

## What is diff b/w react.dev.js and react.prod.js via cdn?

- prod version is highly optimized.
- prod version is not suitable for development.

## async and defer attribute

async

- html parses, whn it sees a script tag it doesnt pauses html parsing
- it loads along with html parsing and then it pause the html parsing
  and execute the script and then html parsing continues
  defer
- html parses, whn it sees a script tag it doesnt pause html parsing
- it loads along with html parsing and once html parsing completed, it will
  execute the script tag

When to use what?

- when one script is dependent on other, dont go for async, bcoz it doesnt
  guarantee the execution flow. It is better to go with defer.
- when scripts are independent go for async.
