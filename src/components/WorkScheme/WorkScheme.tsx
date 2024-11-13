import styles from './WorkScheme.module.sass'
import work1 from "../../images/schemeWorks/work1.png";
import work2 from "../../images/schemeWorks/work2.png";
import work3 from "../../images/schemeWorks/work3.png";
import work4 from "../../images/schemeWorks/work4.png";

export const WorkScheme = () => {
    return (
        <section className={styles.workSchemeContain}>
            <div className={styles.content}>
                <h2>
                    Схема работы с нами
                </h2>
                <p>
                    К каждому проекту мы подходим индивидуально. Свяжитесь с нами и мы поможем <br/> реализовать ваши
                    идеи.
                </p>
                <div className={styles.schemeList}>
                    <ul>
                        <li>
                            <figure>
                                <img src={work1} alt="Личная консультация"/>
                                <figcaption>Отправляете заявку или звоните +7 (911) 109-97-07</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={work2} alt="Производство одежды"/>
                                <figcaption>Разрабатываем лекала и шьём образец</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={work3} alt="Производственные процессы"/>
                                <figcaption>Шьём тираж и наносим принт или вышивку</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={work4} alt="Быстрая доставка товаров"/>
                                <figcaption>Упаковываем
                                    и отгружаем партию
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}