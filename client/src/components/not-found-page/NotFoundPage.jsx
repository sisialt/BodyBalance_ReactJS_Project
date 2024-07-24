import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
    return (
        <>
            <div className={styles['not-found']}>
                <h2 className="text-center mb-4 h2 semi-bold-600 py-5"><i className={`bx-fw bx bx-meh-alt bx-xs ${styles['sad']}`}></i><br />404 <br />Page not found</h2>
                <p className={styles.text}>The Page you are looking for doesn't exist.</p>
            </div>
        </>
    );
}