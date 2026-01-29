export const effects = {
  E0: 'none',
  E1: '0px 2px 4px rgba(27, 28, 29, 0.04)',
  E2: '0px 16px 32px -12px rgba(88, 92, 95, 0.10)',
  E3: '0px 16px 40px -8px rgba(88, 92, 95, 0.16)',
  E4: '0px 16px 40px rgba(88, 92, 95, 0.16)',
  E5: 'inset 0px 2px 4px rgba(27, 28, 29, 0.04)',
  E6: 'inset 0px 16px 32px -12px rgba(88, 92, 95, 0.10)',
  E7: 'inset 0px 25px 36.5px -7px rgba(88, 92, 95, 0.16)',
  E8: 'inset 0px 32px 33.2px -7px rgba(88, 92, 95, 0.16)',
  E9: '0px 4px 20px -5px rgba(0, 146, 255, 0.12)',
} as const

export type Effect = keyof typeof effects
