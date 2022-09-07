import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider  theme={theme}>
    <BrowserRouter>
   <AuthProvider>

    <App />
   </AuthProvider>
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

