import React from 'react'

const Home: React.FC = () => {

    return (
        <div
            style={{ backgroundColor: '#111119', height: '100vh', position: "absolute" }}
            className="w-100 container-fluid"
        >
            <div className="row h-50 d-flex align-items-end justify-content-center">
                <p
                    style={{
                        fontFamily: 'Ubuntu',
                        fontSize: '8em',
                        color: 'white',
                        textAlign: 'center'
                    }}
                >
                    <em>PCKP</em>
                </p>
            </div>

            <form className="row h-50 d-flex align-items-start justify-content-center">
                <input
                    type="search"
                    id="search"
                    className="form-control w-25"
                    autoComplete="off"
                    placeholder="Search packages"
                    style={{
                        height: '3em',
                        fontFamily: 'Ubuntu',
                        fontSize: '1.5em',
                        display: 'block'
                    }}
                />
                <label className="form-label" htmlFor="search"></label>
            </form>
        </div>
    )
}

export default Home
