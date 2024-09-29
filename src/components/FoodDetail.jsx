import { useEffect } from "react"


export default function FoodDetail({ foodId }){
    console.log(`id changed ${foodId}`);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const ApiKey = "e20d2123e8ec44829dba0ec36a1c61c3"
    useEffect(()=>{
        console.log(`id changed ${foodId}`);
        async function fetchFoodDetails(){
            const response = await fetch(`${URL}?apiKey=${ApiKey}`);
            const foodData = await response.json();
            console.log(foodData);
        }
        fetchFoodDetails();
    },[foodId]);
    return <div> {foodId}</div>
}