import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../store/store';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://devapiv2.walcart.com/graphql',
  cache: new InMemoryCache(),
});

function MyApp({
  Component, pageProps,
}: AppProps) {
  return (
    <ApolloProvider client={client}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ApolloProvider>
  );
}

export default MyApp;