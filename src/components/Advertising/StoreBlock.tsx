import styles from './AdvertisingBlock.module.sass'
import shop1 from '../../images/shops/shop1.jpg'
import shop2 from '../../images/shops/shop2.jpg'


export const StoreBlock = () => {
    return (
        <div className={styles.storeBlock}>
            <div className={styles.storeHeader}>
                <h2>Магазины <br/> в самом в центре Питера <br/> и Москвы</h2>
                <p>Мы можем организовать реализацию вашего товара, не только в онлайне, но и в наших розничных
                    магазинах.</p>
            </div>
            <div className={styles.storeContent}>
                <div className={styles.storeItem}>
                    <img src={shop1} alt="Магазин в Санкт-Петербурге"/>
                    <p className={styles.addressShopMSK}>Санкт-Петербург<br/>Лиговский проспект 64</p>
                </div>
                <div className={styles.storeItem}>
                    <img src={shop2} alt="Магазин в Москве"/>
                    <p className={styles.addressShopSPB}>Москва<br/>Петровский бульвар 9</p>
                </div>
            </div>
        </div>
    )
}