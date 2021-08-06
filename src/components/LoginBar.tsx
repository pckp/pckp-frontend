import React from 'react'
import styles from "scss/modules/LoginBar.module.scss"

const LoginBar = () => {
    return (
        <div
            className={styles.loginBar}
        >
            <div className="me-3">
                <button type="button" className={styles.loginBarButtonPrimary}>
                    Register
                </button>
            </div>

            <div className="">
                <button type="button" className={styles.loginBarButtonSecondary}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginBar;