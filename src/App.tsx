import React from 'react'
import { Switch, Route, useLocation} from 'react-router-dom'
import List from "pages/List"
import Header from 'components/Header'
import "scss/index.css"
import Nav from 'components/Nav'
// import 'bootstrap/dist/css/bootstrap.min.css'
import "scss/bootstrap.scss"
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Profile from 'pages/Profile'
import Home from "pages/Home"

const App: React.FC = () => {

    return (
        <>
            {useLocation().pathname.startsWith("/home") ? null : <Header />}

            <Switch>
                <Route path="/home">
                    <Home />
                </Route>

                <Route path="/list">
                    <div className="row p-3">
                        <div className="col-2">
                            <Nav />
                        </div>

                        <div className="col-10">
                            <List />
                        </div>
                    </div>
                </Route>

                <Route path="/profile">
                    <Profile author="spu7nix" verified={true} />
                </Route>
            </Switch>
        </>
    )
}

export default App
