import { OurCoffeesContainer, OurCoffeesContainerCards } from "./styles";
import { coffes } from "./data/coffes";
import { CoffeCard } from "../CoffeCard";

export const OurCoffes = () => {
  return (
    <OurCoffeesContainer>
      <h1>Nossos cafés</h1>
      <OurCoffeesContainerCards>
        {coffes.map((coffee) => (
          <CoffeCard key={coffee.id} coffee={coffee} />
        ))}
      </OurCoffeesContainerCards>
    </OurCoffeesContainer>
  );
};
