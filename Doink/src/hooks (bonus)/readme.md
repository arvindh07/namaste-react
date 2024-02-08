# react hooks

- useState and useEffect are the most important hooks🚀

## useMemo

- it is used to cache the result of a calculation between re renders🔥
- usually if the calculation is expensive, we will go for this🚀
- eg of such heavy operations are nth prime🚀
- useMemo returns the cached value
- const cachedResult = useMemo(expensive function, deps)

## useCallback

- very much similar to useMemo bt instead the caching the result it will cache the function
- const cachedFn = useCallback(function, deps)

## diff bw local variable, state variable, ref variable

#### local variable

- on changing the variable value, if a rerender happens, local variable will be initialized back to its initial value
- on change of this value, it wont trigger a rerender
- as we knw, EOD it is just an function, every a function called, a new execution and memory context is created🚀

#### state variable

- its core job is to persist the variable value between rerenders
- on change of this value, it triggers a rerender

#### ref variable

- on change of this value, it wont trigger a rerender but if a rerender happens(due to some other state change) it will show the persisted value on the DOM🚀