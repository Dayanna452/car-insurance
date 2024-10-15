import { useNavigate } from 'react-router-dom'
import { IoChevronBackCircleOutline } from 'react-icons/io5'

import { SelectPlan } from '../SelectPlan'
import { Button } from '../../blocks/Button'
import { Plans } from './parts/Plans'
import { useUserData } from '../../../../services/user'

export const PlanOptions = () => {
  const navigate = useNavigate()
  const { data } = useUserData()
  const goBack = () => navigate(-1)
  return (
    <section className='plan-options container'>
      <div className='plan-options-action'>
        <Button
          onClick={goBack}
          variant='text'
          color='purple-dark'
          startIcon={<IoChevronBackCircleOutline />}
        >
          Volver
        </Button>
      </div>
      <div className='plan-options-content'>
        <h3 className='plan-options-content__title mb-8'>
          {data?.name || 'Rocío'} ¿Para quién deseas cotizar?
        </h3>
        <p className='plan-options-content__subtitle mb-32'>
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
      </div>
      <SelectPlan />
      <Plans />
    </section>
  )
}
