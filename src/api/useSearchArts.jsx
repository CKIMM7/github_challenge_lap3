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
    const pageNum = useSelector((state) => state.cart.pageNum);

    useEffect(() => {
        dispatch(artsActions.setIsLoading(true))
        setIsError(false)
        setError({})

        const controller = new AbortController();
        const { signal } = controller;

    
        getArtsAxios(pageNum, signal, searchValue)
        .then(data => { 
            //console.log(searchValue)
           // console.log(data)
            dispatch(artsActions.setSearchArray(data.data))
            dispatch(artsActions.setIsLoading(false))
        })
        .catch((err)=> {
            dispatch(artsActions.setIsLoading(false))
            //signal.aborted happens when controller.abort() gets called
            //by the user therefore do not need to return the err msg
            if(signal.aborted) return;
            setIsError(true)
            setError({ message: err.message })
        })


        return () => controller.abort();    

    }, [searchValue])

    return { isError, error, searchValue };
}

export default useSearchArts;
