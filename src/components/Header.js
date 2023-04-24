import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Dogs } from '../Assets/dogs.svg'

import React from 'react'

const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
            <Link className={styles.logo} to='/' area-label='Dogs - Home'>
              <Dogs/>
            </Link>
            <Link className={styles.login} to='/login'>Login / Criar</Link>
        </nav>
    </header>
  )
}

export default Header