import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import Profile from './pages/Profile'

import Vistalfa from './pages/Vistalfa'
import TabJob from './pages/TabJob'
import IncidentsTabJob from './pages/PagesUtils/IncidentsTabJob'

import PackageFacil from './pages/PackageFacil'
import IncidentsPackage from './pages/PagesUtils/IncidentsPackage'

import DevoluctionComLR from './pages/DevoluctionComLR'
import DevoluctionSemLR from './pages/DevoluctionSemLR'
import IncidentsDevoluction from './pages/PagesUtils/IncidentsDevoluction'

import Exchange from './pages/Exchange'
import IncidentsExchange from './pages/PagesUtils/IncidentsExchange'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/resetpass" component={ResetPassword} />

        <Route path="/profile" component={Profile} />

        <Route path="/vistalfa" component={Vistalfa} />
        <Route path="/tab+job" component={TabJob} />
        <Route path="/tab+job+incidents" component={IncidentsTabJob} />

        <Route path="/package+facil" component={PackageFacil} />
        <Route path="/package+incidents" component={IncidentsPackage} />

        <Route path="/devoluction+com+lr" component={DevoluctionComLR} />
        <Route path="/devoluction+sem+lr" component={DevoluctionSemLR} />
        <Route path="/devoluction+incidents" component={IncidentsDevoluction} />

        <Route path="/exchange" component={Exchange} />
        <Route path="/exchange+incidents" component={IncidentsExchange} />  

      </Switch>
    </BrowserRouter>
  )
}