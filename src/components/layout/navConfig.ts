import {
  LayoutDashboard,
  Users,
  CalendarClock,
  Settings,
  GraduationCap
} from 'lucide-react'
import { NavGroup } from '../../types/navigation.types'

export const NAVIGATION_GROUPS: NavGroup[] = [
  {
    label: 'PIPELINE',
    items: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
        description: 'Conversion KPIs and pipeline health'
      },
      {
        title: 'Leads',
        href: '/leads',
        icon: Users,
        badge: '34',
        badgeVariant: 'brand',
        description: 'All student inquiries and active prospects'
      },
      {
        title: 'Follow-ups',
        href: '/follow-ups',
        icon: CalendarClock,
        badge: '3 Overdue',
        badgeVariant: 'warning',
        description: 'Scheduled reminders and pending outreach'
      }
    ]
  },
  {
    label: 'SYSTEM',
    items: [
      {
        title: 'Settings',
        href: '/settings',
        icon: Settings,
        description: 'Profile, team preferences and diagnostics'
      }
    ]
  }
]

export const BRAND_CONFIG = {
  name: 'BrightPath CRM',
  cohort: 'Admissions 2026',
  academy: 'BrightPath Academy',
  icon: GraduationCap
}
