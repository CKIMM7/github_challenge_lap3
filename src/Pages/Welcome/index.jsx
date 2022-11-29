import React from "react";
import { useParams , NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const Repo = (data) => {

    console.log(data.data.name);
    const isError = useSelector((state) => state.cart.isError);
    const error = useSelector((state) => state.cart.error);

    return(
        <div>
            <p>repo name: {data.data.name}</p>
            <p>owner: {data.data.owner.login}</p>
            <p>stargazer count:{data.data.stargazers_count}</p>
            <p>visibility: {data.data.visibility}</p>
            <img src={data.data.owner.avatar_url}></img>
        </div>
    )
}

export default Repo
