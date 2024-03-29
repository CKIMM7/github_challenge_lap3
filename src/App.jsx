import React, { useRef, useCallback } from "react"
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Header from "./Pages/layouts/Header"
import Repo from "./Pages/Welcome";

import useGetRepos from "./api/useGetRepos";


function App() {

  const { isError, error } = useGetRepos();

  const searchArray = useSelector(state => state.cart.searchArray)

  const repos = searchArray.map((repo, i) => {
     return <Repo key={i} data={repo}></Repo>
  })


  const noRepo = <p>this user has no repo</p>
  console.log(searchArray.length)

return (
  <Routes>
    <Route path='/' element={<Header></Header>} >
    <Route index element={repos} ></Route>

    </Route>
  </Routes>
) 
}

export default App
