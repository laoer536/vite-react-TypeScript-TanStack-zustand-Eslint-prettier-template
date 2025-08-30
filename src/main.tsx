import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalProvider from '@/components/GlobalProvider'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

const queryClient = new QueryClient()
const publicPath = import.meta.env.VITE_PUBLIC_PATH as string

// Create a new router instance
const router = createRouter({ basepath: publicPath, routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </GlobalProvider>
  </React.StrictMode>,
)
