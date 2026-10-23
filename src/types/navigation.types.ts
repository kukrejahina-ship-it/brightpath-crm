import { ComponentType, CSSProperties } from 'react'

export type UserRole = 'admin' | 'manager' | 'counsellor'

export interface NavItem {
  title: string
  href: string
  icon: ComponentType<{
    size?: number
    className?: string
    color?: string
    style?: CSSProperties
  }>
  badge?: string | number
  badgeVariant?: 'default' | 'warning' | 'success' | 'brand'
  roles?: UserRole[]
  description?: string
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

export interface UserProfileSummary {
  id: string
  fullName: string
  email: string
  role: UserRole
  avatarUrl?: string
}
