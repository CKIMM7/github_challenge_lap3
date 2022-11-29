import React, { useRef, useCallback } from "react"
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Header from "./Pages/layouts/Header"

import axios from 'axios';

import Art from './Pages/Art'
import Arts from './Pages/Arts'
import Welcome from './Pages/Welcome'
import Artist from "./Pages/Artist";
import ArtTest from "./Pages/Art/ArtTest";
import ArtSearch from "./Pages/ArtSearch/ArtSearch";

import ArtsContent from "./Pages/Arts/ArtsContent";
import useGetArts from "./api/useGetArts";
import useGetRepos from "./api/useGetRepos";


function App() {

  const {
    isError,
    error,
    results,
} = useGetRepos()


return (
  <Routes>
    <Route path='/' element={<Header></Header>} >
    

    </Route>
  </Routes>
) 
}

export default App
