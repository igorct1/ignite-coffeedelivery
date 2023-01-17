import { OurCoffeesContainer, OurCoffeesContainerCards } from "./styles";
import { coffees } from "./data/coffees";
import { CoffeeCard } from "../CoffeeCard";

export const OurCoffees = () => {
  return (
    <OurCoffeesContainer>
      <h1>Nossos cafés</h1>
      <OurCoffeesContainerCards>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </OurCoffeesContainerCards>
    </OurCoffeesContainer>
  );
};
