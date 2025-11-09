import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>

      </footer>
    </div>
  )
}
