import React from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, Search, Plus, Database } from 'lucide-react'

interface HeaderProps {
  onToggleMobileMenu: () => void
  onOpenCreateLead?: () => void
  isSupabaseConfigured?: boolean
}

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  '/dashboard': { title: 'Pipeline Dashboard', subtitle: 'Live conversion metrics and team health' },
  '/leads': { title: 'Student Inquiries', subtitle: 'Manage, qualify and assign prospective students' },
  '/follow-ups': { title: 'Follow-up Queue', subtitle: 'Timely reminders and pending outreach' },
  '/settings': { title: 'Settings & Diagnostics', subtitle: 'System preferences and environment status' }
}

export const Header: React.FC<HeaderProps> = ({
  onToggleMobileMenu,
  onOpenCreateLead,
  isSupabaseConfigured = false
}) => {
  const location = useLocation()
  const pageMeta = pageTitles[location.pathname] || {
    title: 'BrightPath CRM',
    subtitle: 'Admissions & Inquiries'
  }

  return (
    <header
      style={{
        height: '60px',
        position: 'sticky',
        top: 0,
        zIndex: 20,
        backgroundColor: 'rgba(9, 13, 22, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        gap: '1rem'
      }}
    >
      {/* Left: Hamburger trigger on mobile + Current Page Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', minWidth: 0 }}>
        <button
          onClick={onToggleMobileMenu}
          aria-label="Open navigation menu"
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.4rem',
            borderRadius: '6px',
            color: '#94a3b8',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
          className="mobile-menu-trigger"
        >
          <Menu size={18} />
        </button>

        <div style={{ minWidth: 0 }}>
          <h1
            style={{
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: '#f8fafc',
              letterSpacing: '-0.02em',
              margin: 0,
              lineHeight: 1.2
            }}
          >
            {pageMeta.title}
          </h1>
          <p
            style={{
              fontSize: '0.75rem',
              color: '#64748b',
              margin: 0,
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {pageMeta.subtitle}
          </p>
        </div>
      </div>

      {/* Center/Right: Global search bar, DB Status pill, and Action Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* Search input mock with shortcut badge */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.65rem',
            borderRadius: '7px',
            backgroundColor: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.8125rem',
            color: '#64748b',
            width: '260px',
            cursor: 'text'
          }}
          className="desktop-search-bar"
        >
          <Search size={14} color="#64748b" />
          <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Search student, phone...
          </span>
          <kbd
            style={{
              fontSize: '0.6875rem',
              fontFamily: 'inherit',
              padding: '0.1rem 0.35rem',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#94a3b8'
            }}
          >
            ⌘K
          </kbd>
        </div>

        {/* Supabase Connection Status Pill */}
        <div
          title={
            isSupabaseConfigured
              ? 'Connected to live Supabase PostgreSQL backend'
              : 'Supabase credentials missing from .env'
          }
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.3rem 0.6rem',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 500,
            color: isSupabaseConfigured ? '#34d399' : '#fbbf24',
            backgroundColor: isSupabaseConfigured
              ? 'rgba(16, 185, 129, 0.12)'
              : 'rgba(245, 158, 11, 0.12)',
            border: `1px solid ${
              isSupabaseConfigured ? 'rgba(16, 185, 129, 0.25)' : 'rgba(245, 158, 11, 0.25)'
            }`
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '9999px',
              backgroundColor: isSupabaseConfigured ? '#10b981' : '#f59e0b',
              boxShadow: `0 0 6px ${isSupabaseConfigured ? '#10b981' : '#f59e0b'}`
            }}
          />
          <Database size={13} style={{ opacity: 0.8 }} />
          <span className="db-status-label">
            {isSupabaseConfigured ? 'PostgreSQL Live' : 'Setup Required'}
          </span>
        </div>

        {/* Primary Action Button */}
        <button
          onClick={onOpenCreateLead}
          className="btn-primary"
          style={{ padding: '0.4rem 0.8rem', fontSize: '0.8125rem' }}
        >
          <Plus size={15} />
          <span>New Lead</span>
        </button>
      </div>
    </header>
  )
}
