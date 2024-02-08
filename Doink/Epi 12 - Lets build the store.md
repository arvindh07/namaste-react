# Epi 12 - Lets build the store

## task - find diff bw these:
- onClick={handleClick} -> it works with no arg
- onClick={() => handleClick(item)} -> it works whn we hav arg
- onClick={handleClick(item)} -> it implies that function is already called

## little history of redux

- earlier, we cant directly mutate the state like we do now
- consider,
reducers: {
    addItems: (state, action) => {
        state.cart.push(action.payload)
    }
}
- above code, will not work before❌bcoz in redux we should mutate the store directly🚀
- earlier we used to deep copy the store and return a new state, like below
reducers: {
    addItems: (state, action) => {
        const newState = {...state};
        newState.cart.push(action.payload)
        return newState;
    }
}
- and return is mandatory in earlier redux✅
- now, with rtk we can mutate the state and redux will do the above step in backend with the help of immer🚀🚀
- immer is pkg to mutate the obj without changing the original obj🚀🚀
- simple flow of immer:
currentState -> makeDraft(our new changes will b here on top of current) -> nextState(produced by immer which
will contain the currentState + newChange)

## why redux is making its state as immutable🚀🚀🚀

- as we knw, in order trigger a rerender, we will need to compare objects at deep level, basically we 
need to an deep comparison
- imagine a large scale application, with a huge data, doing a deep comparison for every or for every minute 
event is a huge optimization prblm🔴
- imagine if we could do shallow comparison or check the obj at first level, if it is different trigger a 
rerender else not✅
- so if u r changing the same obj and doing a shallow comparison, it would be always true since we r mutating 
the same obj(same reference)
- thats y we r forcing immutability in state🔥🔥
- if it is immutable, our old obj and new obj will be of different reference, so doing a shallow comparison would
work here🚀🚀

### read more about diff bw mutate and reassigning the obj and current in redux??🔴🔴

## extra - reassignment and mutation

- reassignment -> 
1. let name = "arvindh"
name = "leo"✅
log(name) => "leo"
2. const name = "arvindh"
name = "leo"❌cant assign to a constant variable

- mutating -> 
1. let obj = { name: "arvindh" }
obj.name = "leo"✅
log(obj) => { name: "leo" }
2. const obj = { name: "arvindh" }
obj.name = "leo"
log(obj) => { name: "leo" }

#### why both worked?

- bcoz here we r not reassigning a varibale bt just mutating the variable🚀🚀
- mutate - changign the value of object🔥🔥
- understanding of heap and stack will help here🔥🚀