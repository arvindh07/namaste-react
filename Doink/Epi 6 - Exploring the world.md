# Epi 6 - Exploring the world

## monolith architecture

- traditionally, web apps are developed using architecture.
- means it contains all the code logic like api, ui, auth, db and sms etc.
- means everything written using a single tech stack.
- for eg: if u take java, api is written in java, ui is written in jsp etc.
- all these code will be in one place.🚀

### drawbacks of monolith

- if u wanna make a single simple change like change color of a btn. You need to
  build the whole large app and deploy the whole app.🤦‍♂️

## microservices architecture

- our whole large app is breaken into smaller services.
- unlike our monolith where all api, ui, auth, db, sms etc are in one service, in
  microservices all these are separated into individual microservices.
- these microservices will talk to other microservices based on their need.🔥
- and individual microservices can use diff tech stack🚀🚀
- for eg: api can use java, ui can use js, db can use py.
- this is known as separation of concern (or) single responsibility principle.

## how do these microservices interact with each other

- like our local app is running on 1234 port, same way we can deploy backend
  in say 1000, ui in 2000, sms in 3000.
- these port numbers will get mapped into domain name.
- for eg: backend as a.com/api, ui as a.com, sms as a.com/sms.🚀🚀

## feature - lets call api from our project

### two ways

1. page load -> api(waits to get response) -> render
2. page load -> render -> api(waits to get response) -> render

- above two, second approach is we r gonna use in react and it provides better UX.
- y better UX? bcoz in first approach, we dont see the ui until the api gets response. Basically,
  u see nthing on page load and see evrything on api response.
- in second, it will be good ux.

## is re render a performance prblm?

- nope. react has the best optimized re render mechanism and it is fast as well.

## useeffect hook

- it runs aftr a component is rendered.🚀🚀
- whn our codes, it sees a useeffect and has a callback function, so aftr the component
  is rendered, the callback function will run.

## cors - cors origin request sharing

- whn we try to hit swiggy api in our project, we got a cors error.
- who causes this err? - browser blocks the call from localhost to swiggy.com due to
  difference in origin.
- we can bypass this cors error using extension.
- first client makes a preflight request to server
- server send response with additional http headers like Access-Control-Allow-Origin: \* (or) specific domain
  like google.com
- process:

1. origin A ➡ preflight ➡ origin B
2. origin A ⬅ options ⬅ origin B
3. origin A ➡ POST ➡ origin B

## is spinner a good way of showing loading state?

- Nope😮
- Shimmer ui is current industry practice🚀🚀
- it mimics the layout and shape of content that will eventually appear🔥
- shimmer ui provides a better ux bcoz in case of spinner, u first see just a spinner
  and aftr loading completes, we see so much of content which might cause pain in our eyes😒
- whereas in case of shimmer ui, u will see a actual page layout bt without the actual data,
  in this way, u knw wht is going to come🔥🚀

## why state variables instead of js variables?

- whn we update normal js variables, we kinda need a way to refresh/rerender the ui
- thats y we hav a react state variables, which takes care of the rerender🔥
- it provides a way for react to track the updated values

## change input box value with state variables

- whn u just bind the state variable and the inputbox, it will not work, bcoz the state variable 
is not getting changed.
- eg: 
    -> const [text, setText] = useState("")
    -> <input value={text} />
- in order to make it work, we need to setText on change.

#### whnevr state variable changes, react triggers a reconcilation cycle(re-renders the component)🚀🚀
