import { useMemo, useState } from 'react'

function createArray() {
  // console.log('createArray called')
  const array = new Array(20000).fill(0).map((_, index) => index + 1)
  return array
}

export function UseMemoPlayground() {
  const [state, setState] = useState(false)

  const array = useMemo(() => createArray(), [])
  // const array = createArray()

  return (
    <>
      <h1>useMemo</h1>
      <section>
        <div>
          <button type="button" onClick={() => setState(!state)}>
            Rerender
          </button>
        </div>
        <div>
          <ul>
            {array.slice(0, 10).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
