import React from 'react'
import WelcomeYofit from '../../components/MessageBoxPinned/WelcomeYofit'
import AvaliableTraining from './AvaliableTraining'
import Header from './Header'
import OtherTrainings from './OtherTrainings'
import Training from './Training'

function StudentPage() {
  return (
    <>
      <div style={{display: 'flex'}}>
        <div style={{flex: 1}}>
          <Header />
          <WelcomeYofit />
          <AvaliableTraining />
        </div>

        <div style={{width: '350px', height:'100vh', borderLeft: 'solid 1px #EEEEEE', padding: '1rem'}}>
          <Training />
          <OtherTrainings />
        </div>
      </div>
    </>
  )
}

export default StudentPage