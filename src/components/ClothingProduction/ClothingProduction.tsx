import styles from './ClothingProduction.module.sass'
import prod1 from '../../images/productions/prod1.jpg'
import prod2 from '../../images/productions/prod2.jpg'
import prod3 from '../../images/productions/prod3.jpg'


export const ClothingProduction = () => {
    return (
        <section className={styles.ClothingProductionContainer}>
            <div className={styles.contentProduction}>
                <h2>
                    Производство одежды <br/>
                    для компаний, брендов, <br/>
                    артистов
                </h2>
                <p>
                    Наша команда по разработке и производству одежды может реализовать проекты любой сложности,
                    независимо от их масштаба. Мы можем взять на себя всю работу под ключ,
                    или решить конкретные задачи на любом из этапов производства.
                </p>
                <div className={styles.listProduction}>
                    <ul>
                        <li>
                            <figure>
                                <img src={prod1} alt="Разработка лекал для швейного производства" width="351"
                                     height="348"/>
                                <figcaption>Разработка лекал <br/> и дизайна
                                    <div className={styles.description}>Поможем создать уникальные лекала для вашей
                                        одежды
                                        или адаптировать уже имеющиеся.
                                        Разработаем индивидуальный дизайн ваших товаров</div>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={prod2} alt="Процесс пошива одежды на швейной машине" width="351"
                                     height="348"/>
                                <figcaption>Пошив одежды <br/>
                                    на заказ
                                    <div className={styles.description}>Пошив трикотажных изделий любой сложности и в
                                        любых объемах, как по вашим образцам, так и по нашим базовым лекалам</div>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={prod3} alt="Готовая одежда на вешалках в шоуруме" width="351" height="348"/>
                                <figcaption>Бренд одежды <br/>
                                    под ключ
                                    <div className={styles.description}>Поможем разработать линейку одежды для вашего
                                        бренда, от пошива до реализации.</div>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}