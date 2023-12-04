# Epi 11 - Data is the new oil

- This epi is all about how best we can manage our data. As we knw, data managament is a key thing🚀🚀

## HOC

- HOC is nothing but a function that takes a component as input and gives a component as output with some additional
  features or superpowers🚀🔥
- HOC are pure function means output will not differ when the same input is provided🚀
- withPromotedLabel is a HOC
  const withPromotedLabel = (RestaurantCard) => {
  return () => {
  return (
  <h1>label</h1>
  <RestaurantCard />
  )
  }
  }

### hoc - task

- add promoted label to restaurant if it is a promoted one
- hoc is pure bcoz we will create <withPromotedLabel> hoc and it will not modify the original <Restaurant>, instead it will
  enhance the og component with some features to it🚀🔥
- couldnt complete as promoted data was not there in the api response🤦‍♂️🤦‍♂️
- but can able to put high rated labels for hotels with hight rating(>=4.4)🔥🔥

## Info - 1

- As said earlier, we have two layers - ui layer and data layer
- this ui layer is powered by data layer🔥so data layer is very important, whn u handled data layer properly, ur app will be more efficient and fast🔥🚀
- all our jsx will under ui layer
- data layer will be of state, props, local variables etc
- So, working on data layer, how best we can maintain our data layer is very important🔥

## task

- build own accordion for menu categories
- try to lift the state up in order to close other panels. Basically, u only need to have one panel open🔥

## Info - 2

- react developer tools => components, profiler.
- in components, we can see the components structure, almost like virtual dom🚀

### profiler

- it records our react application🚀🔥

## controlled vs uncontrolled components

- controlled -> it is controlled by parent rather than having its control on its own(may be some state to control
the child component)
- uncontrolled ->having its own control and not controlled by any other component

## task

- build a close or toggle feature for current panel🔥🚀
- basically, it should open and close whn clicked on the same accordion heading and open if clicked on other accordion heading🚀

## props drilling

- it is a major topic in react, basically we send props to multiple layers from parent to children
- the in between component may not be needing the props or they might not be using it at all
- to avoid this, we can use context🔥

## context

- it is also a kind of solution to props drilling
- it is kind of storing data globally but it is not❌it is a global thing❌
- we can use the data in the context anywhere in our app🚀
- #### creation - createContext()
- #### use - useContext()
- eg,
  const UserContext = createContext({
    loggedInUser: "arvindh"
  })
- smwhr else in our app, we can use like
  const {loggedInUser} = useContext(UserContext)

#### Tip: DONT PUT ALL YOUR DATA INTO CONTEXT, USE PROPS WHENEVER YOU FEEL IT NEEDED

- in functional components, we can use context by useContext hook🚀🔥
- in class based components, we can use context by <UserContext.Consumer></UserContext.Consumer>🚀🔥
- eg,
  <UserContext.Consumer>
    {(data) => {
      return (<h1>{data.loggedInUser}</h1>)
    }}
  </UserContext.Consumer>

### how can we change the data in usercontext

- we can wrap our whole app component inside a <UserContext.Provider> and pass it a value🔥
- <UserContext.Provider value={ loggedInUser: userName}>
- we can have provider wrapper inside another provider wrapper🚀🚀
- how it is used is,
<UserContext.Provider value={loggedInUser: "arvindh" }>
  <Header />
  <UserContext.Provider value={loggedInUser: "dhoni" }>
    <Body />
  </UserContext.Provider>
</UserContext.Provider>
- we can pass our setState method to that value prop as well to update/modify the value inside 
the context🚀🔥
- simply, we can pass anything we want in that value of provider wrapper🚀🚀
- context is very usefull in small to medium sized apps🔥🚀