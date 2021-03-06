import React from 'react'
import { Switch, Route } from "react-router-dom";
import Homepage from './containers/homepage'
import Patients from './containers/patients'
import Appointments from './containers/appointments'
import Footer from './components/footer'
import FixedIcon from './components/iconFixed'
import Privacy from './containers/privacyPolicy'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component={Homepage}/>
        <Route exact path='/patients' component={Patients}/>
        <Route exact path='/appointments' component={Appointments}/>
        <Route exact path='/privacy-policy' component={Privacy}/>
      </Switch>
      <Footer/>
      <FixedIcon/>
    </div>
  )
}

export default App

