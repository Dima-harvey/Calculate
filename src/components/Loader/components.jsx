import React from 'react'

import theme from '@/theme'
import { LOADER_SIZE } from '@/constants'

import { Loaders } from './styles'

const Loader = () => {
  return (
    <Loaders
      type="Bars"
      color={theme.colors.secondary}
      height={LOADER_SIZE}
      width={LOADER_SIZE}
    />
  )
}

export default Loader