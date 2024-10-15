import { Input } from '../../blocks/Input'
import { Select } from '../../blocks/Select'
import { ValueLabel } from '../../blocks/Select/types/select'

interface InputDocumentProps {
  options: ValueLabel[]
  selectOption: ValueLabel
  onChangeSelect: (option: ValueLabel) => void
  setSelectOption: React.Dispatch<React.SetStateAction<ValueLabel>>
  onChangeDocument: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputDocument = ({
  options,
  selectOption,
  onChangeSelect,
  setSelectOption,
  onChangeDocument,
}: InputDocumentProps) => {
  return (
    <div className='row document-container'>
      <div className='col-5 col-lg-5'>
        <Select
          options={options}
          selectOption={selectOption}
          onChangeSelect={onChangeSelect}
          setSelectOption={setSelectOption}
        />
      </div>
      <div className='col-7 col-lg-7'>
        <Input
          type='number'
          name='document'
          className='input_simple'
          placeholder='Nro. de doc'
          onChange={onChangeDocument}
        />
      </div>
    </div>
  )
}
