import styles from './ProductionTechnologies.module.sass'
import tech0 from "../../images/productionsTechnologies/tech0.jpg";
import tech1 from "../../images/productionsTechnologies/tech1.jpg";
import {AdvertisingBlock} from "../Advertising/AdvertisingBlock";
import implementation from '../../images/advertising/implementation.png'

export const ProductionTechnologies = () => {

    const descriptions = <div className={styles.textImplementation}>
        <h2>Если у вас есть свои товары,<br/>
            мы можем вам помочь реализовать их.</h2>
        <p>
            Разместим Ваши товары на сайте vsrap.com и в офлайн-магазинах «VSRAP».
            Осуществим обработку заказов и их отправку. Каждое предложение мы рассматриваем индивидуально.
        </p>
    </div>

    return (
        <section className={styles.technologiesBlock}>
            <div className={styles.content}>
                <h2>
                    Способы нанесения <br/> принтов и вышивка
                </h2>
                <ul>
                    <li>
                        <figure>
                            <img src={tech0} alt="Разработка лекал для швейного производства" width="351"
                                 height="348"/>
                            <figcaption>Шелкография
                                <div className={styles.description}>Трафаретная печать подходит для нанесения почти на
                                    любых изделиях: футболках, толстовках, свитшотах и т.д. Принты, сделанные данным
                                    способом имеют высокую износостойкость, не требуют особого ухода и прослужат
                                    довольно долго.</div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={tech1} alt="Разработка лекал для швейного производства" width="351"
                                 height="348"/>
                            <figcaption>Вышивка на одежде
                                <div className={styles.description}>Один из самых интересных способов нанесения
                                    изображения на одежду. Вышивка долговечна, без проблем переносит механические
                                    воздействия. Данный вид нанесения выглядит наиболее эффектно и прослужит дольше
                                    всего.
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
            <AdvertisingBlock imgSrc={implementation} altText={'стильная одежда'} video={false}
                              descriptions={descriptions}/>
        </section>
    )
}