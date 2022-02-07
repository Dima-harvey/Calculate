import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'
import Loader from '@/components/Loader/components'

const HomePage = lazy(() => import('@/pages/Home/components'))
const SettingsPage = lazy(() => import('@/pages/Settings/components'))

const App = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE}
              component={HomePage} />
      <Route exact path={SETTINGS_PAGE_ROUTE}
              component={SettingsPage} />
    </Switch>
  </Suspense>
)

export default App