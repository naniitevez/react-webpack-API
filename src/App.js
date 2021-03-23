import React, {Fragment} from 'react'
import Characters from './components/Characters'
import Header from './components/Header'
import './main.sass'
import './components/Header.css'


const App = () => {
    return ( 
        <Fragment>
            <Header title="Rickand Morty API"/>
            <Characters/>
        </Fragment>
    );
}

export default App;