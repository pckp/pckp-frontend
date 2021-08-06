import React from 'react'

const LoginBar = () => {
    return (
        <div
            className="container-fluid w-100 p-3 flex-row d-flex justify-content-end"
            style={{ position: 'absolute', zIndex: 1 }}
        >
            <div className="me-3">
                <button type="button" className="btn btn-outline-primary">
                    Register
                </button>
            </div>

            <div className="">
                <button type="button" className="btn btn-outline-secondary">
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginBar;