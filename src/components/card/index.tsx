import React, {useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import styles from './style.module.scss'

interface BaseInfo {
    id: number
    name: string
    created: string
}

interface Character extends BaseInfo {
    status: string
    species: string
    type: string
    gender: string
    image: string
}

interface Episode extends BaseInfo {
    air_date: string
    episode: string
}

interface Location extends BaseInfo {
    type: string
    dimension: string
}


interface Props {
    data: Character[] | Episode[] | Location[]
    id: number
}

export const Card: React.FC<Props> = (props: Props): React.JSX.Element => {

    const entity: Character | Episode | Location = props.data[+props.id - 1]
    const [opacity, setOpacity] = React.useState<number>(0)


    useEffect((): () => void => {
        if (opacity === 1) {
            setOpacity(0)
        } else {
            setOpacity(1)
        }

        return () => {
            setOpacity(0)
        }
    }, [])


    return (
        <div className={styles.container} style={{opacity: `${opacity}`}}>
            {props.data[+props.id - 1] ?
                <div className={styles.card}>
                    <h2 className={styles.card__title}>{entity.name.toUpperCase()}</h2>
                    <div className={styles.card__info} style={{
                        gridColumnEnd: 'image' in entity ? 2 : 3,
                        textAlign: 'image' in entity ? 'start' : 'center'
                    }}>
                        {'species' in entity && entity.species && <span className={styles.card__info_detail}><i
													style={{color: 'grey'}}>specie:</i> {entity.species}</span>}
                        {'type' in entity && entity.type && <span className={styles.card__info_detail}><i
													style={{color: 'grey'}}>type:</i> {entity.type}</span>}
                        {'gender' in entity && entity.gender && <span className={styles.card__info_detail}><i
													style={{color: 'grey'}}>gender:</i> {entity.gender}</span>}
                        {'status' in entity && entity.status && <span className={styles.card__info_detail}><i
													style={{color: 'grey'}}>status:</i> {entity.status}</span>}
                        {'air_date' in entity && entity.air_date && <span className={styles.card__info_detail}><i
													style={{color: 'grey'}}>air date:</i> {entity.air_date}</span>}
                        {'episode' in entity && entity.episode && <span className={styles.card__info_detail}><i
													style={{color: 'grey'}}>episode:</i> {entity.episode}</span>}
                        {'dimension' in entity && entity.dimension && <span className={styles.card__info_detail}><i
													style={{color: 'grey'}}>dimension:</i> {entity.dimension}</span>}
                    </div>
                    {'image' in entity && entity.image &&
											<div className={styles.card__image}>

												<img
													src={entity.image}
													alt="a character"
												/>
											</div>
                    }
                </div>
                : <Navigate to="*"/>
            }
        </div>
    )
}
