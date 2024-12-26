import { UseMemoPlayground } from './components/useMemoPlayground'
import { UseReducerPlayground } from './components/useReducerPlayground'
import { UseStatePlayground } from './components/useStatePlayground'
import { UseTransitionPlayground } from './components/useTransitionPlayground'

function App() {
  return (
    <>
      <div className="container">
        <UseTransitionPlayground />
        <UseMemoPlayground />
        <UseReducerPlayground />
        <UseStatePlayground />
      </div>
    </>
  )
}

export default App
