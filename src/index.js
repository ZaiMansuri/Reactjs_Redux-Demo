import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './MainApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<div>
    <App />
</div>, document.getElementById('root'));

serviceWorker.register();
