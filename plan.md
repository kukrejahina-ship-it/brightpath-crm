# BrightPath CRM — Master Execution Plan & Feature Tracker

This document serves as the project context and progress tracking reference for building **BrightPath CRM**, an inquiry-to-admission management system for **BrightPath Academy**.

---

## 1. Project Context & Objectives

* **Business Problem**: Staff rely on scattered spreadsheets and chat messages, resulting in forgotten student inquiries, duplicate entries, ambiguous ownership, and zero visibility into conversion rates.
* **Core Roles**:
  * **Administrator**: Manages operational settings, system access, and user roles (role changes strictly enforced via database/SQL, never client-side alone).
  * **Manager**: Reviews team pipeline, monitors overdue follow-ups, reassigns leads across counsellors.
  * **Counsellor**: Manages assigned or created leads, records communication history, updates pipeline statuses, and completes scheduled follow-ups.
* **Primary Stack**: React 19 + TypeScript + Vite • Supabase (PostgreSQL + Auth + RLS) • GitHub • Vercel.

---

## 2. The 5-Stage Feature Lifecycle Standard

Every feature is developed in isolation and adheres to this strict delivery loop before proceeding to the next:

```text
[1. Develop] ──> [2. Local Test] ──> [3. Local Verify] ──> [4. Deploy to Vercel] ──> [5. Live Verify] ──> [Next Feature]
```

1. **Develop**: Author required TypeScript components, typed service functions, and/or SQL migrations.
2. **Local Test**: Execute static analysis scripts (`npm run typecheck`, `npm run build`, `npm run lint`).
3. **Local Verify**: Validate functional requirements and edge cases on `localhost:5173`.
4. **Deploy**: Stage only intended files (never secrets), commit with conventional messages, push to GitHub `main` branch to trigger Vercel deployment.
5. **Live Verify**: Execute acceptance tests on the live Vercel URL to confirm build and runtime parity.

---

## 3. Order-Wise Feature Phases & Progress Tracker

- [x] **Phase 0: Baseline & Secure Foundation** *(Completed)*
  - **Goal**: Repository hygiene, TypeScript toolchain, and core dependencies.
  - **Delivered**:
    - `.gitignore` secured (`.env`, `.env.*.local`, lock files excluded).
    - `.env.example` created with public placeholders.
    - TypeScript installed and configured (`tsconfig.json`, `src/vite-env.d.ts`).
    - Migrated to `src/main.tsx` and `src/App.tsx`.
    - Dependencies installed: `@supabase/supabase-js`, `react-router-dom`, `lucide-react`, `typescript`, `@types/node`.
    - Commit `0585dd3` pushed to GitHub.

- [ ] **Phase 1: App Shell, Design System & Responsive Navigation**
  - **Goal**: Modern SaaS layout with responsive navigation and route structure.
  - **Scope**:
    - Navy/slate design system & typography in `src/index.css`.
    - Sidebar navigation (Dashboard, Leads, Follow-ups, Settings).
    - Mobile drawer navigation with backdrop and accessible focus.
    - Header with user profile/role badge placeholder.
    - Page shells for Dashboard, Leads, Follow-ups, Settings, Login.
    - React Router DOM configuration.
  - **Acceptance Criteria**: Desktop sidebar persistent; mobile drawer toggles cleanly; routes switch without errors.

- [ ] **Phase 2: Database Schema & Row-Level Security (RLS) Migrations**
  - **Goal**: Repeatable PostgreSQL migrations with complete schema and security policies.
  - **Scope**:
    - Migration `supabase/migrations/20261023_init_crm.sql`:
      - `profiles` (id references auth.users, full_name, role ['admin', 'manager', 'counsellor']).
      - `leads` (id, full_name, email, phone, course_interest, source, status, lost_reason, notes, assigned_to, created_by).
      - `follow_ups` (id, lead_id, assigned_to, due_at, note, status ['pending', 'completed', 'cancelled'], completed_at, created_by).
      - `activities` (id, lead_id, actor_id, activity_type, description, metadata, created_at).
    - Database constraints, indexes, and automated trigger for new profile provisioning.
    - RLS enabled on all 4 tables with granular SELECT/INSERT/UPDATE/DELETE policies.
    - `supabase/seed.sql` for optional workshop demo records.
  - **Acceptance Criteria**: SQL executes cleanly in Supabase SQL Editor; RLS active on all tables.

- [ ] **Phase 3: Supabase Client Singleton & Environment Guard**
  - **Goal**: Typed Supabase client with runtime environment variable validation.
  - **Scope**:
    - `src/lib/supabaseClient.ts` with explicit credential checks.
    - `src/types/database.types.ts` containing database types.
    - Visual setup guard component when `.env` is unconfigured (truthful error state instead of fake data or crash).
  - **Acceptance Criteria**: App displays helpful setup guidance when keys are missing; initializes cleanly when keys are present.

