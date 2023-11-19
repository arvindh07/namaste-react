import React from 'react'

const Shimmer = () => {
    return (
        <div className='md:w-5/6 mx-auto'>
            <div className="flex flex-col md:flex-row">
                <button className="bg-orange-400 px-2 py-1 mb-4 md:mr-6">Top Rated Restaurants</button>
                <button className="border-2 border-orange-400 px-2 py-1 ml:4 mb-4">Clear Filter  ❌</button>
            </div>
            <h2 style={{ margin: "1em 0 1em 0.6em", fontSize: "2.2em" }}>Best restaurants for you</h2>
            <div className="grid grid-cols-1 px-3 mx-auto mt-8 max-w-4/6 sm:grid-cols-2 sm:gap-x-4 sm:auto-rows-auto md:grid-cols-3 lg:grid-cols-4">
                <div className=" sm:max-w-3/6 h-52 bg-gray-300 rounded-md mb-4 "></div>
                <div className=" sm:max-w-3/6 h-52 bg-gray-300 rounded-md mb-4 "></div>
                <div className=" sm:max-w-3/6 h-52 bg-gray-300 rounded-md mb-4 "></div>
                <div className=" sm:max-w-3/6 h-52 bg-gray-300 rounded-md mb-4 "></div>
                <div className=" sm:max-w-3/6 h-52 bg-gray-300 rounded-md mb-4 "></div>
                <div className=" sm:max-w-3/6 h-52 bg-gray-300 rounded-md mb-4 "></div>
                <div className=" sm:max-w-3/6 h-52 bg-gray-300 rounded-md mb-4 "></div>
                <div className=" sm:max-w-3/6 h-52 bg-gray-300 rounded-md mb-4 "></div>
                <div className=" sm:max-w-3/6 h-52 bg-gray-300 rounded-md mb-4 "></div>
                <div className=" sm:max-w-3/6 h-52 bg-gray-300 rounded-md mb-4 "></div>
                <div className=" sm:max-w-3/6 h-52 bg-gray-300 rounded-md mb-4 "></div>
                <div className=" sm:max-w-3/6 h-52 bg-gray-300 rounded-md mb-4 "></div>
            </div>
        </div>
    )
}

export default Shimmer;