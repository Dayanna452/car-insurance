import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import { Input } from '../../blocks/Input'
import { Button } from '../../blocks/Button'
import { Checkbox } from '../../blocks/Checkbox'
import { ValueLabel } from '../../blocks/Select/types/select'
import { InputDocument } from '../InputDocument'


import { useUsers } from '../../../../services/users'
import { useUsersData } from '../../../../data/stores/useUsersData'
import { options } from '../../../../data/constants/data'


export const HomeForm = () => {
  const navigate = useNavigate()
  const { data } = useUsers()
  const { userData, setUserData, setUser } = useUsersData()
  const [formError, setFormError] = useState<string | null>(null)
  const [selectOption, setSelectOption] = useState<ValueLabel>(options[0])

  // Verificar si todos los campos están completos
  const isFormComplete: boolean =
    userData.typeDocument !== '' &&
    userData.document !== '' &&
    userData.phoneNumber !== '' &&
    userData.privacy &&
    userData.conditions

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isFormComplete) {
      navigate('/plans')
      setUser(data)
      setFormError(null)
    } else {
      console.log('formError', formError)
      setFormError('Por favor, completa todos los campos.')
    }
  }

  return (
    <form className='form gap-16'>
      <InputDocument
        options={options}
        selectOption={selectOption}
        setSelectOption={setSelectOption}
        onChangeDocument={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserData({ ...userData, document: e.target.value })
        }
        //onChangeSelect={setSelectOption}
        onChangeSelect={(option) => {
          setUserData({ ...userData, typeDocument: option.value })
        }}
      />
      <Input
        type='number'
        label='Celular'
        name='phoneNumber'
        value={userData.phoneNumber}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserData({ ...userData, phoneNumber: e.target.value })
        }
      />
      <div className='d-flex flex-column gap-10'>
        <Checkbox
          name='privacy'
          checked={userData.privacy}
          text='Acepto lo Política de Privacidad'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserData({ ...userData, privacy: e.target.checked })
          }
        />
        <Checkbox
          name='conditions'
          checked={userData.conditions}
          text='Acepto la Política Comunicaciones Comerciales'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserData({ ...userData, conditions: e.target.checked })
          }
        />
      </div>
      <div>
        <Button className='btn_conditions' color='dark' variant='text'>
          Aplican Términos y Condiciones.
        </Button>
      </div>
      <Button
        color='dark'
        disabled={!isFormComplete}
        onClick={e => handleSubmit(e)}
      >
        Cotiza Aquí
      </Button>
    </form>
  )
}
