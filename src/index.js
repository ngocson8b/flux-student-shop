import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Vote from './components/Vote.react.js';
import Student from './components/Student.react.js';
import Shop from './components/Shop.react.js';

ReactDOM.render(
    <div>
        <Vote />
        {/*<Student />*/}
        <div>
            SHOP CART
        </div>
        <Shop />
    </div>, document.getElementById('root'));
