import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchDefinition(word){
    const [info, setInfo] = useState()
    
    useEffect(() => {
        async function fetchDefinition(){
            let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            try{
                let response = await axios.get(url)
                setInfo(response.data)
            }
            catch(err){
                console.log("Error fetching data:", err)
            }
        }

        fetchDefinition()
        
    }, [word])

    return info
} 