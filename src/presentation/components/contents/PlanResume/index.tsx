import { useNavigate } from 'react-router-dom'
import { IoChevronBackCircleOutline } from 'react-icons/io5'

import { Button } from '../../blocks/Button'

import { PlanDetails } from './parts/PlanDetails'

import { usePlan } from '../../../../data/stores/usePlan'

export const PlanResume = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { selectedPlan } = usePlan()

  return (
    <>
      {selectedPlan && (
        <section className='container'>
          <div className='plan-options-action mt-64'>
            <Button
              onClick={goBack}
              variant='text'
              color='purple-dark'
              startIcon={<IoChevronBackCircleOutline />}
            >
              Volver
            </Button>
          </div>
          <div className='mb-40'>
            <h3 className='plan-options-content__resume mt-32 mb-8'>
              Resumen del seguro
            </h3>
          </div>
          <PlanDetails/>
        </section>
      )}
    </>
  )
}
