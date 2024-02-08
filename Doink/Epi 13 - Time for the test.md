# Epi 13 - Time for the test

## why do we need testing from ui

- testing itself a huge topic. There r wide varieties of testing. We r concerned abt development testing alone
- types of development testing:

1. manual testing -> just looking at scenario and testing manually
2. we can write code to test our app🚀

#### THING TO BE CONSIDERED: EVEN IF U WRITE A SINGLE LINE OF CODE, THAT MAY OR MAY NOT HAS THE POTENTIAL TO INTRODUCE A BUG ANYWHERE IN THE APP🔴🔴🔴

## types of testing that developer can do:

1. unit testing
2. integration testing
3. end to end testing a.k.a e2e testing

### unit testing(developers thing)

- basically it is testing in isolation
- we will be testing a unit of our app in isolation🚀🚀

## integration testing(developers thing)

- it does testing for components that interact with each other🚀
- let say, we have 20 hotels in our page and after searching pizza it gives us 3 hotels. We can able to test these
things. This is integration testing🚀🔥

## e2e testing

- it is obvio frm name, it is e2e testing from user entering the app and how user flows through the app🚀🔥
- it requires tools like cypress, puppeteer, selenium etc🔥🔥

- developers are solely responsible for unit and integration testing🔥🚀

## tools/libraries for testing

1. react-testing-library
- thr r react-testing-library, vue testing library etc 
- all these libraries were built on top off dom testing library🚀
- react-testing-library is a wrapper on dom-testing-library🚀
- create-react-app by default, it comes with react-testing-library

2. jest
- react-testing-library internally uses jest🚀
- it uses babel as a dependency
- so need to need install babel dependency for jest
- add some config for babel to align with jest

## does the config in babel for jest affect with the config we had for parcel?

- yes, it will create a conflict.
- solution: add config from parcel to overcome this.
- or to disable default babel transpilation

## jest configuration

- we need to setup our jest
- run npx jest --init
- it will ask for env, bcoz we need a env to test: 1.node 2. jsdom
- we will chose jsdom, which is more like a browser like env🚀
- then we need to install jsdom pkg

## to summarize the setup for testing:

- install react-testing-library
- install jest
- install babel dependencies
- configure babel for using jest
- modify config for babel in .parcelrc since parcel is using babel(no conflict should occur)
- initialize config for jest using npx jest --init
- jest will ask for jsdom(pkg) env, so install jsdom

## WRITING TEST CASES

- we can write our test cases in __tests__ folder or
- in ext like sum.test.js or sum.spec.js

### test()

- we can write test cases using test func
- test(description, cbFunc= how we will test)
- test("Sum function should calculate the sum of two numbers", () => {
    const result = sum(3,4)
    <!-- assertion -->
    expect(result).toBe(7)
})

### assertion

- it is something that we expect from the test
- if we dont expect means our test case will always pass bcoz here here thr is nthing to expect or assert🚀
- test("Sum function should calculate the sum of two numbers", () => {
    const result = sum(3,4)
    <!-- assertion -->
    expect(result).toBe(7)
})

## Testing react components

- to test our component, first we need to render that component into our jsdom env
- we hav smethiong called a screen, whr we get our elements that is rendered🔥
- thn write the assertion of having a element in that component
- eg, assert heading in contact component
test("render contact component", () => {
    render(<Contact />)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

### jsx error🔴

- now, if we run our test, it will throw an error saying jsx isnt currently enabled
- our env doesnt knw wht is jsx, so we need a preset react for this
- install preset react and configure babel file
- ["@babel/preset-react", { runtime: "automatic" }]
- it converts our jsx into html for test

### jest dom pkg error🔴

- if we run test, it will again throw error, saying toBeInTheDocument() is not function
- we need help of another pkg called @testing-library/jest-dom
npm i -D @testing-library/jest-dom
import "@testing-library/jest-dom"
- above line, will impor teverything and provides us a suggestion as well

⭐ Test btn loading in contact component
⭐ Load input name in contact component
⭐ check three input boxes are there in contact component

## GetAll methods

- these methods will return an array of react elements, which is just an js object🟢

## not

- expect(inputBoxes.length).not.toBe(3)

## Blocks of react testing

- render
- querying
- assert

## describe

- whn our test cases goes large in number we can club or group ou test cases using describe🔥
- syntax
describe("test contact component", () => {
    <!-- test 1 -->
    <!-- test 2 -->
    <!-- etc -->
})

## it 

- it is just an alias for test
describe("test loading all components", () => {
    it("should load three input boxes", () => {
        <!-- logic -->
    })
})

## test header component

⭐ load header with login btn
1. throws an error, saying useSelctor or redux context is to be provided here🔴
- our jsdom will understand jsx(using preset) and react. But it will not knw the redux part bcoz thr is no
such that thing in that env
- solution is to wrap it with a provider redux with a store🟢
2. again throws an error, this time it is in <Link>🔴
- as u guessed it also doesnt knw react router dom
- solution is to wrap it with a browserrouter

## GetByRole option params

- we can also write,
const btn = screen.getByRole("button", { name: "Login" });

⭐ should render header with cart items zero
⭐ should render header with name cart, no matter hw many items it has(hint - use regex)

## fireEvent

- we can simulate a click event or any other event using this fireEvent🚀🔥
- fireEvent.click(loginBtn)
⭐ loginBtn should chnage to logout btn after click

## test restaurant card with props

⭐ should render res card with hotel name(use mock data)
⭐ should render hoc best selling label

## renderHook

- we can render our custome hooks as well using renderHook

## Integration testing

- now we will test components that interacts with each other🔥🚀
⭐ Test search functionality, on initial render => body has 20 hotels and aftr search text burger it should only 
show 3 hotels with burger name in it or show hotels that has name burger in it
Err -> in fetch keyword
- remember fetch is a super power provided by browser not js. It works only in browsers
- so our jsdom env whr we executingtest cases will not have this fetch feature
- so we kinda need to mimic the fetch function
- we will replace our global fetch function
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data);
        }
    })
})

## watch test

- we can watch for files that has test cases and it automatically re runs the coverage
- watch-jest: "jest --watch"

## act()

- whnevr thr is an state update, we need to wrap our render inside act
- act return a promise so use async await
it("test search", async () => {
    await act(async() => render(<Body />))
})

## getting elements by test id

- we can get elements using testid
- in actual code, data-testid="searchInput"
- in our test file, const btn = screen.getByTestId("searchInput")

## mimicing the event e

- while trying to change input in field, we kinda need to mimic the e
fireEvent.change(searchInput, { target: { value: "burger" }})

## before and after utility cb functions

- beforeAll, beforeEach, afterAll, afterEach are some callback functions we can use it in describe
describe("", () => {
    beforeAll(() => {
        log(before all);
    })
})
- used to do some cleanup functions

⭐ test the cart flow
    - should open accordion
    - should contain the num of food items in that particular accordion
    - by adding, cart items should be one
    - by adding 2nd time, cart items should be two
    - clear cart and should show crt num of food items
    - should display cart is empty

## how to see coverage🔥🔥

- we can see coverage by opening the index.html located in coverage folder with live server🔥🚀
- that shows wht all covered and wht not🚀

⭐ bring the coverage to 100%🚀🚀