import React, { useRef, useCallback } from "react"
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Header from "./Pages/layouts/Header"

import axios from 'axios';
import useGetRepos from "./api/useGetRepos";


function App() {

  const { isError, error, results } = useGetRepos() 
  const userReposArray = useSelector(state => state.cart.userRepos)
  console.log(userReposArray);

return (
  <Routes>
    <Route path='/' element={<Header></Header>} >
    

    </Route>
  </Routes>
) 
}

export default App
