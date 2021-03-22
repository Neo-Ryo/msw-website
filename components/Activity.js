import styles from './style/Activity.module.css'

export default function Activity({ icon, desc, text, color }) {
    return (
        <div className={styles.wrapper}>
            <img className={styles.icon} src={icon} alt={desc} />
            <p style={{ color: { color } }}>{text} </p>
        </div>
    )
}
