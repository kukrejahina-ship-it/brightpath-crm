import React from 'react'
import {
  Users,
  UserCheck,
  AlertTriangle,
  TrendingUp,
  Clock,
  ArrowRight,
  Phone,
  Calendar
} from 'lucide-react'
import { StatusBadge } from '../components/layout/StatusBadge'
import { Link } from 'react-router-dom'

export const DashboardPage: React.FC = () => {
  // Sample institutional dataset for Phase 1 visual verification
  const metrics = {
    totalLeads: 34,
    newLeads: 9,
    convertedLeads: 7,
    overdueFollowUps: 3,
    conversionRate: '20.6%'
  }

  const pipelineStages = [
    { name: 'New Inquiries', count: 9, percentage: 26, color: '#38bdf8' },
    { name: 'Contacted', count: 11, percentage: 32, color: '#818cf8' },
    { name: 'Qualified', count: 7, percentage: 21, color: '#34d399' },
    { name: 'Converted', count: 7, percentage: 21, color: '#10b981' },
    { name: 'Lost', count: 4, percentage: 12, color: '#fb7185' }
  ]

  const urgentFollowUps = [
    {
      id: '1',
      studentName: 'Aarav Sharma',
      course: 'Full Stack Engineering',
      due: 'Overdue by 2 hrs',
      note: 'Requested syllabus review and scholarship information',
      counsellor: 'Priya Sen',
      status: 'overdue'
    },
    {
      id: '2',
      studentName: 'Ananya Rao',
      course: 'Data Science & AI',
      due: 'Today, 3:30 PM',
      note: 'Call back after college lecture to finalize batch timing',
      counsellor: 'Rahul Verma',
      status: 'pending'
    },
    {
      id: '3',
      studentName: 'Rohan Mehta',
      course: 'Cloud Architecture',
      due: 'Today, 5:00 PM',
      note: 'Parent inquiry regarding weekend batch schedule',
      counsellor: 'Priya Sen',
      status: 'pending'
    }
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Top Banner / Welcome context */}
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
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#f8fafc',
              letterSpacing: '-0.02em',
              margin: 0
            }}
          >
            Admissions Overview
          </h2>
          <p style={{ fontSize: '0.8125rem', color: '#64748b', margin: '0.2rem 0 0 0' }}>
            Fall 2026 Admissions Cohort • Performance reconciled across team counsellors
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span
            style={{
              fontSize: '0.75rem',
              color: '#94a3b8',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '0.3rem 0.6rem',
              borderRadius: '6px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            Updated just now
          </span>
        </div>
      </div>

      {/* KPI Cards Grid (High Density) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}
      >
        {/* Card 1: Total Leads */}
        <div className="card-surface" style={{ padding: '1rem 1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Total Inquiries
            </span>
            <Users size={16} color="#38bdf8" />
          </div>
          <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <span className="tabular" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#f8fafc' }}>
              {metrics.totalLeads}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 500 }}>
              +12% this cohort
            </span>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
            Across all acquisition sources
          </div>
        </div>

        {/* Card 2: New Inquiries */}
        <div className="card-surface" style={{ padding: '1rem 1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              New Leads
            </span>
            <Clock size={16} color="#38bdf8" />
          </div>
          <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <span className="tabular" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#38bdf8' }}>
              {metrics.newLeads}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              Awaiting first contact
            </span>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
            Action required within 4 hours
          </div>
        </div>

        {/* Card 3: Converted */}
        <div className="card-surface" style={{ padding: '1rem 1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Enrolled / Converted
            </span>
            <UserCheck size={16} color="#34d399" />
          </div>
          <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <span className="tabular" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#34d399' }}>
              {metrics.convertedLeads}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 500 }}>
              {metrics.conversionRate} rate
            </span>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
            Confirmed student admissions
          </div>
        </div>

        {/* Card 4: Overdue Follow-ups */}
        <div
          className="card-surface"
          style={{
            padding: '1rem 1.25rem',
            borderColor: metrics.overdueFollowUps > 0 ? 'rgba(244, 63, 94, 0.3)' : undefined,
            backgroundColor: metrics.overdueFollowUps > 0 ? 'rgba(244, 63, 94, 0.05)' : undefined
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fb7185', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Overdue Outreach
            </span>
            <AlertTriangle size={16} color="#fb7185" />
          </div>
          <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <span className="tabular" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fb7185' }}>
              {metrics.overdueFollowUps}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#fb7185', fontWeight: 500 }}>
              Urgent action
            </span>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
            Past due follow-up calls
          </div>
        </div>
      </div>

      {/* Main 2-Column Split: Pipeline Stages vs Urgent Follow-ups */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginTop: '0.5rem'
        }}
      >
        {/* Left Column: Pipeline Breakdown */}
        <div className="card-surface" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#f8fafc', margin: 0 }}>
                Inquiry Stage Distribution
              </h3>
              <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0.15rem 0 0 0' }}>
                Progression of active students through the enrollment funnel
              </p>
            </div>
            <TrendingUp size={16} color="#64748b" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {pipelineStages.map((stage) => (
              <div key={stage.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', marginBottom: '0.375rem' }}>
                  <span style={{ color: '#cbd5e1', fontWeight: 500 }}>{stage.name}</span>
                  <span className="tabular" style={{ color: '#94a3b8' }}>
                    <strong style={{ color: '#f8fafc' }}>{stage.count}</strong> leads ({stage.percentage}%)
                  </span>
                </div>
                {/* Slim progress bar */}
                <div
                  style={{
                    height: '6px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${stage.percentage}%`,
                      backgroundColor: stage.color,
                      borderRadius: '9999px'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '1.25rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Formula: (Converted ÷ Total Leads) × 100
            </span>
            <Link
              to="/leads"
              style={{
                fontSize: '0.8125rem',
                color: '#38bdf8',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              <span>View lead table</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right Column: Urgent Follow-ups Queue */}
        <div className="card-surface" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#f8fafc', margin: 0 }}>
                Immediate Follow-up Queue
              </h3>
              <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0.15rem 0 0 0' }}>
                Priority outreach scheduled for today
              </p>
            </div>
            <Calendar size={16} color="#64748b" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {urgentFollowUps.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: '0.75rem 0.875rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(15, 23, 42, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#f8fafc' }}>
                    {item.studentName}
                  </span>
                  <StatusBadge status={item.status} size="sm" />
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  {item.course} • <strong style={{ color: '#cbd5e1' }}>{item.due}</strong>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0, fontStyle: 'italic' }}>
                  "{item.note}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                  <span style={{ fontSize: '0.7rem', color: '#64748b' }}>
                    Assigned: {item.counsellor}
                  </span>
                  <button
                    className="btn-secondary"
                    style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}
                    onClick={() => alert(`Phase 7 will complete follow-up for ${item.studentName}`)}
                  >
                    <Phone size={12} />
                    <span>Quick Log</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '1rem',
              paddingTop: '0.75rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              textAlign: 'center'
            }}
          >
            <Link
              to="/follow-ups"
              style={{
                fontSize: '0.8125rem',
                color: '#38bdf8',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span>Open full follow-up queue</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
