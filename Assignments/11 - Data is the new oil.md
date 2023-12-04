# Theory

## wht is props drilling

- passing the props from a parent to the required child. In this process, the parent will have to pass the props to all the intermediate childs(who dont need the props). This scenerio is props drilling.

## wht is lifting the state up

- we knw in react, we cant pass the data between sibling components
- so to share the data we need to lift the state up to its immediate common parent and thn share to their childrens🚀


## wht r context provider and context consumer

- The Provider component allows you to pass data down the component tree to be consumed by components that are Consumers of that context🚀
- context consumer is used in class based component and in functional components we will use hook (useContext), its
purpose is to provide the value to a particular place
- provider is used to wrap our app and we can provide values from thr

## if u dont pass the value to the provider does it take the default value?

- yes it will and which is specified when creating the context using createContext🚀
- if you provide a value explicitly when using the Provider, it will override the default value🚀🚀