// ─── Brand + Branch structure (demo data for Physio Academy) ─────────────────
// Fictional multi-brand fitness group used to demonstrate the LMS. Not real data.

export const BRANDS = {
  summit: {
    id: 'summit',
    name: 'Summit',
    city: 'Demo City',
    color: '#3B82F6',
    branches: ['Downtown Female', 'Downtown Male', 'Riverside Male'],
  },
  pulse: {
    id: 'pulse',
    name: 'Pulse',
    city: 'Demo City',
    color: '#10B981',
    branches: [
      'North Male', 'North Female',
      'East Male', 'East Female',
      'West Male', 'West Female',
      'Central Female',
    ],
  },
  harbor: {
    id: 'harbor',
    name: 'Harbor',
    city: 'Port Town',
    color: '#8B5CF6',
    branches: ['Marina Female', 'Bayview Male', 'Bayview Female'],
  },
} as const

export type BrandId = keyof typeof BRANDS

export const ALL_BRANCHES: string[] = Object.values(BRANDS).flatMap((b) => b.branches)

/** Returns the brand that contains a given branch, or null */
export function getBrandForBranch(branch: string) {
  return Object.values(BRANDS).find((b) => (b.branches as readonly string[]).includes(branch)) ?? null
}

/** Groups an array of branches by brand */
export function groupBranchesByBrand(branches: string[]) {
  const result: { brand: typeof BRANDS[BrandId]; branches: string[] }[] = []
  for (const brand of Object.values(BRANDS)) {
    const inBrand = branches.filter((b) => (brand.branches as readonly string[]).includes(b))
    if (inBrand.length > 0) result.push({ brand, branches: inBrand })
  }
  return result
}

// ─── Roles ───────────────────────────────────────────────────────────────────

export const ROLES = [
  { value: 'trainer',     label: 'Trainer',      color: '#6B7280', bg: '#F3F4F6' },
  { value: 'manager',     label: 'Manager',      color: '#D97706', bg: '#FEF3C7' },
  { value: 'director',    label: 'Director',     color: '#2563EB', bg: '#DBEAFE' },
  { value: 'admin',       label: 'Admin',        color: '#7C3AED', bg: '#EDE9FE' },
  { value: 'super_admin', label: 'Super Admin',  color: '#4F46E5', bg: '#EEF2FF' },
] as const

export type RoleValue = typeof ROLES[number]['value']

export function getRoleInfo(role: string) {
  return ROLES.find((r) => r.value === role) ?? ROLES[0]
}

export function canAccessAdmin(role: string) {
  return ['super_admin', 'admin'].includes(role)
}

export function canAccessAnalytics(role: string) {
  return ['super_admin', 'admin', 'director', 'manager'].includes(role)
}
