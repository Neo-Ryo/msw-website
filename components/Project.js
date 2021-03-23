import styles from './style/Project.module.css'

export default function Projects({ image, title, desc, link, action }) {
    return (
        <div className={styles.wrapper}>
            <a href={link} target="_blank">
                <img className={styles.img} src={image} alt={title} />
            </a>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.desc}>{desc}</p>
            <p className={styles.action}>{action}</p>
        </div>
    )
}
