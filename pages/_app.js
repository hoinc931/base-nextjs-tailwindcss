import { Provider } from 'react-redux';
import configureAppStore from 'redux/store';

import Layout from 'layout/index';
import '../styles/globals.scss';

const store = configureAppStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
