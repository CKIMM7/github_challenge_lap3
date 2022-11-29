import React from "react";
import { useParams , NavLink, Outlet, useLocation, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { artsActions } from "../../../store/store";
import LoadingSpinner from "../../LoadingSpinner";
import SearchForm from "../../Forms";

const Header = () => {
    const { name } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.cart.isLoading);

    const textInput = useSelector((state) => state.cart.textInput);

    const isError = useSelector((state) => state.cart.isError);
    const error = useSelector((state) => state.cart.error);
    
    console.log(isError)

    let displayError =  <>
    <h1>error message:</h1>
    <p>{error.message}</p>
    <p>put in the right user name</p>
  </>


    return( 
        <>
          <nav id='nav'>  

        <SearchForm />
           </nav>
        <br />
        <br />
        
        {!isError && <Outlet />}
        {isError && displayError}
        {isLoading && textInput && <LoadingSpinner />}
    </>
    )
}

export default Header
