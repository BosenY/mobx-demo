import React from 'react';
import ReactDOM from 'react-dom';
import RouterList from './routers'
import registerServiceWorker from './registerServiceWorker';
import './reset.css'



ReactDOM.render(<RouterList />, document.getElementById('root'));
registerServiceWorker();
