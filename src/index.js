import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter,Match } from "react-router";
import Dropdown from "./components/Dropdown";

const Root=()=>{
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/manage/:data" component={App} />
                <Match exactly pattern="/dropdown" component={Dropdown} />
            </div>
        </BrowserRouter>
    );
};

// 1. /manage/teacher
// 2. /manage/rooms

ReactDOM.render(<Root />, document.getElementById('root'));
