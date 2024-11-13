import styles from './Header.module.sass';
import {Button} from "../Button/Button";


export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <div className={styles.header__contacts}>
                    <span className={styles.header__contacts_phone}>+7 925 343 16 96</span>
                    <span className={styles.header__contacts_callback}>Перезвоните мне</span>
                </div>
                <div className={styles.header__brand}>
                    <div className={styles.header__brand_name}>FAMFACTORY</div>
                    <div className={styles.header__brand_description}>ШВЕЙНАЯ ФАБРИКА</div>
                </div>
                <div className={styles.header__email}>
                    <span className={styles.header__email_address}>MAIL@FAMFACTORY.RU</span>
                    <span className={styles.header__email_description}>Наша почта</span>
                </div>
                <div className={styles.header_title}>
                    <h1 className={styles.title}>Сделано <br/> в Санкт-Петербурге</h1>
                    <div className={styles.header__button}>
                        <Button/>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </header>
    )
}