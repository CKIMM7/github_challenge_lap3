import React from "react";
import { useParams , NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const Repo = (data) => {
    
    const isError = useSelector((state) => state.cart.isError);
    const error = useSelector((state) => state.cart.error);

    return(
        <div>
            <h1 id="repo-container">repo name:  {data.data.name}</h1>
                <div id="img">
                    <p>owner: {data.data.owner.login}</p>
                    <p>stargazer count:{data.data.stargazers_count}</p>
                    <p>visibility: {data.data.visibility}</p>
                    <img src={data.data.owner.avatar_url} width="400" height="400"></img>
                </div>
        </div>
    )
}

export default Repo
