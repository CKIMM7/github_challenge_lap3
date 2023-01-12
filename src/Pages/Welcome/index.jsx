import React from "react";
import { useParams , NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { FaBeer } from 'react-icons/fa';
import { VscAccount } from "react-icons/vsc";

const Repo = (data) => {
    
    const isError = useSelector((state) => state.cart.isError);
    const error = useSelector((state) => state.cart.error);

    return(
        <div>

            <h1 id="repo-container">repo name:  {data.data.name}</h1>
                <div id="img"> 
                <img src={data.data.owner.avatar_url} width="400" height="400"></img>
                    <p><VscAccount />{data.data.owner.login}</p>
                    <p>stargazer count:{data.data.stargazers_count}</p>
                    <p>visibility: {data.data.visibility}</p>
                    <a href={data.data.html_url} target="_blank">Check It Out</a>

                </div>
        </div>
    )
}

export default Repo
