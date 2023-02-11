import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';




const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={ client }>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>,
)
