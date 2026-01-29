export const radius = {
  none: 0,
  xs2: 8,
  xs: 12,
  s: 24,
  m: 32,
  l: 48,
  xl: 64,
  xl2: 96,
  xl3: 120,
  full: 999,
} as const

export type Radius = keyof typeof radius
