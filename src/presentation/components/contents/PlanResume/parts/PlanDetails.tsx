import { Family } from '../../../icons/Family'

import { useUser } from '../../../../../data/stores/useUser'
import { usePlan } from '../../../../../data/stores/usePlan'

export const PlanDetails = () => {
  const { user, userData } = useUser()
  const { selectedPlan } = usePlan()

  return (
    <div className='plan-resume row gap-16'>
      <div className='col-12 row gap-8'>
          <h3 className='plan-resume__title col-12'>
            Precios calculados para:
          </h3>
          <h2 className='col-12 plan-resume__user'>
            <div className='row align-items-center gap-8'>
              <Family />
              {user?.name} {user?.lastName}
            </div>
          </h2>
      </div>
      <div className='col-12 row gap-4 plan-details'>
        <h3 className='plan-resume__subtitle col-12'>Responsable de pago</h3>
        <p className='col-12'>
          {userData.typeDocument}: {userData.document}
        </p>
        <p className='col-12'>Celular: {userData.phoneNumber}</p>
      </div>
      <div className='col-12 row gap-4 plan-details'>
        <h3 className='plan-resume__subtitle col-12'>Plan Elegido</h3>
        <p className='col-12'>{selectedPlan?.name}</p>
        <p className='col-12'>Costo del plan: ${selectedPlan?.price} al mes</p>
      </div>
    </div>
  )
}
