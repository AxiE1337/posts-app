import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './store/index.ts'
import { Provider } from 'react-redux'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
