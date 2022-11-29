import { useState, useEffect } from "react";
import { getGitUserAxios } from "./gitAxios";
import { useSelector, useDispatch } from 'react-redux';
import { artsActions } from "../store/store";


const useGetRepos = () => {

    
    const [results, setResults] = useState([])
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState({})
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(artsActions.setIsLoading(true))
        setIsError(false)
        setError({})

        const controller = new AbortController();
        const { signal } = controller;
    
        getGitUserAxios()
        .then(data => { 
            console.log(data);
            setResults(data);

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

    }, [])

    return { isError, error, searchValue, results };
}

export default useGetRepos;
