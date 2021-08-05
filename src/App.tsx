import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import List from "pages/List"
import Header from 'components/Header'

import "css/index.css"

const App: React.FC = () => {
    return <>
        <Router>
            <Header />

            <Switch>
                <Route path="/list">
                    <List />
                </Route>
            </Switch>
        </Router>
    </>
}

export default App
