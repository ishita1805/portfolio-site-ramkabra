import React from 'react'
import { Switch, Route } from "react-router-dom";
import Homepage from './containers/homepage'
import Patients from './containers/patients'
import Appointments from './containers/appointments'
import Footer from './components/footer'
import Privacy from './containers/privacyPolicy'
import Services from './containers/services'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component={Homepage}/>
        <Route exact path='/patients' component={Patients}/>
        <Route exact path='/appointments' component={Appointments}/>
        <Route exact path='/privacy-policy' component={Privacy}/>
        <Route exact path='/services/:id' component={Services}/>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App

