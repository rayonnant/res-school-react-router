import React, {useState} from 'react'
import {IconAt, IconPassword} from '@tabler/icons-react'
import {CustomInput} from '../customInput'
import styles from './style.module.scss'

interface SubmitProps {
    email: string
    password: string
}

interface Props {
    onSubmit: ({ email, password }: SubmitProps) => void
}

export const SignIn: React.FC<Props> = ({onSubmit}): React.JSX.Element => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        onSubmit({ email, password })
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.form__title}>Login to Your Account</h2>
            <CustomInput
                type='email'
                label='Email'
                placeholder='email address'
                icon={<IconAt size="0.7em"/>}
                onChange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
                type='password'
                label='Password'
                placeholder='your password'
                icon={<IconPassword size="0.7em"/>}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={styles.form__btn}>Enter</button>
        </form>
    )
}