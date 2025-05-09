import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css'; 

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

const client=new ApolloClient({
  uri: import.meta.env.VITE_BACKEND_URL || "",
  cache: new InMemoryCache()
})
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>  
        <App/>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)
