import styles from './style/PrestaCard.module.css'

export default function PrestaCard({ icon, descriptionIcon, text, bbColor }) {
    return (
        <div className={styles.wrapper}>
            <img src={icon} alt={descriptionIcon} />
            <p>{text}</p>
        </div>
    )
}
