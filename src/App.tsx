import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@axonivy/ui-components';
import '@axonivy/ui-components/lib/style.css';
import { IvyIcons } from '@axonivy/ui-icons';
import '@axonivy/ui-icons/lib/ivy-icons.css';
import FruitList from './fruitList';
import CounterButton from './countButton';

function App() {
  const [count, setCount] = useState(0)
  const user = {
    name: "rew",
    mail: "reguel.obscured@axonivy.com"
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <Button variant='primary' size='large' icon={IvyIcons.CallOutline} onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <h1>Styling and Variables</h1>
      <button className="plain-ok">ok</button>
      <h2>Hello {user.name} &lt; {user.mail}</h2>

      <h1>Lists</h1>
      <FruitList />

      <h1>State</h1>
      <CounterButton init={300}/>
      <CounterButton/>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
