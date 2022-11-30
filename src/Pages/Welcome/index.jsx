import React from "react";
import { useParams , NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const Repo = (data) => {
    
    const isError = useSelector((state) => state.cart.isError);
    const error = useSelector((state) => state.cart.error);

    return(
        <div>
            <img src={data.data.owner.avatar_url}></img>
            <h1 id="repo-container">repo name:  {data.data.name}</h1>
            <p>owner: {data.data.owner.login}</p>
            <p>stargazer count:{data.data.stargazers_count}</p>
            <p>visibility: {data.data.visibility}</p>            
            <p>git clone url: {data.data.clone_url}</p>
        </div>
    )
}

export default Repo
