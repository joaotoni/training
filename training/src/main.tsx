import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.tsx'
import NewPost from './routes/NewPost.tsx'

// Objeto Router criado para manter o header e o footer na página, para que mude os itens do meio da página
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
