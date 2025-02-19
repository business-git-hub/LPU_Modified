import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './stores/store.jsx'
import App from './App.jsx'
import './index.css'

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }