import styles from './PricesPage.module.css';

export default function PricesPage() {
    return (
        <>
            <div>
                <h1 className={styles.heading}>Prices</h1>
                <div className={`container ${styles['container-two-plans']}`}>

                    <div className={styles['plan']}>
                        <p><strong>One training</strong></p>
                        <p className={styles['price']}>BGN 8</p>
                    </div>

                    <div className={styles['plan']}>
                        <p><strong>One month</strong></p>
                        <p className={styles['price']}>BGN 50</p>
                    </div>

                    <div className={styles['plan']}>
                        <p><strong>One year</strong></p>
                        <p className={styles['price']}>BGN 400</p>
                    </div>

                </div>
            </div>
        </>
    );
}