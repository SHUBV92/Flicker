import React from 'react';


const UserProfile = (props) => { 
    return ( 
        <div>
            <h1>Your Profile</h1>
            <p>Name: {props.name}</p>
            <p>{props.name}</p>
            <Link>
            Your Orders
            </Link>
        </div>
    )
}

export default UserProfile; 
