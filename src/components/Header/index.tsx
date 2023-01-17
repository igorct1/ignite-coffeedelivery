import { HeaderContainer } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";
import coffeLogo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={coffeLogo} />
      </a>
      <div className="user-info">
        <p className="user-location">
          <MapPin size={20} weight="fill" />
          São Paulo, SP
        </p>
        <a href="/cart" className="user-cart">
          <ShoppingCart size={20} weight="fill" />
        </a>
      </div>
    </HeaderContainer>
  );
}
