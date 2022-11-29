import React from "react";
import { useParams , NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const Repo = (data) => {

    console.log(data.data.name);
    const isError = useSelector((state) => state.cart.isError);
    const error = useSelector((state) => state.cart.error);

    if(isError) {
        return <p>try another repo</p>
    }

    return(
        <div>
            <h1>repo name</h1>
            <h1>{data.data.name}</h1>
        </div>
    )
}

export default Repo
