import styles from '../Styles/FoodItem.module.css';

export default function FoodItem({food, setFoodId}){
    return <div class={styles.itemContainer}>
        <img src={food.image} alt={food.title} class={styles.itemImage}/>
        <div class={styles.itemImage}>
            <p class={styles.itemName}>{food.title}</p>
        </div>
        <div class={styles.buttonContainer}>
            <button onClick={(e)=> setFoodId(food.id)} class={styles.itemButton}>View Recipe</button>
        </div>
    </div>
}