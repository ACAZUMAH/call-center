import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

interface QeuryProps {
  children: React.ReactNode
}
export const QueryProvider: React.FC<QeuryProps> = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}


