import React from 'react'
import {
  ShieldCheck,
  Database,
  User
} from 'lucide-react'

export const SettingsPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '960px' }}>
      {/* Header */}
      <div style={{ paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f8fafc', margin: 0 }}>
          System Settings & Diagnostics
        </h2>
        <p style={{ fontSize: '0.8125rem', color: '#64748b', margin: '0.2rem 0 0 0' }}>
          User role governance, security controls and environment status
        </p>
      </div>

      {/* User Profile Card */}
      <div className="card-surface" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <User size={18} color="#38bdf8" />
          <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#f8fafc', margin: 0 }}>
            Active Profile & Session
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.6875rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
              Full Name
            </div>
            <div style={{ fontSize: '0.875rem', color: '#f8fafc', marginTop: '0.2rem', fontWeight: 500 }}>
              Sarah Jenkins
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.6875rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
              Email Address
            </div>
            <div style={{ fontSize: '0.875rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
              sarah.j@brightpath.edu
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.6875rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
              Assigned Role
            </div>
            <div style={{ marginTop: '0.2rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#fbbf24',
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  padding: '0.1rem 0.5rem',
                  borderRadius: '4px'
                }}
              >
                Administrator
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: '1rem',
            padding: '0.75rem',
            borderRadius: '6px',
            backgroundColor: 'rgba(15, 23, 42, 0.5)',
            fontSize: '0.75rem',
            color: '#94a3b8',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <strong style={{ color: '#f8fafc' }}>Security Note (Section 11):</strong> In accordance with
          workshop security rules, user roles cannot be self-modified via client-side UI requests. Role
          promotions must be performed through verified database migrations or an admin bootstrap script.
        </div>
      </div>

      {/* Role Permissions Matrix */}
      <div className="card-surface" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <ShieldCheck size={18} color="#34d399" />
          <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#f8fafc', margin: 0 }}>
            Role Access Boundaries (RLS Matrix)
          </h3>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', color: '#64748b', textAlign: 'left' }}>
                <th style={{ padding: '0.5rem 0.75rem' }}>Capability</th>
                <th style={{ padding: '0.5rem 0.75rem' }}>Counsellor</th>
                <th style={{ padding: '0.5rem 0.75rem' }}>Manager</th>
                <th style={{ padding: '0.5rem 0.75rem' }}>Administrator</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '0.6rem 0.75rem', color: '#f8fafc' }}>View Own / Assigned Leads</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#34d399' }}>✓ Permitted</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#34d399' }}>✓ Permitted</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#34d399' }}>✓ Permitted</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '0.6rem 0.75rem', color: '#f8fafc' }}>View Team-Wide Pipeline</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#fb7185' }}>✗ Restricted</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#34d399' }}>✓ Permitted</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#34d399' }}>✓ Permitted</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '0.6rem 0.75rem', color: '#f8fafc' }}>Reassign Lead Counsellor</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#fb7185' }}>✗ Restricted</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#34d399' }}>✓ Permitted</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#34d399' }}>✓ Permitted</td>
              </tr>
              <tr>
                <td style={{ padding: '0.6rem 0.75rem', color: '#f8fafc' }}>Modify User Roles / System</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#fb7185' }}>✗ Restricted</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#fb7185' }}>✗ Restricted</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#34d399' }}>✓ Permitted (SQL)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Environment Diagnostics */}
      <div className="card-surface" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Database size={18} color="#818cf8" />
          <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#f8fafc', margin: 0 }}>
            Backend & Environment Diagnostics
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', backgroundColor: 'rgba(15, 23, 42, 0.4)', borderRadius: '6px' }}>
            <span style={{ fontSize: '0.8125rem', color: '#cbd5e1' }}>VITE_SUPABASE_URL</span>
            <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontFamily: 'monospace' }}>
              Pending Phase 3 Connection
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', backgroundColor: 'rgba(15, 23, 42, 0.4)', borderRadius: '6px' }}>
            <span style={{ fontSize: '0.8125rem', color: '#cbd5e1' }}>VITE_SUPABASE_ANON_KEY</span>
            <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontFamily: 'monospace' }}>
              Pending Phase 3 Connection
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', backgroundColor: 'rgba(15, 23, 42, 0.4)', borderRadius: '6px' }}>
            <span style={{ fontSize: '0.8125rem', color: '#cbd5e1' }}>PostgreSQL Row Level Security</span>
            <span style={{ fontSize: '0.75rem', color: '#38bdf8' }}>
              Enforced via Migration (Phase 2)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
