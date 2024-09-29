import styles from '../Styles/InnerContainer.module.css';

export default function InnerContainer({children}){
    return <div class={styles.innerContainer}>{children}</div>
} 