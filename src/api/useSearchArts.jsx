import { useState, useEffect } from "react";
import axios from 'axios'
import { getArtsAxios } from "./axios";
import { useSelector, useDispatch } from 'react-redux';
import { artsActions } from "../store/store";
import { useNavigate } from "react-router-dom";

const useSearchArts = () => {

    const navigate = useNavigate()
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState({})


    const dispatch = useDispatch()

    const searchValue = useSelector((state) => state.cart.searchValue);
    const textInput = useSelector((state) => state.cart.textInput);
    const pageNum = useSelector((state) => state.cart.pageNum);

    useEffect(() => {
        dispatch(artsActions.setIsLoading(true))
        setIsError(false)
        setError({})

        const controller = new AbortController();
        const { signal } = controller;

        function callGitHub () {

        axios.get(`https://api.github.com/users/${textInput}/repos`)
        .then(data => { 
  
            console.log(data)
            dispatch(artsActions.setSearchArray(data.data))
            dispatch(artsActions.setIsLoading(false))
            dispatch(artsActions.setIsError(false))
        })
        .catch((err)=> {
            console.log(err)
            dispatch(artsActions.setIsLoading(false))
            //signal.aborted happens when controller.abort() gets called
            //by the user therefore do not need to return the err msg
            if(signal.aborted) return;
            dispatch(artsActions.setIsError(true))
            dispatch(artsActions.setError({ message: err.message }))
        })
    }

        const timeOutId = setTimeout(() => {
            if(!textInput) {
            
            //init all
            dispatch(artsActions.setSearchArray([]))
            dispatch(artsActions.setIsLoading(false))
            dispatch(artsActions.setIsError(false))  

            } else {
            callGitHub()
            }

        }
        , 1000);


        return () => { 
            console.log('comp unmount')

            clearTimeout(timeOutId);}    

    }, [textInput])

    return { isError, error, searchValue };
}

export default useSearchArts;
