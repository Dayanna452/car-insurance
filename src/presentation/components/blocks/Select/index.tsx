import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import { ValueLabel } from './types/select'

interface SelectProps {
  options: ValueLabel[]
  selectOption: ValueLabel
  setSelectOption: React.Dispatch<React.SetStateAction<ValueLabel>>
  onChangeSelect: (option: ValueLabel) => void
}

export const Select = ({
  options,
  selectOption = options[0],
  onChangeSelect,
  setSelectOption
}: SelectProps) => {
  const [openSelect, setOpenSelect] = useState(false)

  const handleToggle = () => setOpenSelect(!openSelect)
  const handleOptionClick = (option: ValueLabel) => {
    setSelectOption(option)
    onChangeSelect(option)
    setOpenSelect(false)
  }

  return (
    <div className='select-container'>
      <div
        className='row justify-content-between select-container__button'
        onClick={handleToggle}
      >
        {selectOption.label}
        <IoIosArrowDown />
      </div>
      <ul className={`select-list ${!openSelect ? 'select-list_hidden' : ''}`}>
        {options.map((option, index) => (
          <li
            key={index}
            value={option.value}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
