import React, { useEffect, useState } from 'react';
import Poststatus from './common/postupdate/Postupdate'
import '../sass/HomeComponent.scss'

export default function HomeComponent( {currentUser}) {
  return (
    <div className='homeContainer'>
      <Poststatus currentUser={currentUser} />
    </div>
  )
}
