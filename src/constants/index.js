import AddCommand from '@/utils/AddComand'
import SubtractCommand from '@/utils/SubtractCommand'
import DivideCommand from '@/utils/DivideCommand'
import MultiplyCommand from '@/utils/MultyCommand'
import theme from '@/theme'

export * from './actions'
export * from './router'

export const LOADER_SIZE = 100

export const CLEAR = 'C'
export const MULTY = '*'
export const SUBSTARCT = '-'
export const SUM = '+'
export const EQUALS = '='
export const DIVIDE = '/'
export const LEFTBRACKET = '('
export const RIGHTBRACKET = ')'
export const CLEAR_ALL = 'CE'
export const buttons = [
  CLEAR,
  '7',
  '8',
  '9',
  MULTY,
  SUBSTARCT,
  '4',
  '5',
  '6',
  DIVIDE,
  SUM,
  '1',
  '2',
  '3',
  EQUALS,
  '.',
  LEFTBRACKET,
  '0',
  RIGHTBRACKET,
  CLEAR_ALL,
]

export const BUTTONS_OPERATOR = [
  { name: MULTY, Operation: MultiplyCommand },
  { name: SUBSTARCT, Operation: SubtractCommand },
  { name: DIVIDE, Operation: DivideCommand },
  { name: SUM, Operation: AddCommand },
]

export const SIGNS = [SUM, SUBSTARCT, MULTY, DIVIDE, EQUALS, CLEAR, CLEAR_ALL]

export const OPTIONS_INFO = [
  { color: theme.colors.white, name: 'Light theme' },
  { color: theme.colors.green, name: 'Dark theme' },
]
