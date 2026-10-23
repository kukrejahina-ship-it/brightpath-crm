import React, { useState } from 'react'
import { GraduationCap, ArrowRight, Lock, Mail, Sparkles } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Phase 4 will bind this to supabase.auth.signInWithPassword()
    navigate('/dashboard')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#090d16',
        padding: '1.5rem',
        position: 'relative'
      }}
    >
      {/* Background ambient radial glow */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.12) 0%, rgba(9, 13, 22, 0) 70%)',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none'
        }}
      />

      <div
        className="card-surface"
        style={{
          width: '100%',
          maxWidth: '420px',
          padding: '2.25rem',
          zIndex: 1,
          backgroundColor: '#0f172a',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7)'
        }}
      >
        {/* Logo and Academy Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              margin: '0 auto 0.875rem auto',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(2, 132, 199, 0.4)',
              color: '#ffffff'
            }}
          >
            <GraduationCap size={24} />
          </div>
          <h1 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.025em', margin: 0 }}>
            BrightPath Academy
          </h1>
          <p style={{ fontSize: '0.8125rem', color: '#94a3b8', marginTop: '0.35rem' }}>
            Inquiry-to-Admission Staff Portal
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#cbd5e1',
                marginBottom: '0.375rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}
            >
              Staff Email
            </label>
            <div style={{ position: 'relative' }}>
              <Mail
                size={16}
                color="#64748b"
                style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="email"
                required
                placeholder="counsellor@brightpath.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-base"
                style={{ paddingLeft: '2.25rem' }}
              />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
              <label
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#cbd5e1',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}
              >
                Password
              </label>
            </div>
            <div style={{ position: 'relative' }}>
              <Lock
                size={16}
                color="#64748b"
                style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-base"
                style={{ paddingLeft: '2.25rem' }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', padding: '0.65rem', marginTop: '0.5rem', fontSize: '0.875rem' }}
          >
            <span>Sign In to CRM</span>
            <ArrowRight size={16} />
          </button>
        </form>

        {/* Demo Roles Note */}
        <div
          style={{
            marginTop: '1.5rem',
            padding: '0.75rem',
            borderRadius: '6px',
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.75rem',
            color: '#94a3b8'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#38bdf8', fontWeight: 600 }}>
            <Sparkles size={13} />
            <span>Multi-User Auth (Phase 4)</span>
          </div>
          <p style={{ margin: '0.35rem 0 0 0', lineHeight: 1.4 }}>
            Supabase Auth with role-based policies (Administrator, Manager, Counsellor).
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
          <Link to="/dashboard" style={{ fontSize: '0.8125rem', color: '#38bdf8', fontWeight: 500 }}>
            ← Return to Dashboard Preview
          </Link>
        </div>
      </div>
    </div>
  )
}
