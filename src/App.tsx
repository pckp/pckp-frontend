import React from 'react'
import { Switch, Route, useLocation, Redirect} from 'react-router-dom'
import Search from "pages/Search"
import TopBar from 'components/TopBar'
import "scss/index.scss"
import "scss/bootstrap.scss"
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Profile from 'pages/Profile'
import Home from "pages/Home"
import LoginBar from 'components/LoginBar'

const App: React.FC = () => {

    return (
        <>
            {useLocation().pathname === '/' ? null : <TopBar/>}

            <LoginBar />

            <Switch>
                <Route path="/search">
                    <Search />
                </Route>

                <Route path="/profile">
                    <Profile author="spu7nix" verified={true} />
                </Route>

                {/* fallback */}
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </>
    )
}

export default App
