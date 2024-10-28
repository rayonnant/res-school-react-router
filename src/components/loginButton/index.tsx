import {useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts/AuthProvider'
import {IconLogin, IconLogout} from '@tabler/icons-react'
import styles from './style.module.scss'

export const LoginButton = () => {

    const auth = useAuth()
    const navigate = useNavigate()

    const handleSignOut = () => {
        if (auth) {
            auth.signOut(() => {
                navigate('/')
            })
        }

    }

    const handleSignIn = () => {
        navigate('/login')
    }


    if (auth === null || auth.user === null) {
        return <li className={styles.login} onClick={handleSignIn}>
            <IconLogin size="3rem"/>
        </li>
    }

    return <li className={styles.login} onClick={handleSignOut}>
        <IconLogout size="3rem"/>
    </li>
}
