import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { X, LogOut } from 'lucide-react'
import { NAVIGATION_GROUPS, BRAND_CONFIG } from './navConfig'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  currentRole?: 'admin' | 'manager' | 'counsellor'
  userName?: string
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  currentRole = 'admin',
  userName = 'Sarah Jenkins'
}) => {
  const BrandIcon = BRAND_CONFIG.icon

  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent body scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex'
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(9, 13, 22, 0.75)',
          backdropFilter: 'blur(8px)',
          transition: 'opacity 200ms ease'
        }}
      />

      {/* Slide-in drawer */}
      <div
        style={{
          position: 'relative',
          width: '280px',
          maxWidth: '85vw',
          height: '100%',
          backgroundColor: '#0c1322',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '4px 0 24px rgba(0, 0, 0, 0.6)',
          zIndex: 51
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 1rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <BrandIcon size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f8fafc' }}>
                {BRAND_CONFIG.name}
              </div>
              <div style={{ fontSize: '0.6875rem', color: '#38bdf8' }}>
                {BRAND_CONFIG.cohort}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              color: '#94a3b8',
              padding: '0.4rem',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation items */}
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
                  padding: '0 0.5rem 0.35rem 0.5rem',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  color: '#64748b',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                {group.label}
              </div>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {group.items.map((item) => {
                  const ItemIcon = item.icon
                  return (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      onClick={onClose}
                      style={({ isActive }) => ({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.625rem',
                        padding: '0.6rem 0.625rem',
                        borderRadius: '7px',
                        fontSize: '0.875rem',
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? '#f8fafc' : '#94a3b8',
                        backgroundColor: isActive
                          ? 'rgba(2, 132, 199, 0.15)'
                          : 'transparent',
                        border: isActive
                          ? '1px solid rgba(2, 132, 199, 0.3)'
                          : '1px solid transparent'
                      })}
                    >
                      {({ isActive }) => (
                        <>
                          <ItemIcon
                            size={18}
                            color={isActive ? '#38bdf8' : '#64748b'}
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
                                  item.badgeVariant === 'warning'
                                    ? '#fb7185'
                                    : '#94a3b8'
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

        {/* Bottom Profile card */}
        <div
          style={{
            padding: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.07)',
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: '#38bdf8'
            }}
          >
            {userName
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
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
            <div
              style={{
                fontSize: '0.6875rem',
                color: currentRole === 'admin' ? '#fbbf24' : '#38bdf8'
              }}
            >
              {currentRole}
            </div>
          </div>
          <button
            aria-label="Sign out"
            style={{ color: '#64748b', padding: '0.375rem' }}
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