- [ ] **Phase 4: Authentication & User Role Lifecycle**
  - **Goal**: Complete multi-user auth lifecycle with role resolution and route protection.
  - **Scope**:
    - `AuthContext` and `useAuth` hook managing session and profile state.
    - Login / Registration form with input validation and loading states.
    - Auto-provision `counsellor` profile upon user signup.
    - Document admin bootstrap SQL procedure.
    - `ProtectedRoute` component for authenticated routes.
  - **Acceptance Criteria**: User can register, sign in, sign out; session persists on refresh; profile role accurately detected.

- [ ] **Phase 5: Lead Management Core (CRUD & Status Progression)**
  - **Goal**: Full inquiry lifecycle from creation to qualification and conversion/loss.
  - **Scope**:
    - `leads.service.ts` for typed database queries.
    - Lead listing table/card view with status badges and counsellor tags.
    - Lead creation modal with validation (name, phone, course, source).
    - Status transition flow (`New` -> `Contacted` -> `Qualified` -> `Converted` / `Lost`).
    - Enforce `lost_reason` requirement when status is set to `Lost`.
    - Lead detail view.
  - **Acceptance Criteria**: Create, edit, and status updates persist to Supabase; double-submissions prevented.

- [ ] **Phase 6: Lead Search, Multi-Filter & Assignment Management**
  - **Goal**: High-speed discovery and team distribution of leads.
  - **Scope**:
    - Debounced live search across name, email, and phone.
    - Multi-select/dropdown filters (status, source, counsellor).
    - "Reset Filters" action button.
    - Counsellor assignment and reassignment functionality (Manager/Admin).
    - Empty state when search yields no results.
  - **Acceptance Criteria**: Combined filters return accurate record subsets; resetting filters restores full list.

- [ ] **Phase 7: Follow-up Scheduling & Overdue Engine**
  - **Goal**: Reminder workflow preventing dropped student communication.
  - **Scope**:
    - `followups.service.ts` for schedule, list, complete operations.
    - Schedule follow-up modal (`due_at`, note, assignee).
    - Overdue detection logic: `status == 'pending' AND due_at < now()`.
    - Follow-ups tabs: Upcoming, Overdue, Completed.
    - Single-click "Mark Completed" setting `completed_at` and clearing from overdue.
    - Direct navigation from follow-up item to parent lead.
  - **Acceptance Criteria**: Overdue badge triggers strictly on past due dates; completion removes overdue status immediately.

- [ ] **Phase 8: Activity Audit Trail Engine**
  - **Goal**: Immutable interaction log on every lead.
  - **Scope**:
    - `activities.service.ts` logging events: lead created, status changed, note added, follow-up scheduled/completed.
    - Manual note-adding component on lead detail view.
    - Chronological timeline component with relative timestamps.
  - **Acceptance Criteria**: Status changes and notes automatically appear on the lead's activity feed.

- [ ] **Phase 9: Reconciled Analytics & Dashboard**
  - **Goal**: Real-time management visibility with reconciled metrics.
  - **Scope**:
    - Top KPI cards: Total Accessible Leads, New Leads, Converted Leads, Overdue Follow-ups, Conversion Rate % (with division-by-zero safeguard).
    - Leads distribution by status bar/chart.
    - Leads acquisition by source breakdown.
    - Upcoming follow-ups widget.
  - **Acceptance Criteria**: Dashboard KPIs match lead table counts exactly; zero dummy data disguised as live analytics.

- [ ] **Phase 10: Multi-Role RBAC & Security Boundary Verification**
  - **Goal**: Validate security boundaries across Admin, Manager, and Counsellor.
  - **Scope**:
    - Verify counsellor accounts can only view/edit assigned or created leads.
    - Verify manager/admin accounts have team-wide access.
    - Verify client cannot escalate role via profile updates.
    - Run direct Supabase client policy tests with multiple test users.
  - **Acceptance Criteria**: Unauthorized reads/writes rejected by PostgreSQL RLS.

- [ ] **Phase 11: Production Hardening, Handover & Documentation**
  - **Goal**: Final audit, accessibility, performance, and student handover documentation.
  - **Scope**:
    - Accessibility audit (ARIA labels, keyboard navigation, visible focus).
    - Responsive layout validation (mobile, tablet, desktop).
    - Production build verification (`npm run build`).
    - Handover `README.md` covering setup, schema, RLS, and deployment.
  - **Acceptance Criteria**: 100% build pass; all acceptance tests verified on live Vercel deployment.

---

## 4. Architecture Reference

```text
Browser Client (React 19 + TypeScript + Vite)
       │
       ▼
Typed Service Layer (leads, followups, profiles, activities)
       │
       ▼
Supabase Client Singleton (src/lib/supabaseClient.ts)
       │
       ├──> Supabase Auth (Session, JWT)
       └──> PostgreSQL (Row Level Security enabled on all tables)
```

---

## 5. Security & Invariant Rules

1. **No Client Role Promotion**: Users cannot edit their own `role` column in `profiles`.
2. **Zero Hardcoded Secrets**: Client uses only `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
3. **Truthful Error Handling**: Database failures show clean, actionable UI notices (never suppressed with empty catch blocks or fake success states).
4. **Data Integrity**: Database constraints enforce valid enum-like values for status, source, and role.
