import React from "react";
import { HeaderContainer } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import coffeLogo from "../../assets/logo.svg";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { cartQuantity } = React.useContext(CartContext);
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeLogo} />
      </NavLink>
      <div className="user-info">
        <p className="user-location">
          <MapPin size={20} weight="fill" />
          São Paulo, SP
        </p>

        <NavLink to="/checkout" className="user-cart">
          {cartQuantity >= 1 && <span>{cartQuantity}</span>}
          <ShoppingCart size={20} weight="fill" />
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
