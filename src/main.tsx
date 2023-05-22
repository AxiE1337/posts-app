import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './store/index.ts'
import { Provider } from 'react-redux'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
