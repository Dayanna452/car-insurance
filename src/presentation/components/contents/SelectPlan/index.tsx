import { usePlan } from "../../../../data/stores/usePlan";
import { ForWhoCard } from "../../blocks/ForWhoCard";
import { ProtectionLight } from "../../icons/ProtectionLight";

export const SelectPlan = () => {
  const {
    setSelectedForWhoPlan: setSelectedPlan,
    selectedForWhoPlan: selectedPlan,
  } = usePlan();
  return (
    <div className="select-plan">
      <ForWhoCard
        title="Para mí"
        icon={<ProtectionLight />}
        checked={selectedPlan === "me"}
        onChecked={() => setSelectedPlan("me")}
        description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
      />
      <ForWhoCard
        title="Para alguien mí"
        icon={<ProtectionLight />}
        checked={selectedPlan === "other"}
        onChecked={() => setSelectedPlan("other")}
        description="Realiza una cotización para uno de tus familiares o cualquier persona."
      />
    </div>
  );
};
