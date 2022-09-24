import { useEffect, useState } from "react";

function useFetch(url) {
    const[responseJSON,setResponseJSON] = useState(null);
    const[isLoading,setIsLoading] = useState(null);
    const[error,setError] = useState(null);

    useEffect(()=>{
        let shouldCancel = false;

        const callFetch = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(url);
                const newResponse = await response.json();

                if(shouldCancel) return;
                setResponseJSON(newResponse);
                setError(null);
            } 
            catch (newError) {
                if(shouldCancel) return;
                setError(newError);
                setResponseJSON(null);
            }
            setIsLoading(false);
        };
        callFetch();

        return ()=> (shouldCancel=true);
    },[url]);

    return {
        responseJSON,
        isLoading,
        error
    }
  }
  

export default useFetch;