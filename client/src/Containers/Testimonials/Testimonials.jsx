import React from 'react'

const Testimonials = () => {
    return(
        <div>
            <h1>Testimonials</h1>
            <p>Name:{props.user}</p>
            <p>Message:{props.message}</p>
        </div>
    )
}
export default Testimonials;