import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FrontPage from './FrontPage';
import ResultPage from './ResultPage';
import reportWebVitals from './reportWebVitals';
import'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Switch, Route, Redirect, Link} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/canvaspage" element={<App />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
