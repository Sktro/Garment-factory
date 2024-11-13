import styles from './Price.module.sass'
import hoodie from '../../images/price/hudi.jpg'
import t_shirts from '../../images/price/futbolka.jpg'
import sweatshirt from '../../images/price/svitshot.jpg'
import trousers from '../../images/price/shtany.jpg'
import shopper from '../../images/price/bag.png'
import cap from '../../images/price/kepka.jpg'
import {AdvertisingBlock} from "../Advertising/AdvertisingBlock";
import imgForVideo from '../../images/advertising/video2021.jpg'


export const Price = () => {

    const descriptions = <div className={styles.descriptions}>
        <h2>Презентация нашей <br/> коллекции одежды</h2>
    </div>

    return (
        <main className={styles.mainBlock}>
            <section>
                <h2>Современный<br/>мерчендайз для бизнеса</h2>
                <p>Над реализацией проектов по разработке и производству одеждыи аксессураов трудится огромная команда
                    профессионалов,
                    поэтому мы можем создавать проекты любой сложности
                    и масштабов под ключ или воплотить конкретные задачи на любом из этапов производства.
                </p>
            </section>
            <section className={styles.price_list}>
                <ul>
                    <li>
                        <figure>
                            <img src={hoodie} alt="желтая толстовка" width="351" height="348"/>
                            <figcaption>от 1600 ₽
                                <div className={styles.price}>Худи</div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={t_shirts} alt="черная футболка" width="351" height="348"/>
                            <figcaption>от 510 ₽
                                <div className={styles.price}>Футболки</div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={sweatshirt} alt="серый свитер" width="351" height="348"/>
                            <figcaption>от 890 ₽
                                <div className={styles.price}>Свитшоты</div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={trousers} alt="шатны черного цвета" width="351" height="348"/>
                            <figcaption>от 1230 ₽
                                <div className={styles.price}>Штаны</div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={shopper} alt="черная сумка" width="351" height="348"/>
                            <figcaption>от 330 ₽
                                <div className={styles.price}>Шопперы</div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={cap} alt="черная кепка" width="351" height="348"/>
                            <figcaption>от 400 ₽
                                <div className={styles.price}>Кепки</div>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
            <AdvertisingBlock imgSrc={imgForVideo} altText={'Видео коллекции'} video={true} descriptions={descriptions}/>
        </main>
    )
}