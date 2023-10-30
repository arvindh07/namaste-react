import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className='container error'>
            <h3>Oops!!</h3>
            <p>Something went wrong!!</p>
            <p><i>{err.status}: {err.statusText}</i></p>
        </div>
    )
}

export default Error