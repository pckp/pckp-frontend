import React from 'react'
import pckpimg from 'images/pckp.png'
import styles from 'scss/modules/TopBar.module.scss'

const TopBar: React.FC = () => {
    return (
        <>
            <nav className="navbar" style={{ backgroundColor: '#111119' }}>
                <div className="container-fluid">
                    <a className={styles.navBrand} href="/home">
                        <img src={pckpimg} alt="pckp" />
                        <em>PCKP</em>
                    </a>
                    <form className="d-flex">
                        <input
                            type="search"
                            id="search"
                            autoComplete="off"
                            placeholder="Search packages"
                            className="form-control"
                            style={{
                                fontSize: '1em',
                                height: '3em',
                                width: '25vw',
                            }}
                        />
                        <label className="form-label" htmlFor="search"></label>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default TopBar

