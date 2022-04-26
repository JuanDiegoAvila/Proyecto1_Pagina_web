import {createRoot} from 'react-dom/client'
import * as ReactDOM from 'react-dom';

import TitleBar from './TitleBar.jsx';
import IntroContainer from './IntroContainer.jsx';

import React from 'react'

const App = () => {
    return(
        <div>
            <TitleBar></TitleBar>
            <IntroContainer></IntroContainer>
        </div>
    )
}

const container = document.getElementById('app');
const root = createRoot(container)
root.render(<App tab="home" />)
