import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import {Header} from "./components/Head/Header";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <header>
            <Header />
        </header>
        <main>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </main>
    </React.StrictMode>
);
