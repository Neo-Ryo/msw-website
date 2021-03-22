import styles from './style/Activity.module.css'

export default function Activity({ icon, desc, text, colorText }) {
    return (
        <div className={styles.wrapper}>
            <img className={styles.icon} src={icon} alt={desc} />
            <p className={styles.text} style={{ color: colorText }}>
                {text}{' '}
            </p>
        </div>
    )
}
