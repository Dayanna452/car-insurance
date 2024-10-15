import { Stepper } from '../../blocks/Stepper'
import { StepperMobile } from '../../blocks/Stepper/parts/StepperMobile'

interface StepPlans {
  className?: string
  steps: { title: string; active: boolean }[]
}

export const StepperPlans = ({ className, steps }: StepPlans) => {
  return (
    <>
      <section className='stepper__section'>
        <Stepper steps={steps} />
      </section>
      <section
        className={`${className ?? ''} container stepper__section-mobile`}
      >
        <StepperMobile />
      </section>
    </>
  )
}
