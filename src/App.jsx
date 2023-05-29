import * as React from 'react'
import Navigation from './components/Navigation'
import Wallet from '../screens/Wallet'
import RecoveryPhrase from '../screens/RecoveryPhrase'
import Completed from '../screens/Completed'
import { FormProvider, useForm } from 'react-hook-form'
import './App.css'

function App() {
  const [screen, setScreen] = React.useState(0)

  // RHF
  const methods = useForm()

  const prevScreen = () => setScreen((currentScreen) => currentScreen - 1)
  const nextScreen = () => setScreen((currentScreen) => currentScreen + 1)

  return (
    <>
      <Navigation screen={screen} prevScreen={prevScreen} />
      <FormProvider {...methods}>
        {screen === 0 && <Wallet nextScreen={nextScreen} />}
        {screen === 1 && <RecoveryPhrase nextScreen={nextScreen} />}
        {screen > 1 && <Completed />}
      </FormProvider>
    </>
  )
}

export default App
