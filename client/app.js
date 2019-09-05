import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <div className="app_nav">
        <Navbar />
      </div>
      <div className="app_body">
        <Routes />
      </div>
    </div>
  )
}

export default App
