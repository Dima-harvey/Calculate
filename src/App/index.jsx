import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'


import Loader from '@/components/Loader'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'
import GlobalStyles from '@/globalStyles'


const HomePage = lazy(() => import('@/pages/Home'))
const SettingsPage = lazy(() => import('@/pages/Settings'))

export default () => (
  <Suspense fallback={<Loader />}>
    <Switch>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Route
        exact
        path={HOME_PAGE_ROUTE}
        component={HomePage}
      />
        <Route
        exact
        path={SETTINGS_PAGE_ROUTE}
        component={SettingsPage}
      />
    </ThemeProvider >
    </Switch>
  </Suspense>
)
