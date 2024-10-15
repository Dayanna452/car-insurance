import { EmblaOptionsType } from "embla-carousel";

import { PlanCard } from "../../../blocks/PlanCard";
import { Carousel } from "../../../blocks/Carousel";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../../../utils/useMediaQuery";

const OPTIONS: EmblaOptionsType = {};

export const Plans = () => {
  const navigate = useNavigate();
  const data = { list: [] };
  const isTablet = useMediaQuery("(min-width: 768px)");
  const plansData = data?.list ?? [];

  const planSlides = plansData.map((plan, index) => (
    <div key={`plan-item-${index}`} className="plan-item">
      <PlanCard
        price={10}
        title={"Title"}
        descriptions={[]}
        // discount={selectedForWhoPlan === "other"}
        handleSelectPlan={() => {
          // setSelectedPlan(plan);
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
