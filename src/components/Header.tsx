import React from 'react'
import pckpimg from "images/pckp.png"

const Header: React.FC = () => {
    return (
        <>
            <form
                className="container-fluid p-3"
                style={{ backgroundColor: '#111119' }}
            >
                <div className="row">
                    <div className="col-2">
                        <img src={pckpimg} alt="pckp" />
                    </div>

                    <div className="col-2">
                        <p
                            style={{
                                fontFamily: 'Ubuntu',
                                fontSize: '6em',
                                color: 'white',
                                textAlign: 'left',
                            }}
                        >
                            <em>PCKP</em>
                        </p>
                    </div>

                    <div className="col-2 d-flex align-items-center input-group w-25">
                        <div className="row">
                            <input
                                type="search"
                                id="search"
                                className="form-control"
                                autoComplete="off"
                                placeholder="Search packages"
                                style={{
                                    height: '3em',
                                    fontFamily: 'Ubuntu',
                                    fontSize: '1em',
                                }}
                            />
                            <label
                                className="form-label"
                                htmlFor="search"
                            ></label>
                        </div>
                    </div>

                    <div className="col-6"></div>
                </div>
            </form>
        </>
    )
}

export default Header;