import styles from './InfoBlock.module.sass'
import info1 from '../../images/infoBlock/info1.png'
import info2 from '../../images/infoBlock/info2.png'
import info3 from '../../images/infoBlock/info3.png'
import info4 from '../../images/infoBlock/info4.png'
import info5 from '../../images/infoBlock/info5.png'
import info6 from '../../images/infoBlock/info6.png'
import {StoreBlock} from "../Advertising/StoreBlock";

export const InfoBlock = () => {
    return (
        <section className={styles.infoBlockContain}>
            <div className={styles.content}>
                <h2>
                    Все вещи мы шьём на собственном <br/>
                    производстве в Санкт-Петербурге <br/>
                    по собственному дизайну и крою
                </h2>
                <p className={styles.descriptionText}>
                    А наши коллекции сделанные совместно с топовыми блогерами и артистами продаём
                    в онлайн и через собственные розничные магазины в Питере и Москве.
                </p>
                <div className={styles.pictureSections}>
                    <ul>
                        <li>
                            <img src={info1} alt=""/>
                        </li>
                        <li>
                            <img src={info2} alt=""/>
                        </li>
                        <li>
                            <img src={info3} alt=""/>
                        </li>
                        <li>
                            <img src={info4} alt=""/>
                        </li>
                        <li>
                            <img src={info5} alt=""/>
                        </li>
                        <li>
                            <img src={info6} alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
            <StoreBlock/>
        </section>
    )
}