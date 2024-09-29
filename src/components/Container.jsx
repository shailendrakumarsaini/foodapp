import styles from '../Styles/Container.module.css'

export default function Container({children}){
    return <div class={styles.parentContainer}>{children}</div>
}