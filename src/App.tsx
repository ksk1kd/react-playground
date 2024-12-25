import { UseMemoPlayground } from './components/useMemoPlayground'
import { UseReducerPlayground } from './components/useReducerPlayground'
import { UseStatePlayground } from './components/useStatePlayground'

function App() {
  return (
    <>
      <div className="container">
        <UseMemoPlayground />
        <UseReducerPlayground />
        <UseStatePlayground />
      </div>
    </>
  )
}

export default App
