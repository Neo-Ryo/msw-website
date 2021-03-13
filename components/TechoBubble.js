import styles from './style/TechnoBubble.module.css'

export default function TechoBubble({ icon, desc, text }) {
    return (
        <div className={styles.wrapper}>
            <img src={icon} alt={desc} />
            <p>{text}</p>
        </div>
    )
}
