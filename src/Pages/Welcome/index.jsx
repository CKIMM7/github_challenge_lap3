import React from "react";
import { useParams , NavLink, Outlet } from 'react-router-dom'

const Repo = (data) => {

    console.log(data.data.name);
    return(
        <div>
            <h1>repo name</h1>
            <h1>{data.data.name}</h1>
        </div>
    )
}

export default Repo
