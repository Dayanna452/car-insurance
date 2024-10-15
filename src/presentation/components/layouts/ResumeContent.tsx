//Libraries
import { useEffect } from 'react'

//Components / Contents
import { Header } from '../contents/Header'
import { Wrapper } from '../contents/Wrapper'
import { PlanResume } from '../contents/PlanResume'

//Data
import { usePlan } from '../../../data/stores/usePlan'
import { useUser } from '../../../data/stores/useUser'
import { StepperPlans } from '../contents/StepperPlans'

export const ResumeContent = () => {
  const steps = [
    { title: "Planes y coberturas", active: false },
    { title: "Resumen", active: true },
  ];
  const { setSelectedPlan } = usePlan()
  const { setUser, setUserData } = useUser()

  useEffect(() => {
    const user = localStorage.getItem('user')
    const userData = localStorage.getItem('userData')
    const planSelected = localStorage.getItem('plan')

    if (user) setUser(JSON.parse(user))
    if (userData) setUserData(JSON.parse(userData))
    if (planSelected) setSelectedPlan(JSON.parse(planSelected))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='template'>
      <Header />
      <Wrapper>
        <StepperPlans className="stepper__section-mobile--none" steps={steps} />
        <PlanResume />
      </Wrapper>
    </div>
  )
}
