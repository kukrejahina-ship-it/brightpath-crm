import React from 'react'
import { NavLink } from 'react-router-dom'
import { LogOut, Sparkles } from 'lucide-react'
import { NAVIGATION_GROUPS, BRAND_CONFIG } from './navConfig'

interface SidebarProps {
  currentRole?: 'admin' | 'manager' | 'counsellor'
  userName?: string
  userEmail?: string
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentRole = 'admin',
  userName = 'Sarah Jenkins',
  userEmail = 'sarah.j@brightpath.edu'
}) => {
  const BrandIcon = BRAND_CONFIG.icon

  return (
    <aside
      style={{
        width: '260px',
        height: '100vh',
        position: 'sticky',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0c1322',
        borderRight: '1px solid rgba(255, 255, 255, 0.07)',
        zIndex: 30,
        flexShrink: 0
      }}
    >
      {/* Brand Header */}
      <div
        style={{
          padding: '1.25rem 1.25rem 1rem 1.25rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '9px',
            background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(2, 132, 199, 0.35)',
            color: '#ffffff',
            flexShrink: 0
          }}
        >
          <BrandIcon size={20} />
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div
            style={{
              fontSize: '0.9375rem',
              fontWeight: 700,
              color: '#f8fafc',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {BRAND_CONFIG.name}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              marginTop: '0.2rem'
            }}
          >
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                color: '#38bdf8',
                backgroundColor: 'rgba(2, 132, 199, 0.15)',
                border: '1px solid rgba(2, 132, 199, 0.25)',
                borderRadius: '4px',
                padding: '0.05rem 0.35rem',
                textTransform: 'uppercase',
                letterSpacing: '0.03em'
              }}
            >
              {BRAND_CONFIG.cohort}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Groups */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem 0.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}
      >
        {NAVIGATION_GROUPS.map((group) => (
          <div key={group.label}>
            <div
              style={{
                padding: '0 0.625rem 0.375rem 0.625rem',
                fontSize: '0.6875rem',
                fontWeight: 600,
                color: '#64748b',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              {group.label}
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              {group.items.map((item) => {
                const ItemIcon = item.icon
                return (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    style={({ isActive }) => ({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.625rem',
                      padding: '0.5rem 0.625rem',
                      borderRadius: '7px',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? '#f8fafc' : '#94a3b8',
                      backgroundColor: isActive ? 'rgba(2, 132, 199, 0.15)' : 'transparent',
                      border: isActive
                        ? '1px solid rgba(2, 132, 199, 0.3)'
                        : '1px solid transparent',
                      transition: 'all 150ms ease'
                    })}
                  >
                    {({ isActive }) => (
                      <>
                        <ItemIcon
                          size={18}
                          color={isActive ? '#38bdf8' : '#64748b'}
                          style={{ flexShrink: 0 }}
                        />
                        <span style={{ flex: 1 }}>{item.title}</span>
                        {item.badge && (
                          <span
                            style={{
                              fontSize: '0.6875rem',
                              fontWeight: 600,
                              padding: '0.1rem 0.4rem',
                              borderRadius: '9999px',
                              backgroundColor:
                                item.badgeVariant === 'warning'
                                  ? 'rgba(244, 63, 94, 0.18)'
                                  : 'rgba(255, 255, 255, 0.08)',
                              color:
                                item.badgeVariant === 'warning' ? '#fb7185' : '#94a3b8',
                              border:
                                item.badgeVariant === 'warning'
                                  ? '1px solid rgba(244, 63, 94, 0.3)'
                                  : '1px solid rgba(255, 255, 255, 0.08)'
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                )
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* Workshop / Handout Context Notice */}
      <div
        style={{
          margin: '0 0.75rem 0.75rem 0.75rem',
          padding: '0.75rem',
          borderRadius: '8px',
          backgroundColor: 'rgba(15, 23, 42, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
            color: '#38bdf8',
            fontSize: '0.75rem',
            fontWeight: 600
          }}
        >
          <Sparkles size={14} />
          <span>Fictional Academy</span>
        </div>
        <p
          style={{
            fontSize: '0.7rem',
            color: '#64748b',
            marginTop: '0.25rem',
            lineHeight: 1.35
          }}
        >
          Sample dataset active. Strict RLS and auth isolation enforced.
        </p>
      </div>

      {/* Bottom Profile Drawer */}
      <div
        title={userEmail}
        style={{
          padding: '0.875rem 1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          backgroundColor: '#0a101d',
          display: 'flex',
          alignItems: 'center',
          gap: '0.625rem'
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#1e293b',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#38bdf8',
            flexShrink: 0
          }}
        >
          {userName
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2)}
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div
            style={{
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#f8fafc',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {userName}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginTop: '0.1rem' }}>
            <span
              style={{
                fontSize: '0.625rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: currentRole === 'admin' ? '#fbbf24' : '#38bdf8',
                backgroundColor:
                  currentRole === 'admin'
                    ? 'rgba(245, 158, 11, 0.15)'
                    : 'rgba(2, 132, 199, 0.15)',
                padding: '0.05rem 0.35rem',
                borderRadius: '3px'
              }}
            >
              {currentRole}
            </span>
          </div>
        </div>
        <button
          aria-label="Sign out"
          title="Sign out"
          style={{
            color: '#64748b',
            padding: '0.375rem',
            borderRadius: '6px',
            transition: 'color 150ms ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#f43f5e')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
        >
          <LogOut size={16} />
        </button>
      </div>
    </aside>
  )
}
