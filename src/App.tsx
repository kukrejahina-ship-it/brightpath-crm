import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { DashboardPage } from './pages/DashboardPage'
import { LeadsPage } from './pages/LeadsPage'
import { FollowUpsPage } from './pages/FollowUpsPage'
import { SettingsPage } from './pages/SettingsPage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  // Check if environment variables are configured
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
  const isSupabaseConfigured = Boolean(
    supabaseUrl &&
    supabaseKey &&
    !supabaseUrl.includes('your-project-id') &&
    !supabaseKey.includes('your-public-client-key')
  )

  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone Authentication Route (No Sidebar/Header) */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Application Layout Shell */}
        <Route
          element={
            <AppLayout
              currentRole="admin"
              userName="Sarah Jenkins"
              userEmail="sarah.j@brightpath.edu"
              isSupabaseConfigured={isSupabaseConfigured}
            />
          }
        >
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/follow-ups" element={<FollowUpsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
