import styles from './Collaboration.module.sass'
import model1 from '../../images/influencers/model1.png'
import model2 from '../../images/influencers/model2.png'
import model3 from '../../images/influencers/model3.png'
import model4 from '../../images/influencers/model4.png'
import model5 from '../../images/influencers/model5.png'
import model6 from '../../images/influencers/model6.png'
import model7 from '../../images/influencers/model7.png'
import model8 from '../../images/influencers/model8.png'
import model9 from '../../images/influencers/model9.png'
import {Button} from "../Button/Button";

export const Collaboration = () => {
    return (
        <>
            <section className={styles.collaborationBlock}>
                <div className={styles.content}>
                    <h2>
                        Наши коллаборации
                    </h2>
                    <p>
                        С нами уже самые топовые инфлюенсеры.
                    </p>
                    <div className={styles.gridContainer}>
                        <img src={model1} alt="Image 1"/>
                        <img src={model2} alt="Image 2"/>
                        <img src={model3} alt="Image 3"/>
                        <img src={model4} alt="Image 4"/>
                        <img src={model5} alt="Image 5"/>
                        <img src={model6} alt="Image 6"/>
                        <img src={model7} alt="Image 7"/>
                        <img src={model8} alt="Image 8"/>
                        <img src={model9} alt="Image 9"/>
                    </div>
                </div>
                <footer className={styles.footer}>
                    <div className={styles.footer__content}>
                        <div className={`${styles.footer__contacts} ${styles.footer__item1}`}>
                            <span className={styles.footer__contacts_phone}>+7 925 343 16 96</span>
                            <span className={styles.footer__contacts_callback}>Перезвоните мне</span>
                        </div>
                        <div className={`${styles.footer__brand} ${styles.footer__item2}`}>
                            <div className={styles.footer__brand_name}>FAMFACTORY</div>
                            <div className={styles.footer__brand_description}>ШВЕЙНАЯ ФАБРИКА</div>
                        </div>
                        <div className={`${styles.footer__email} ${styles.footer__item3}`}>
                            <span className={styles.footer__email_address}>MAIL@FAMFACTORY.RU</span>
                            <span className={styles.footer__email_description}>Наша почта</span>
                        </div>
                        <div className={`${styles.footer__button} ${styles.footer__item4}`}>
                            <Button/>
                        </div>
                    </div>
                </footer>
            </section>

        </>
    )
}