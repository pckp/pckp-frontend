import React from 'react'
import { Switch, Route, useLocation} from 'react-router-dom'
import Search from "pages/Search"
import Header from 'components/Header'
import "scss/index.css"
import Nav from 'components/TagList'
import "scss/bootstrap.scss"
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Profile from 'pages/Profile'
import Home from "pages/Home"
import LoginBar from 'components/LoginBar'

const App: React.FC = () => {

    return (
        <>
            {useLocation().pathname.startsWith('/home') ? null : <Header />}

            <LoginBar />

            <Switch>
                <Route path="/home">
                    <Home />
                </Route>

                <Route path="/search">
                    <Search />
                </Route>

                <Route path="/profile">
                    <Profile author="spu7nix" verified={true} />
                </Route>
            </Switch>
        </>
    )
}

export default App
