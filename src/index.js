import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter,Match } from "react-router";

const Root=()=>{
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/manage/:data" component={App} />
            </div>
        </BrowserRouter>
    );
};

// 1. /manage/teacher
// 2. /manage/rooms

ReactDOM.render(<Root />, document.getElementById('root'));
