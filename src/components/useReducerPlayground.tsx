import { useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type State = {
  id: string
  label: string
  completed: boolean
}[]

type Action =
  | {
      type: 'add'
      payload: {
        label: string
      }
    }
  | {
      type: 'update'
      payload: {
        id: string
        completed: boolean
      }
    }
  | {
      type: 'delete'
      payload: {
        id: string
      }
    }

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: uuidv4(),
          label: action.payload.label,
          completed: false,
        },
      ]
    case 'update':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: action.payload.completed }
          : item,
      )
    case 'delete':
      return state.filter((item) => item.id !== action.payload.id)
  }
}

export function UseReducerPlayground() {
  const [text, setText] = useState('')
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <>
      <h1>useReducer</h1>
      <section>
        <h2>ToDo</h2>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
          <button
            type="button"
            onClick={() => {
              setText('')
              dispatch({
                type: 'add',
                payload: { label: text },
              })
            }}
          >
            Add
          </button>
        </div>
        {state.filter((item) => !item.completed).length ? (
          <ul>
            {state
              .filter((item) => !item.completed)
              .map((item) => (
                <li key={item.id}>
                  <label>
                    <input
                      type="checkbox"
                      onClick={() =>
                        dispatch({
                          type: 'update',
                          payload: { id: item.id, completed: true },
                        })
                      }
                    />
                    {item.label}
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setText('')
                      dispatch({
                        type: 'delete',
                        payload: { id: item.id },
                      })
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        ) : (
          <p>No Item</p>
        )}
      </section>
      <section>
        <h2>Completed</h2>
        {state.filter((item) => item.completed).length ? (
          <ul>
            {state
              .filter((item) => item.completed)
              .map((item) => (
                <li key={item.label}>
                  <label>
                    <input
                      type="checkbox"
                      onClick={() =>
                        dispatch({
                          type: 'update',
                          payload: { id: item.id, completed: false },
                        })
                      }
                      checked
                    />
                    {item.label}
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setText('')
                      dispatch({
                        type: 'delete',
                        payload: { id: item.id },
                      })
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        ) : (
          <p>No Item</p>
        )}
      </section>
    </>
  )
}
