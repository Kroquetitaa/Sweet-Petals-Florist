export const stroke = {
  s: 0,
  m: 1,
  l: 2,
  xl: 3,
  xl2: 4,
  xl3: 5,
  xl4: 6,
  xl5: 8,
  xl6: 10,
  xl7: 12,
} as const

export type Stroke = keyof typeof stroke
