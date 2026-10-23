import React, { useState } from 'react'
import {
  CalendarClock,
  CheckCircle2,
  AlertTriangle,
  Plus,
  Clock,
  Phone,
  User,
  ArrowRight
} from 'lucide-react'
import { StatusBadge } from '../components/layout/StatusBadge'
import { Link } from 'react-router-dom'

export const FollowUpsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'overdue' | 'completed'>('upcoming')

  const followUpItems = [
    {
      id: '1',
      studentName: 'Aarav Sharma',
      course: 'Full Stack Engineering',
      phone: '+91 98765 43210',
      dueAt: 'Overdue by 2 hours (10:00 AM)',
      note: 'Follow up on fee installment options and curriculum brochure sent via email.',
      assignee: 'Priya Sen',
      status: 'overdue'
    },
    {
      id: '2',
      studentName: 'Ananya Rao',
      course: 'Data Science & AI',
      phone: '+91 98111 22334',
      dueAt: 'Today, 3:30 PM',
      note: 'Call back after college classes. Interested in evening weekday batch.',
      assignee: 'Rahul Verma',
      status: 'pending'
    },
    {
      id: '3',
      studentName: 'Rohan Mehta',
      course: 'Cloud Architecture',
      phone: '+91 97222 33445',
      dueAt: 'Today, 5:00 PM',
      note: 'Parent called; wants to schedule in-person walk-in meeting tomorrow.',
      assignee: 'Priya Sen',
      status: 'pending'
    },
    {
      id: '4',
      studentName: 'Ishita Kapoor',
      course: 'UI/UX Product Design',
      phone: '+91 99333 44556',
      dueAt: 'Yesterday, 4:00 PM',
      note: 'Discussed portfolio prerequisites. Student completed registration.',
      assignee: 'Sarah Jenkins',
      status: 'completed'
    }
  ]

  const displayedItems = followUpItems.filter((item) => {
    if (activeTab === 'overdue') return item.status === 'overdue'
    if (activeTab === 'completed') return item.status === 'completed'
    return item.status === 'pending' || item.status === 'overdue'
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f8fafc', margin: 0 }}>
            Follow-up Schedule & Tasks
          </h2>
          <p style={{ fontSize: '0.8125rem', color: '#64748b', margin: '0.2rem 0 0 0' }}>
            Time-sensitive outreach queue • Zero-dropped-lead guarantee
          </p>
        </div>
        <button
          className="btn-primary"
          onClick={() => alert('Phase 7 will open schedule follow-up modal')}
        >
          <Plus size={16} />
          <span>Schedule Follow-up</span>
        </button>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '0.5rem'
        }}
      >
        <button
          onClick={() => setActiveTab('upcoming')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 0.875rem',
            borderRadius: '6px',
            fontSize: '0.8125rem',
            fontWeight: 500,
            color: activeTab === 'upcoming' ? '#38bdf8' : '#94a3b8',
            backgroundColor: activeTab === 'upcoming' ? 'rgba(2, 132, 199, 0.15)' : 'transparent',
            border: activeTab === 'upcoming' ? '1px solid rgba(2, 132, 199, 0.3)' : '1px solid transparent'
          }}
        >
          <Clock size={14} />
          <span>Pending & Upcoming</span>
          <span
            style={{
              fontSize: '0.6875rem',
              padding: '0.1rem 0.4rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#f8fafc'
            }}
          >
            3
          </span>
        </button>

        <button
          onClick={() => setActiveTab('overdue')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 0.875rem',
            borderRadius: '6px',
            fontSize: '0.8125rem',
            fontWeight: 500,
            color: activeTab === 'overdue' ? '#fb7185' : '#94a3b8',
            backgroundColor: activeTab === 'overdue' ? 'rgba(244, 63, 94, 0.15)' : 'transparent',
            border: activeTab === 'overdue' ? '1px solid rgba(244, 63, 94, 0.3)' : '1px solid transparent'
          }}
        >
          <AlertTriangle size={14} />
          <span>Overdue Outreach</span>
          <span
            style={{
              fontSize: '0.6875rem',
              padding: '0.1rem 0.4rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(244, 63, 94, 0.2)',
              color: '#fb7185',
              fontWeight: 700
            }}
          >
            1
          </span>
        </button>

        <button
          onClick={() => setActiveTab('completed')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 0.875rem',
            borderRadius: '6px',
            fontSize: '0.8125rem',
            fontWeight: 500,
            color: activeTab === 'completed' ? '#34d399' : '#94a3b8',
            backgroundColor: activeTab === 'completed' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
            border: activeTab === 'completed' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent'
          }}
        >
          <CheckCircle2 size={14} />
          <span>Completed History</span>
          <span
            style={{
              fontSize: '0.6875rem',
              padding: '0.1rem 0.4rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#f8fafc'
            }}
          >
            1
          </span>
        </button>
      </div>

      {/* Overdue Rules banner */}
      <div
        style={{
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.75rem',
          color: '#94a3b8'
        }}
      >
        <CalendarClock size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
        <div>
          <strong style={{ color: '#f8fafc' }}>Business Rule (Section 15):</strong> An outreach is
          strictly flagged overdue when status is pending and the due timestamp is earlier than current time.
          Marking it complete stamps <code style={{ color: '#38bdf8' }}>completed_at</code> and immediately
          clears overdue status.
        </div>
      </div>

      {/* Follow-up list items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className="card-surface"
            style={{
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', flex: '1 1 320px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#f8fafc' }}>
                  {item.studentName}
                </span>
                <StatusBadge status={item.status} size="sm" />
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  ({item.course})
                </span>
              </div>

              <p style={{ fontSize: '0.8125rem', color: '#cbd5e1', margin: 0 }}>
                {item.note}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                <span className="tabular" style={{ color: item.status === 'overdue' ? '#fb7185' : '#94a3b8', fontWeight: 500 }}>
                  <Clock size={12} style={{ display: 'inline', marginRight: '0.25rem', verticalAlign: '-1px' }} />
                  {item.dueAt}
                </span>
                <span>
                  <User size={12} style={{ display: 'inline', marginRight: '0.25rem', verticalAlign: '-1px' }} />
                  Assigned: {item.assignee}
                </span>
                <span className="tabular">
                  <Phone size={12} style={{ display: 'inline', marginRight: '0.25rem', verticalAlign: '-1px' }} />
                  {item.phone}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {item.status !== 'completed' && (
                <button
                  className="btn-primary"
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
                  onClick={() => alert(`Phase 7 will mark follow-up for ${item.studentName} as completed`)}
                >
                  <CheckCircle2 size={13} />
                  <span>Mark Complete</span>
                </button>
              )}
              <Link
                to="/leads"
                className="btn-secondary"
                style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}
              >
                <span>View Lead</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
