import { AppShell } from '@mantine/core'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

export const AuthLayout: React.FC = () =>{
  return (
    <AppShell header={{ height: 70 }}>
        <AppShell.Header>
            <Header />
        </AppShell.Header>
        <AppShell.Main>
            <Outlet />
        </AppShell.Main>
    </AppShell>
  )
}
