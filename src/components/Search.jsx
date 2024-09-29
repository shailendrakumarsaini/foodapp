import { useState, useEffect } from "react";
import styles from '../Styles/Search.module.css';


export default function Search({foodData, setFoodData}){
    const [query, setQuery] = useState("Pizza");
    const URL = "https://api.spoonacular.com/recipes/complexSearch";
    const ApiKey = "e20d2123e8ec44829dba0ec36a1c61c3"

    useEffect(()=>{
        async function fetchFood(){
            try{
                const response = await fetch(`${URL}?query=${query}&apiKey=${ApiKey}`);
                const data = await response.json()
                setFoodData(data.results);
                console.log(data.results);
            } catch(err){
                console.log(err);
            }
        }
        fetchFood();
    },
    [query]);
    return <div class={styles.searchContainer}>
        <input onChange={(e)=>setQuery(e.target.value)} value={query} class={styles.input} type="text"/>
    </div>
}