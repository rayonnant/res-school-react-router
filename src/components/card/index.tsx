import React, {useEffect} from 'react'
import styles from './style.module.scss'
import {Character, Location, Episode} from '../../interfaces'

interface Props {
    data: Character | Location | Episode | undefined
    id: number
    isLoading: boolean
}

export const Card: React.FC<Props> = (props: Props): React.JSX.Element => {
    const [opacity, setOpacity] = React.useState<number>(0)

    useEffect((): void => {
        if (opacity === 1) {
            setOpacity(0)
        } else {
            setOpacity(1)
        }
    }, [])

    return (
        <div className={styles.container} style={{opacity: `${opacity}`}}>
            {props.data && <div className={styles.card}>
							<h2 className={styles.card__title}>{props.data.name}</h2>
							<div className={styles.card__info} style={{
                  gridColumnEnd: 'image' in props.data ? 2 : 3,
                  textAlign: 'image' in props.data ? 'start' : 'center'
              }}>
                  {'species' in props.data && props.data.species && <span className={styles.card__info_detail}><i
										style={{color: 'grey'}}>specie:</i> {props.data.species}</span>}
                  {'type' in props.data && props.data.type && <span className={styles.card__info_detail}><i
										style={{color: 'grey'}}>type:</i> {props.data.type}</span>}
                  {'gender' in props.data && props.data.gender && <span className={styles.card__info_detail}><i
										style={{color: 'grey'}}>gender:</i> {props.data.gender}</span>}
                  {'status' in props.data && props.data.status && <span className={styles.card__info_detail}><i
										style={{color: 'grey'}}>status:</i> {props.data.status}</span>}
                  {'air_date' in props.data && props.data.air_date && <span className={styles.card__info_detail}><i
										style={{color: 'grey'}}>air date:</i> {props.data.air_date}</span>}
                  {'episode' in props.data && props.data.episode && typeof props.data.episode === 'string' &&
										<span className={styles.card__info_detail}><i
											style={{color: 'grey'}}>episode:</i> {props.data.episode}</span>}
                  {'dimension' in props.data && props.data.dimension && <span className={styles.card__info_detail}><i
										style={{color: 'grey'}}>dimension:</i> {props.data.dimension}</span>}
							</div>
                {'image' in props.data && props.data.image &&
									<div className={styles.card__image}>

										<img
											src={props.data.image}
											alt="a character"
										/>
									</div>
                }
						</div>}
        </div>
    )


}
