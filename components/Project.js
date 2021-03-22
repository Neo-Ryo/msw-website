import styles from './style/Project.module.css'

export default function Projects() {
    return (
        <div className={styles.wrapper}>
            <iframe
                id="inlineFrameExample"
                title="Inline Frame Example"
                width="300"
                height="200"
                src="https://www.exya-conciergerie.com"
            ></iframe>
        </div>
    )
}
