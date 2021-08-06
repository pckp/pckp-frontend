import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
    let history = useHistory();
    const [search, setSearch] = useState<string>("");
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        history.push("/search?q=" + search);
    }

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

            <form className="row h-50 d-flex align-items-start justify-content-center" onSubmit={handleSubmit}>
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
                    onChange={handleChange}
                    value={search}
                />
                <label className="form-label" htmlFor="search"></label>

                {/* dummy input */}
                <button type='submit' className="d-none"></button>
            </form>
        </div>
    )
}

export default Home
