import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { MobileNav } from './MobileNav'

interface AppLayoutProps {
  currentRole?: 'admin' | 'manager' | 'counsellor'
  userName?: string
  userEmail?: string
  isSupabaseConfigured?: boolean
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  currentRole = 'admin',
  userName = 'Sarah Jenkins',
  userEmail = 'sarah.j@brightpath.edu',
  isSupabaseConfigured = false
}) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="app-container">
      {/* Desktop Fixed Sidebar */}
      <div className="desktop-sidebar">
        <Sidebar
          currentRole={currentRole}
          userName={userName}
          userEmail={userEmail}
        />
      </div>

      {/* Mobile Slide-Over Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        currentRole={currentRole}
        userName={userName}
      />

      {/* Main Content Area */}
      <div className="main-content-area">
        <Header
          onToggleMobileMenu={() => setMobileNavOpen(true)}
          isSupabaseConfigured={isSupabaseConfigured}
          onOpenCreateLead={() => {
            // Placeholder: Navigate or trigger lead modal in Phase 5
            window.location.hash = '#new-lead'
          }}
        />

        <main id="main-content" className="content-viewport" role="main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
