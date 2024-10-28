import React, {ReactElement} from 'react'
import styles from './style.module.scss'

interface MainTemplateProps {
    type: string
    description?: string
    error?: string
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
    withAsterisk?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface RadioInputs extends MainTemplateProps {
    type: 'radio'
    radioInputs: {
        legend: string
        name: string
        children: {
            span: string
            value: string | number
        }[]
    }
    label?: never
    placeholder?: never
    icon?: never
    variant?: never
    radius?: never
}

interface BasicInputs extends MainTemplateProps {
    type: 'text' | 'password' | 'email'
    label: string
    placeholder: string
    variant?: 'default' | 'success' | 'warning'
    radius?: '0' | '5px' | '10px' | '15px' | '20px'
    radioInputs?: never
    icon?: ReactElement<any, any>
}

type Props = RadioInputs | BasicInputs

export const CustomInput = ({
                                type,
                                label,
                                placeholder = '',
                                description = '',
                                error = '',
                                variant = 'default',
                                radius = '5px',
                                size = 'medium',
                                disabled = false,
                                withAsterisk = true,
                                icon,
                                radioInputs,
                                onChange
                            }: Props): React.JSX.Element => {

    const colorVariants: { [key: string]: string } = {
        'default': 'lightgrey',
        'success': 'green',
        'warning': 'red'
    }

    const widthSizes: { [key: string]: string } = {
        'small': '40%',
        'medium': '70%',
        'large': '95%'
    }

    return (
        <div className={styles['form-group']}>
            {['text', 'password', 'email'].includes(type.trim().toLowerCase()) ?
                <>
                    <label className={styles['form-group__label']} style={{
                        width: widthSizes[size],
                    }}>
                        <span>{label} {withAsterisk && <sup style={{color: 'darkred'}}>*</sup>}</span>
                        <div className={styles['input-container']}>
                            {icon && <div className={styles['form-icon']}>{icon}</div>}
                            <input
                                className={styles.input}
                                type={type}
                                disabled={disabled}
                                required={withAsterisk}
                                placeholder={placeholder}
                                onChange={onChange}
                                style={{
                                    borderColor: colorVariants[variant],
                                    borderRadius: radius,
                                }}
                            />
                        </div>
                    </label>
                    {description.length > 0 && <p style={{
                        width: widthSizes[size],
                    }}>{description}</p>}
                    {error.length > 0 && <p style={{
                        width: widthSizes[size],
                        color: 'red'
                    }}>{error}</p>}
                </>
                : type === 'radio' ?
                    <>
                        <fieldset
                            className={styles.fieldset}
                            style={{
                                width: widthSizes[size]
                            }}
                        >
                            <legend>{radioInputs.legend} {withAsterisk &&
															<sup style={{color: 'darkred'}}>*</sup>}</legend>
                            <div>
                                {
                                    radioInputs.children.map((item: {
                                        span: string,
                                        value: string | number
                                    }, idx: number) => (
                                        <label className={styles['radio-label']} key={idx}>
                                            <input
                                                className={styles.input}
                                                type='radio'
                                                name={radioInputs.name}
                                                value={item.value}
                                                required={idx === 0}
                                                disabled={disabled}
                                                onChange={onChange}
                                            />
                                            <span className={styles.text}>{item.span}</span>
                                        </label>
                                    ))
                                }
                                {description.length > 0 && <p style={{
                                    width: widthSizes[size],
                                }}>{description}</p>}
                                {error.length > 0 && <p style={{
                                    width: widthSizes[size],
                                    color: 'red'
                                }}>{error}</p>}
                            </div>
                        </fieldset>

                    </>
                    : null
            }
        </div>
    )
}
