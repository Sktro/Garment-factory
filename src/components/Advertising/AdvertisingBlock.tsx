import styles from './AdvertisingBlock.module.sass'

type AdvertisingBlockType = {
    imgSrc: string
    altText: string
    video: boolean
    descriptions: React.ReactNode;
}

export const AdvertisingBlock = (props: AdvertisingBlockType) => {

    return (
        <section className={styles.videoBlock}>
            <div className={styles.videoContent}>
                {props.descriptions}
                {props.video && <div className={styles.circle}>
                    <div className={styles.triangle}></div>
                </div>}
                <img src={props.imgSrc} alt={props.altText}/>
            </div>
        </section>
    )
}