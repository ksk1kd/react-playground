import { useState } from 'react'

export function UseStatePlayground() {
  const options = ['option1', 'option2', 'option3']

  const [text, setText] = useState('Initial Text')
  const [checkbox, setCheckbox] = useState(false)
  const [radio, setRadio] = useState('option1')
  const [select, setSelect] = useState('option1')
  const [checkboxes, setCheckboxes] = useState(
    options.map((value) => ({ value, checked: false })),
  )

  return (
    <>
      <h1>useState</h1>
      <section>
        <h2>Text</h2>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </div>
        <div>Text : {text}</div>
      </section>
      <section>
        <h2>Checkbox</h2>
        <div>
          <input
            type="checkbox"
            checked={checkbox}
            onChange={(e) => {
              setCheckbox(e.target.checked)
            }}
          />
        </div>
        <div>Checkbox : {checkbox ? 'TRUE' : 'FALSE'}</div>
      </section>
      <section>
        <h2>Radio</h2>
        <div>
          {options.map((value) => (
            <input
              type="radio"
              name="radio"
              value={value}
              checked={radio === value}
              onChange={(e) => {
                setRadio(e.target.value)
              }}
              key={value}
            />
          ))}
        </div>
        <div>Radio : {radio}</div>
      </section>
      <section>
        <h2>Select</h2>
        <div>
          <select
            value={select}
            onChange={(e) => {
              setSelect(e.target.value)
            }}
          >
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>Select : {select}</div>
      </section>
      <section>
        <h2>Multiple Checkbox</h2>
        <div>
          {checkboxes.map((checkbox) => (
            <label key={checkbox.value}>
              <input
                type="checkbox"
                name={checkbox.value}
                value={checkbox.value}
                checked={checkboxes.some(
                  (item) => item.value === checkbox.value && item.checked,
                )}
                onChange={(e) =>
                  setCheckboxes((prevCheckboxes) =>
                    prevCheckboxes.map((prevCheckbox) =>
                      prevCheckbox.value === checkbox.value
                        ? { ...prevCheckbox, checked: e.target.checked }
                        : prevCheckbox,
                    ),
                  )
                }
              />
              {checkbox.value}
            </label>
          ))}
        </div>
        <div>
          Multiple Checkbox:{' '}
          {checkboxes
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => `${checkbox.value} `)}
        </div>
      </section>
    </>
  )
}
