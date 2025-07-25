import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "virtual:uno.css"
import './assets/style/index.less'
import { RouterProvider } from "react-router";
import { router } from './router/index.ts'

import '@unocss/reset/normalize.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
