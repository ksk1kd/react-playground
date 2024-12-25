import { useMemo, useState } from 'react'

function sumToMax(num: number) {
  // console.log('sumToMax called')
  return Array.from({ length: num + 1 }, (_, i) => i).reduce(
    (acc, val) => acc + val,
    0,
  )
}

export function UseMemoPlayground() {
  const [state, setState] = useState(false)
  const to = 10000

  const result = useMemo(() => sumToMax(to), [])
  // const result = sumToMax(to)

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
          Sum of 0 to {to}: {result}
        </div>
      </section>
    </>
  )
}
