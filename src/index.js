import React from 'react';
import ReactDOM from 'react-dom';

// import "./App.css";
import './css/Main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
