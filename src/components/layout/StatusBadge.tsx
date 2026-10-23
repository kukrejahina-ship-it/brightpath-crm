import React from 'react'

export type StatusType = 
  | 'New' 
  | 'Contacted' 
  | 'Qualified' 
  | 'Converted' 
  | 'Lost' 
  | 'pending' 
  | 'completed' 
  | 'cancelled' 
  | 'overdue'

interface StatusBadgeProps {
  status: StatusType | string
  size?: 'sm' | 'md'
  showDot?: boolean
}

const statusConfig: Record<string, { label: string; text: string; bg: string; border: string; dot: string }> = {
  New: {
    label: 'New',
    text: '#38bdf8',
    bg: 'rgba(14, 165, 233, 0.12)',
    border: 'rgba(14, 165, 233, 0.28)',
    dot: '#0ea5e9'
  },
  Contacted: {
    label: 'Contacted',
    text: '#818cf8',
    bg: 'rgba(99, 102, 241, 0.12)',
    border: 'rgba(99, 102, 241, 0.28)',
    dot: '#6366f1'
  },
  Qualified: {
    label: 'Qualified',
    text: '#34d399',
    bg: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.28)',
    dot: '#10b981'
  },
  Converted: {
    label: 'Converted',
    text: '#10b981',
    bg: 'rgba(16, 185, 129, 0.16)',
    border: 'rgba(16, 185, 129, 0.35)',
    dot: '#10b981'
  },
  Lost: {
    label: 'Lost',
    text: '#fb7185',
    bg: 'rgba(244, 63, 94, 0.12)',
    border: 'rgba(244, 63, 94, 0.28)',
    dot: '#f43f5e'
  },
  pending: {
    label: 'Pending',
    text: '#fbbf24',
    bg: 'rgba(245, 158, 11, 0.12)',
    border: 'rgba(245, 158, 11, 0.28)',
    dot: '#f59e0b'
  },
  completed: {
    label: 'Completed',
    text: '#34d399',
    bg: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.28)',
    dot: '#10b981'
  },
  cancelled: {
    label: 'Cancelled',
    text: '#94a3b8',
    bg: 'rgba(148, 163, 184, 0.12)',
    border: 'rgba(148, 163, 184, 0.25)',
    dot: '#64748b'
  },
  overdue: {
    label: 'Overdue',
    text: '#f43f5e',
    bg: 'rgba(244, 63, 94, 0.18)',
    border: 'rgba(244, 63, 94, 0.38)',
    dot: '#f43f5e'
  }
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'sm', showDot = true }) => {
  const config = statusConfig[status] || {
    label: status,
    text: '#94a3b8',
    bg: 'rgba(148, 163, 184, 0.1)',
    border: 'rgba(148, 163, 184, 0.2)',
    dot: '#94a3b8'
  }

  const isSmall = size === 'sm'

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        padding: isSmall ? '0.125rem 0.5rem' : '0.25rem 0.625rem',
        fontSize: isSmall ? '0.75rem' : '0.8125rem',
        fontWeight: 500,
        lineHeight: 1.25,
        borderRadius: '9999px',
        color: config.text,
        backgroundColor: config.bg,
        border: `1px solid ${config.border}`,
        whiteSpace: 'nowrap'
      }}
    >
      {showDot && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '9999px',
            backgroundColor: config.dot,
            boxShadow: `0 0 6px ${config.dot}`
          }}
        />
      )}
      <span>{config.label}</span>
    </span>
  )
}
