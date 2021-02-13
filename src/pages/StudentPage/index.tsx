import React from 'react'
import WelcomeYofit from '../../components/MessageBoxPinned/WelcomeYofit'
import AvaliableTraining from './AvaliableTraining'
import Header from './Header'
import OtherTrainings from './OtherTrainings'
import EnabledTraining from './EnabledTraining'
import Login from '../../components/Modal/Login'
import GlobalProvider from '../../store'

function StudentPage() {
  return (
    <GlobalProvider>
      <Login />

      <div style={{display: 'flex'}}>
        <div style={{flex: 1}}>
          <Header />
          <WelcomeYofit />
          <AvaliableTraining />
        </div>

        <div style={{width: '350px', height:'100vh', borderLeft: 'solid 1px #EEEEEE', padding: '1rem'}}>
          <EnabledTraining />
          <OtherTrainings />
        </div>
      </div>
    </GlobalProvider>
  )
}

export default StudentPage
