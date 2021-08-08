import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from 'scss/modules/Home.module.scss'

const Home: React.FC = () => {
    let history = useHistory()
    const [search, setSearch] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        history.push('/search?q=' + search)
    }

    return (
        <div className={styles.home}>
            <div className={styles.homeBox}>
                <p className={styles.homeText}>
                    <em>PCKP</em>
                </p>
            </div>

            <form className={styles.homeBox} onSubmit={handleSubmit}>
                <input
                    type="search"
                    id="search"
                    className={styles.homeInput}
                    autoComplete="off"
                    placeholder="Search packages"
                    onChange={handleChange}
                    value={search}
                />
                <label className="form-label" htmlFor="search"></label>

                {/* dummy input */}
                <button type="submit" className="d-none"></button>
            </form>
        </div>
    )
}

export default Home
