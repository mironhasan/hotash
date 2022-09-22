import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { LoaderProvider } from './context/LoaderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <LoaderProvider>
            <App />
        </LoaderProvider>
    </ThemeProvider>
);
