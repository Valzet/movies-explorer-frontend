import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App.js';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
          <App />
      </React.StrictMode>
    </BrowserRouter>
    ,
  document.getElementById('root')
);

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//   <BrowserRouter>
//   <React.StrictMode>
//     <App />
// </React.StrictMode>
// </BrowserRouter>
// )
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
