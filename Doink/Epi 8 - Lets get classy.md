# Epi 8 - Lets get classy

## class component🔥

- A functional component is just a normal js function that returns react elements. When we say class based component, is means it is just a normal js class that return react elements.
- Functional components return jsx whereas class based components has a render method that returns some piece of jsx.
- 
class User extends React.Component{
    render(){
        return <h1>Hello world</h1>
    }
}

## props in class components

- in functional components, we get props as args to component.
- in class components, we call constructor and the props is taken as arg
- inside constructor, we need to call super(props)🚀🚀
- 
constructor(props){
    super(props)
}
- we can access props like, this.props.name🔥

## super keyword

- it calls the constructor of parent class that React.Component class.

## state variables

- we can have our state variables inside constructor🚀
- 
constructor(props){
    this.state = {
        count: 0
    }
}
- we can access state variables like props. eg: this.state.count.
- constructor is a place to receive props and declare state variables🚀🔥
- second state variable,
in function -> const [count2, setCount2] = useState(1)
in class -> 
constructor(props){
    super(props)

    this.state = {
        count: 0,
        count2: 0
    }
}
- behind the scenes, for functional components, the state variables are kept in a single large object, like, the class based ones🔥🚀

## set state variables

- in class based components, we do have a setState method to update the state variables.
- this.setState({
    count: this.state.count + 1
})
- DONT UPDATE STATE VARIABLES DIRECTLY🚀🔥

## lifecycle methods in react🔥🚀🚀

### mounting

- it is nthing but displaying or loading our component on to the webpage🔥
- flow: constructor is called -> render method is called -> componentDidMount method is called🔥

### parent-child relationship

- parent constructor -> parent render -> when it sees child component
- child constructor -> child render -> childDidMount -> once child completely mounted
- parentDidMount is called⭐⭐

### componentDidMount🔥

- it is one of the lifecycle method, which is called when a component is mounted on to the dom
- it is used to make api calls🚀
- it is similar to call api in useEffect on initial render in functional component🚀🔥🚀❌❌❌
- 
useEffect(() => {
    <!-- api calls -->
}, [])
- now we got the answer why api calls are made in componentDidMount? 
    - we need to call api once the page has been rendered in ui, for better UX🚀
    - better UX is: page load -> render -> api(waits for response) -> re-render🔥
    - according to my previous tutorials, api call is an side effect and an useEffect is used to handle sideffects🚀🔥🔥

### lifecycle diagram of react🚀🚀

- link: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- Two phases in react:

1. render phase - Pure and has no side effects. May be paused, aborted or restarted by React.
2. commit phase - Can work with DOM, run side effects, schedule updates.

### scenerio - when we hav multiple children components

#### expected

- parent constructor -> parent render -> sees first child, so
- first child constructor -> first child render -> first childDidMount
- second child constructor -> second child render -> second childDidMount
- parentDidMount
- but it is wrong😮🤦‍♂️

#### actual

- parent constructor -> parent render -> sees first child, so
- first child constructor -> first child render 
- second child constructor -> second child render 
- first childDidMount -> second childDidMount
- parentDidMount

### how did this happen?

- as we knw thr r two phases: first render phase will happen, so
    - parent constructor -> parent render -> sees first child, so
    - first child constructor -> first child render 
- here comes the react, here react will batch up for the commit phase🚀🔥
- so, as react sees thr is multiple childrens, it will execute
    - second child constructor -> second child render 
- once render phase is complete, commit phase starts🔥🚀
- so, both the components are rendered and then during the commit phase, dom will be updated and all side effects are executed.
    - first childDidMount -> second childDidMount
    - parentDidMount

*** 
1. React is doing faster DOM manipulation is bcoz of this batching up commit process. React efficiently
batches up the commit phase bcoz DOM manipulation is one of the costliest operation🔥 so it executes
it in one go🚀 

2. In this way, react results in huge optimization🚀🔥

***

#### actual

- parent constructor -> parent render -> sees first child, so
- first child constructor -> first child render 
- second child constructor -> second child render 
- (DOM UPDATION HAPPENS - IN A SINGLE BATCH)🚀🚀🚀
- first childDidMount -> second childDidMount
- parentDidMount

#### make api call in componentDidMount

<!-- 
    --- Mounting ---
    1. constructor called(dummy data)
    2. render happens(dummy data)
        - <HTML (dummy data)>
    3. componentDidMount()
        - api call
        - this.setState

    --- Updating ---
    1. render happens(api data)
        - <HTML (api data)>
    2. componentDidUpdate()
 -->

### componentWillUnmount

- this happens when the component is removed from the dom🚀

### scenerio 2

- parent(About)
    - child(UserCard("First"))
        - Grand Child(Dummy("First"))
    - child(UserCard("Second"))
        - Grand Child(Dummy("Second"))

- output:
<!-- 
    ---- 1. RENDER PHASE ----
    parent constructor
    parent render
    first child constructor
    first child render
    first grand child constructor
    first grand child render
        <no more component to render, so a componentDidMount is batched and return to parent(first child)>
        batch -> [FGC-didMount] -> return to FC
        <here also no more component, so>
        batch -> [FGC-didMount, FC-didMount] -> return to P
        <it sees one more child component>
    second child constructor
    second child render
    second grand child constructor
    second grand child render
        <no more component to render, so a componentDidMount is batched and return to parent(second child)>
        batch -> [FGC-didMount, FC-didMount, SGC-didMount] -> return to GC
        <here also no more component, so>
        batch -> [FGC-didMount, FC-didMount, SGC-didMount, SC-didMount] -> return to P
        <here also no more component, so>
        batch -> [FGC-didMount, FC-didMount, SGC-didMount, SC-didMount, P-didMount]
    
    ---- 2. COMMIT PHASE ----
    - here first react renders everything into dom
    - then it executes everything that is stored in a batch, so
    FGC didMount
    FC didMount
    SGC didMount
    SC didMount
    P didMount
    🚀🚀🚀🚀🚀🚀🚀
-->

## key points🚀🔥🚀🔥

- DONT COMPARE lifecycle methods with useEffect❌❌❌
- useEffect is not using componentDidMount in backend🚀🚀

## purpose of componentWillUnmount

- sometimes we might have used setInterval, setTimeout in our componentDidMount, this is stay forever, since
it is a single page application. Even when we to other routes, the interval will again start.
- when we go that page again, it again starts a new interval😮😮
- so these intervals will keep running in background
- componentWillUnmount() is used to clearInterval()🚀🚀

## async componentDidMount works but async useEffect will not work why??

- useEffect always need to return a cleanup function🚀
- but when we add async to useEffect it assumes that it is going to return a promise🔥
- so in order to make first point work, we throw error when useEffect tries to return something
else, other than a cleanup function🔥🚀