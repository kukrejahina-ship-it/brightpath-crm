import React, { useState } from 'react'
import {
  Search,
  RotateCcw,
  Plus,
  MoreHorizontal
} from 'lucide-react'
import { StatusBadge } from '../components/layout/StatusBadge'

interface LeadRow {
  id: string
  fullName: string
  phone: string
  email: string
  courseInterest: string
  source: string
  status: string
  assignedTo: string
  nextFollowUp: string
  createdAt: string
}

export const LeadsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('ALL')
  const [selectedSource, setSelectedSource] = useState('ALL')

  // Sample institutional dataset for Phase 1 verification
  const sampleLeads: LeadRow[] = [
    {
      id: '1',
      fullName: 'Aarav Sharma',
      phone: '+91 98765 43210',
      email: 'aarav.sharma@example.com',
      courseInterest: 'Full Stack Engineering',
      source: 'Website',
      status: 'Qualified',
      assignedTo: 'Priya Sen',
      nextFollowUp: 'Today, 2:00 PM',
      createdAt: '22 Oct 2026'
    },
    {
      id: '2',
      fullName: 'Ananya Rao',
      phone: '+91 98111 22334',
      email: 'ananya.rao@example.com',
      courseInterest: 'Data Science & AI',
      source: 'Walk-in',
      status: 'New',
      assignedTo: 'Rahul Verma',
      nextFollowUp: 'Today, 3:30 PM',
      createdAt: '23 Oct 2026'
    },
    {
      id: '3',
      fullName: 'Rohan Mehta',
      phone: '+91 97222 33445',
      email: 'rohan.m@example.com',
      courseInterest: 'Cloud Architecture',
      source: 'WhatsApp',
      status: 'Contacted',
      assignedTo: 'Priya Sen',
      nextFollowUp: 'Today, 5:00 PM',
      createdAt: '21 Oct 2026'
    },
    {
      id: '4',
      fullName: 'Ishita Kapoor',
      phone: '+91 99333 44556',
      email: 'ishita.k@example.com',
      courseInterest: 'UI/UX Product Design',
      source: 'Referral',
      status: 'Converted',
      assignedTo: 'Sarah Jenkins',
      nextFollowUp: 'Completed',
      createdAt: '19 Oct 2026'
    },
    {
      id: '5',
      fullName: 'Vikramaditya Nair',
      phone: '+91 95444 55667',
      email: 'vikram.nair@example.com',
      courseInterest: 'Cybersecurity Analyst',
      source: 'Phone Call',
      status: 'Lost',
      assignedTo: 'Rahul Verma',
      nextFollowUp: 'None',
      createdAt: '18 Oct 2026'
    }
  ]

  const filteredLeads = sampleLeads.filter((lead) => {
    const matchesSearch =
      lead.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) ||
      lead.courseInterest.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus =
      selectedStatus === 'ALL' || lead.status.toLowerCase() === selectedStatus.toLowerCase()

    const matchesSource =
      selectedSource === 'ALL' || lead.source.toLowerCase() === selectedSource.toLowerCase()

    return matchesSearch && matchesStatus && matchesSource
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Page Header */}
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
            Student Inquiries & Prospects
          </h2>
          <p style={{ fontSize: '0.8125rem', color: '#64748b', margin: '0.2rem 0 0 0' }}>
            {filteredLeads.length} active leads displayed • Centralized intake registry
          </p>
        </div>
        <button
          className="btn-primary"
          onClick={() => alert('Phase 5 will open real Supabase lead creation form modal')}
        >
          <Plus size={16} />
          <span>Add New Lead</span>
        </button>
      </div>

      {/* Filter and Search Bar Toolbar */}
      <div
        className="card-surface"
        style={{
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}
      >
        {/* Search input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.65rem',
            borderRadius: '6px',
            backgroundColor: 'rgba(9, 13, 22, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            minWidth: '240px',
            flex: '1 1 240px'
          }}
        >
          <Search size={14} color="#64748b" />
          <input
            type="text"
            placeholder="Search student name, phone, course..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              width: '100%',
              fontSize: '0.8125rem',
              color: '#f8fafc'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{ fontSize: '0.75rem', color: '#94a3b8', padding: '0 0.25rem' }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Dropdowns */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {/* Status Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>Status:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              style={{
                backgroundColor: 'rgba(9, 13, 22, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#cbd5e1',
                padding: '0.35rem 0.6rem',
                borderRadius: '6px',
                fontSize: '0.8125rem',
                outline: 'none'
              }}
            >
              <option value="ALL">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Converted">Converted</option>
              <option value="Lost">Lost</option>
            </select>
          </div>

          {/* Source Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>Source:</span>
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              style={{
                backgroundColor: 'rgba(9, 13, 22, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#cbd5e1',
                padding: '0.35rem 0.6rem',
                borderRadius: '6px',
                fontSize: '0.8125rem',
                outline: 'none'
              }}
            >
              <option value="ALL">All Sources</option>
              <option value="Website">Website</option>
              <option value="Walk-in">Walk-in</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Phone Call">Phone Call</option>
              <option value="Referral">Referral</option>
            </select>
          </div>

          {/* Reset Filters */}
          <button
            onClick={() => {
              setSearchQuery('')
              setSelectedStatus('ALL')
              setSelectedSource('ALL')
            }}
            className="btn-ghost"
            style={{ padding: '0.35rem 0.6rem', fontSize: '0.75rem' }}
            title="Reset filters"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Leads Table Container */}
      <div className="card-surface" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '760px' }}>
          <thead>
            <tr
              style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: 'rgba(9, 13, 22, 0.4)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              <th style={{ padding: '0.75rem 1rem' }}>Student Name</th>
              <th style={{ padding: '0.75rem 1rem' }}>Course Interest</th>
              <th style={{ padding: '0.75rem 1rem' }}>Source</th>
              <th style={{ padding: '0.75rem 1rem' }}>Status</th>
              <th style={{ padding: '0.75rem 1rem' }}>Counsellor</th>
              <th style={{ padding: '0.75rem 1rem' }}>Next Outreach</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr
                key={lead.id}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                  transition: 'background-color 150ms ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {/* Name & Contact */}
                <td style={{ padding: '0.75rem 1rem' }}>
                  <div style={{ fontWeight: 600, color: '#f8fafc', fontSize: '0.875rem' }}>
                    {lead.fullName}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#64748b', marginTop: '0.15rem' }}>
                    <span className="tabular">{lead.phone}</span>
                  </div>
                </td>

                {/* Course */}
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#cbd5e1' }}>
                  {lead.courseInterest}
                </td>

                {/* Source */}
                <td style={{ padding: '0.75rem 1rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    {lead.source}
                  </span>
                </td>

                {/* Status Badge */}
                <td style={{ padding: '0.75rem 1rem' }}>
                  <StatusBadge status={lead.status} size="sm" />
                </td>

                {/* Counsellor Assignee */}
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#cbd5e1' }}>
                  {lead.assignedTo}
                </td>

                {/* Next Outreach */}
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.75rem', color: '#94a3b8' }}>
                  <span className="tabular">{lead.nextFollowUp}</span>
                </td>

                {/* Action dropdown button */}
                <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                  <button
                    className="btn-ghost"
                    style={{ padding: '0.3rem' }}
                    onClick={() => alert(`Phase 5 will open lead detail drawer for ${lead.fullName}`)}
                  >
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredLeads.length === 0 && (
          <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
            <p style={{ fontSize: '0.875rem' }}>No student inquiries match the selected criteria.</p>
            <button
              className="btn-secondary"
              style={{ marginTop: '0.75rem', fontSize: '0.75rem' }}
              onClick={() => {
                setSearchQuery('')
                setSelectedStatus('ALL')
                setSelectedSource('ALL')
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
