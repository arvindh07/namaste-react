import React, { useMemo, useRef, useState } from 'react'
import { findNthPrime } from './helper';

const Hooks = () => {
    const [number, setNumber] = useState(0);
    const [darkMode, setDarkMode] = useState(true);
    // expensive function
    const prime = () => {
        console.log("expensive function...");
        return findNthPrime(number)
    };
    // memoized function
    const cachedResult = useMemo(() => findNthPrime(number), [number]);
    console.log("rendering...");

    return (
        <div className={`border-[15px] border-black rounded-md p-4 mb-4 ${darkMode ? "bg-black text-white" : ""}`}>
            <input
                className="border-2 border-black p-2 text-xl rounded-md"
                style={{ color: "black" }}
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))} />
            {/* <h2 className='mt-7 pt-4'>Nth prime: {prime()}</h2> */}
            <h2 className='mt-7 pt-4'>Nth prime: {cachedResult}</h2>

            <button className='p-3 bg-rose-600'
                style={{ backgroundColor: "red", padding: "10px", marginBlock: "20px" }}
                onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
        </div>
    )
}

const Variables = () => {
    let localVariable = 0;
    const [stateVariable, setStateVariable] = useState(0);
    const refVariable = useRef(0);
    return (
        <div>
            <div className='border-2 border-black flex my-2'>
                <button 
                    className='bg-black text-white p-2'
                    onClick={() => {
                    localVariable = localVariable + 1;
                    console.log("local", localVariable);
                }}>Increase</button>
                <h1>Local Variable: {localVariable}</h1>
            </div>
            <div className='border-2 border-black flex my-2'>
            <button 
                className='bg-black text-white p-2'
                onClick={() => {
                    setStateVariable(stateVariable + 1);
                }}>Increase</button>
                <h1>State Variable: {stateVariable}</h1>
            </div>
            <div className='border-2 border-black flex my-2'>
            <button 
                className='bg-black text-white p-2'
                onClick={() => {
                    refVariable.current = refVariable.current + 1;
                    console.log("ref", refVariable);
                }}>Increase</button>
                <h1>Ref Variable: {refVariable.current}</h1>
            </div>
        </div>
    )
}

export default Variables;