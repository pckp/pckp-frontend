import React from 'react'
import pckpimg from 'images/pckp.png'
import styles from 'scss/modules/TopBar.module.scss'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const TopBar: React.FC = () => {
    let history = useHistory();
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        history.replace("/search?q=" + search);
    }

    return (
        <>
            <nav className="navbar" style={{ backgroundColor: '#111119' }}>
                <div className={styles.navFlex}>
                    <a className={styles.navBrand} href="/home">
                        <img src={pckpimg} alt="pckp" />
                        <em>PCKP</em>
                    </a>
                    <form className={styles.navForm} onSubmit={handleSubmit}>
                        <input
                            type="search"
                            id="search"
                            autoComplete="off"
                            placeholder="Search packages"
                            className={styles.navInput}
                            onChange={handleChange}
                            value={search}
                        />
                        <label className="form-label" htmlFor="search"></label>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default TopBar

