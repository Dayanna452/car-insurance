import { EmblaOptionsType } from "embla-carousel";

import { PlanCard } from "../../../blocks/PlanCard";
import { Carousel } from "../../../blocks/Carousel";
import { usePlansData } from "../../../../../services/plans";
import { usePlan } from "../../../../../data/stores/usePlan";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../../../utils/useMediaQuery";

const OPTIONS: EmblaOptionsType = {};

export const Plans = () => {
  const navigate = useNavigate();
  const { data } = usePlansData();
  const isTablet = useMediaQuery("(min-width: 768px)");
  const plansData = data?.list ?? [];
  const { selectedForWhoPlan, setSelectedPlan } = usePlan();

  const planSlides = plansData.map((plan, index) => (
    <div key={`plan-item-${index}`} className="plan-item">
      <PlanCard
        price={plan.price}
        title={plan.name}
        descriptions={plan.description}
        discount={selectedForWhoPlan === "other"}
        handleSelectPlan={() => {
          setSelectedPlan(plan);
          navigate("/resume");
          console.log("Plan selected", plan);
        }}
      />
    </div>
  ));

  return (
    <div className="plans">
      {!isTablet && (
        <div className="plans__carousel">
          <Carousel slides={planSlides} options={OPTIONS} />
        </div>
      )}
      {isTablet && <div className="plans__list">{planSlides}</div>}
    </div>
  );
};
