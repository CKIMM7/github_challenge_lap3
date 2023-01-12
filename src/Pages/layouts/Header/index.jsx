import React from "react";
import { useParams , NavLink, Outlet, useLocation, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { artsActions } from "../../../store/store";
import LoadingSpinner from "../../LoadingSpinner";
import SearchForm from "../../Forms";
import github_logo from '../../../../assets/github_logo.png'

const Header = () => {
    const { name } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.cart.isLoading);

    const textInput = useSelector((state) => state.cart.textInput);

    const isError = useSelector((state) => state.cart.isError);
    const error = useSelector((state) => state.cart.error);
    
    const searchArray = useSelector(state => state.cart.searchArray)

    console.log(searchArray.length)

    let displayError =  <>
    <h1>error message:</h1>
    <p>{error.message}</p>
    <p>put in the right user name</p>
  </>

  console.log(textInput)

  let content = searchArray.length === 0 && textInput && !isLoading ? <h1>no repos for this user</h1> :  <Outlet /> 


    return( 
        <>
        <h1>GITHUB REPO SEARCH ENGINE</h1>
          <nav id='nav'>  
        <SearchForm />
           </nav> 
        {!textInput && !isLoading && <img src='https://student-server-bucket.s3.amazonaws.com/github_logo.png' /> }
        {!isError && content}
        {isError && displayError}
        {isLoading && textInput && <LoadingSpinner />}
    </>
    )
}

export default Header
