import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import Profile from './pages/Profile'

import Vistalfa from './pages/Vistalfa'
import TabJob from './pages/TabJob'
import PackageFacil from './pages/PackageFacil'
import DevoluctionComLR from './pages/DevoluctionComLR'
import DevoluctionSemLR from './pages/DevoluctionSemLR'
import Exchange from './pages/Exchange'

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
        <Route path="/package+facil" component={PackageFacil} />
        <Route path="/devoluction+com+lr" component={DevoluctionComLR} />
        <Route path="/devoluction+sem+lr" component={DevoluctionSemLR} />
        <Route path="/exchange" component={Exchange} />     
      </Switch>
    </BrowserRouter>
  )
}