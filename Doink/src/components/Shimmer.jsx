import React from 'react'

const Shimmer = () => {
    return (
        <div className='app__body'>
            <div className="feature shimmer">
                <button className="filter shimmer">Top Rated Restaurants</button>
                <button className="clear shimmer">Clear Filter  ❌</button>
            </div>
            <h2 style={{ margin: "1em 0 1em 0.6em", fontSize: "2.2em" }}>Best restaurants for you</h2>
            <div className="restro__container">
                <div className="restro__card shimmer"></div>
                <div className="restro__card shimmer"></div>
                <div className="restro__card shimmer"></div>
                <div className="restro__card shimmer"></div>
                <div className="restro__card shimmer"></div>
                <div className="restro__card shimmer"></div>
                <div className="restro__card shimmer"></div>
                <div className="restro__card shimmer"></div>
                <div className="restro__card shimmer"></div>
                <div className="restro__card shimmer"></div>
                <div className="restro__card shimmer"></div>
                <div className="restro__card shimmer"></div>
            </div>
        </div>
    )
}

export default Shimmer;