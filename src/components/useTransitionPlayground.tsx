import { useState, useTransition } from 'react'

function createArray() {
  const array = new Array(20000).fill(0).map((_, index) => index + 1)
  return array
}

export function UseTransitionPlayground() {
  const [isPending, startTransition] = useTransition()
  const [array, setArray] = useState<number[]>([])

  return (
    <>
      <h1>useTransition</h1>
      <section>
        <div>
          <button
            type="button"
            onClick={() => startTransition(() => setArray(createArray()))}
          >
            Create Large Array
          </button>
        </div>
        <div>
          {isPending ? (
            'isPending...'
          ) : (
            <ul>
              {array.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
