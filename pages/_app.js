import { Provider } from 'react-redux'
import configureAppStore from 'redux/store';
import '../styles/globals.scss'

const store = configureAppStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
