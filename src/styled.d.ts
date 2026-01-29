import 'styled-components'
import type { commonTheme } from '@/theme'

type Theme = typeof commonTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
